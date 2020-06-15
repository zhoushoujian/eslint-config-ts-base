## 禁止使用按位操作符 (no-bitwise)

在 JavaScript 是很少使用按位操作符，& 或 | 经常会错写为 && 或 ||，这将导致意外的情况出现。
```js
var x = y | z;
```
### Rule Details
该规则禁止使用按位操作符。

错误 代码示例：
```js
/*eslint no-bitwise: "error"*/

var x = y | z;

var x = y & z;

var x = y ^ z;

var x = ~ z;

var x = y << z;

var x = y >> z;

var x = y >>> z;

x |= y;

x &= y;

x ^= y;

x <<= y;

x >>= y;

x >>>= y;
```

正确 代码示例：
```js
/*eslint no-bitwise: "error"*/

var x = y || z;

var x = y && z;

var x = y > z;

var x = y < z;

x += y;
```
### Options
该规则有一个对象选项：

"allow": 允许作为例外情况出现的按位操作符列表。
"int32Hint": 预习使用在 |0 模式中按位或进行类型转换。
```allow```
选项 { "allow": ["~"] } 的 正确 代码示例：
```js
/*eslint no-bitwise: ["error", { "allow": ["~"] }] */

~[1,2,3].indexOf(1) === -1;
```

```int32Hint```
选项 { "int32Hint": true } 的 正确 代码示例：
```js
/*eslint no-bitwise: ["error", { "int32Hint": true }] */

var b = a|0;
```

### Version
该规则在 ESLint 0.0.2 中被引入。

