## 要求必须有基数 (radix)

当使用parseInt()函数时，通常省略第二个参数，基数，并根据第一个参数确定它是什么类型的数字。 默认情况下，parseInt()将自动检测十进制和十六进制(通过0x前缀)。在ECMAScript 5 之前，parseInt()也自动检测八进制文本，这会出现问题，因为许多开发人员认为前导0会被忽略。

由于这种混乱，所以建议在parseInt()中始终使用基数以消除意想不到的后果。因此，不要这么做:
```js
var num = parseInt("071");      // 57
```
要这么做：
```js
var num = parseInt("071", 10);  // 71
```
ECMAScript 5 改变了parseInt()的这种行为，它不再自动检测八进制文本，而是把它们当作十进制文本。然而，对第一个参数的十六进制和十进制的解释之间的差异导致很多开发者继续使用基数来确保字符串是按预期的方式解释执行。

另一方面，如果代码只对兼容 ES5 环境，传递基数10可能是多余的。在这种情况下，你可能想禁止使用这样一个基数。

### Rule Details
该规则旨在防止出现不确定的字符串对数字的转换或防止在现代环境中出现多余的基数 10。

### Options
此规则有两个选项：

"always"强制提供一个基数（默认的）
"as-needed"禁止提供基数10

```always```
"always"选项的 错误 代码示例：
```js
/*eslint radix: "error"*/

var num = parseInt("071");

var num = parseInt(someValue);

var num = parseInt("071", "abc");

var num = parseInt();
````

"always"选项的 正确 代码示例：
```js
/*eslint radix: "error"*/

var num = parseInt("071", 10);

var num = parseInt("071", 8);

var num = parseFloat(someValue);
```

```as-needed```
"as-needed"选项的 错误 代码示例：
```js
/*eslint radix: ["error", "as-needed"]*/

var num = parseInt("071", 10);

var num = parseInt("071", "abc");

var num = parseInt();
```

"as-needed"选项的 正确 代码示例：
```js
/*eslint radix: ["error", "as-needed"]*/

var num = parseInt("071");

var num = parseInt("071", 8);

var num = parseFloat(someValue);
```

### When Not To Use It
如果你不想强制约定是否有10这个基数，你可以关闭此规则。

### Version
该规则在 ESLint 0.0.7 中被引入。

