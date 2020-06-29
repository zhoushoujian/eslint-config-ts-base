## 要求操作符周围有空格 (space-infix-ops)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

虽然格式化首选项都非常个人化，但大量的风格指南要求运算符周围有空格，例如：
```js
var sum = 1 + 2;
```
这些额外空格的支持者认为它将使代码易于阅读，可以更轻易地突出潜在的错误，例如：
```
var sum = i+++2;
```
虽然这是有效的 JavaScript 语法，但很难确定作者的意图。

### Rule Details
此规则旨在确保中缀运算符周围有空格。

### Options
该规则接收唯一一个可选项参数，具有以下默认值：

"space-infix-ops": ["error", {"int32Hint": false}]
int32Hint
设置 int32Hint 选项为 true (默认 false) 允许 a|0 不带空格.
```js
var foo = bar|0; // `foo` is forced to be signed 32 bit integer
```
错误 代码示例：
```js
/*eslint space-infix-ops: "error"*/
/*eslint-env es6*/

a+b

a+ b

a +b

a?b:c

const a={b:1};

var {a=0}=bar;

function foo(a=0) { }
```

正确 代码示例：
```js
/*eslint space-infix-ops: "error"*/
/*eslint-env es6*/

a + b

a       + b

a ? b : c

const a = {b:1};

var {a = 0} = bar;

function foo(a = 0) { }
```

### When Not To Use It
如果不关心中缀运算符前后间距的一致性，可以关闭此规则。

### Version
该规则在 ESLint 0.2.0 中被引入。

