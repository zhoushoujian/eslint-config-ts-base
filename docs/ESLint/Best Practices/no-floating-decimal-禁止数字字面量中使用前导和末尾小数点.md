## 禁止浮点小数 (no-floating-decimal)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在 JavaScript 中，浮点值会包含一个小数点，没有要求小数点之前或之后必须有一个数字。例如，以下例子都是有效的 JavaScript 数字：
```js
var num = .5;
var num = 2.;
var num = -.7;
```

虽然不是一个语法错误，这种格式的数字使真正的小数和点操作符变的难以区分。由于这个原因，有些人建议应该总是在小数点前面和后面有一个数字，以明确表明是要创建一个小数。

### Rule Details
此规则目的在于消除浮动小数点，并且，当数值的小数点之前或之后缺少数字时，该规则将发出警告。

错误 代码示例：
```js
/*eslint no-floating-decimal: "error"*/

var num = .5;
var num = 2.;
var num = -.7;
```

正确 代码示例：
```js
/*eslint no-floating-decimal: "error"*/

var num = 0.5;
var num = 2.0;
var num = -0.7;
```

### When Not To Use It
如果你并不担心误解浮点小数，你可以安全的关闭此规则。

### Version
该规则在 ESLint 0.0.6 中被引入。

