### 需要把立即执行的函数包裹起来 (wrap-iife)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

你可以立即调用函数表达式，而不是函数声明。创建一个立即执行函数 (IIFE) 的一个通用技术是用括号包裹一个函数声明。括号内的函数被解析为一个表达式，而不是一个声明。
```js
// function expression could be unwrapped
var x = function () { return { y: 1 };}();

// function declaration must be wrapped
function () { /* side effects */ }(); // SyntaxError
```

### Rule Details
该规则要求所有的立即执行函数表达式使用括号包裹起来。

### Options
该规则有两个选项，一个是字符串，一个是对象。

字符串选项：

"outside" 强制总是包裹 call 表达式。默认是 "outside"。
"inside" 强制总是包裹 function 表达式。
"any"强制总是包裹，但允许其它风格。
对象选项：

"functionPrototypeMethods": true 使用 .call 和 .apply 调用时，强制要求包裹函数表达式。默认为 false。
```outside```
默认选项 "outside" 的 错误 代码示例：
```js
/*eslint wrap-iife: ["error", "outside"]*/

var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };})(); // wrapped function expression
```

默认选项 "outside" 的 正确 代码示例：
```js
/*eslint wrap-iife: ["error", "outside"]*/

var x = (function () { return { y: 1 };}()); // wrapped call expression
```

```inside```
选项 "inside" 的 错误 代码示例：
```js
/*eslint wrap-iife: ["error", "inside"]*/

var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };}()); // wrapped call expression
```

选项 "inside" 的 正确 代码示例：
```js
/*eslint wrap-iife: ["error", "inside"]*/

var x = (function () { return { y: 1 };})(); // wrapped function expression
```

```any```
选项 "any" 的 错误 代码示例：
```js
/*eslint wrap-iife: ["error", "any"]*/

var x = function () { return { y: 1 };}(); // unwrapped
```

选项 "any" 的 正确 代码示例：
```js
/*eslint wrap-iife: ["error", "any"]*/

var x = (function () { return { y: 1 };}()); // wrapped call expression
var x = (function () { return { y: 1 };})(); // wrapped function expression
```

```functionPrototypeMethods```
选项 "inside", { "functionPrototypeMethods": true } 的 错误 代码示例：
```js
/* eslint wrap-iife: [2, "inside", { functionPrototypeMethods: true }] */

var x = function(){ foo(); }()
var x = (function(){ foo(); }())
var x = function(){ foo(); }.call(bar)
var x = (function(){ foo(); }.call(bar))
```

选项 "inside", { "functionPrototypeMethods": true } 的 正确 代码示例：
```js
/* eslint wrap-iife: [2, "inside", { functionPrototypeMethods: true }] */

var x = (function(){ foo(); })()
var x = (function(){ foo(); }).call(bar)
```

### Version
该规则在 ESLint 0.0.9 中被引入。
