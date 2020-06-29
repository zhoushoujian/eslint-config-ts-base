## 禁止连续赋值 (no-multi-assign)

对变量连续赋值可能会导致意想不到的结果，而且难以阅读。

a = b = c = d;
Rule Details
该规则禁止在单行语句中使用多个赋值。

错误 代码示例：
```js
/*eslint no-multi-assign: "error"*/

var a = b = c = 5;

var foo = bar = "baz";

var a =
    b =
    c;
```

正确 代码示例：
```js
/*eslint no-multi-assign: "error"*/
var a = 5;
var b = 5;
var c = 5;

var foo = "baz";
var bar = "baz";

var a = c;
var b = c;
```

### Version
该规则在 ESLint 3.14.0 中被引入。
