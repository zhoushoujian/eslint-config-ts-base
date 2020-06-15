## 要求或禁止在函数标识符和其调用之间有空格 (func-call-spacing)
命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

当调用一个函数时，开发者可以在函数名和调用它的括号之间插入空格。以下函数调用效果是一样的：
```js
alert('Hello');
alert ('Hello');

console.log(42);
console.log (42);

new Date();
new Date ();
```

### Rule Details
该规则要求或禁止在函数名和开括号之间有空格。

### options
该规则有一个字符串选项：

"never" (默认) 禁止在函数名和开括号之间有空格
"always" 要求在函数名和开括号之间有空格
未来，在 "always" 模式中，可以有第二个选项，是个对象，包含一个布尔类型的 allowNewlines 属性。

```never```
默认选项 "never" 的 错误 代码示例：
```js
/*eslint func-call-spacing: ["error", "never"]*/

fn ();

fn
();
```

默认选项 "never" 的 正确 代码示例：
```js
/*eslint func-call-spacing: ["error", "never"]*/

fn();
```

```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint func-call-spacing: ["error", "always"]*/

fn();

fn
();
```

选项 "always" 的 正确 代码示例：
```js
/*eslint func-call-spacing: ["error", "always"]*/

fn ();
```

```allowNewlines```
默认情况下，"always" 不允许换行。在 "always" 模式中，设置 allowNewlines 选项为 true 来允许换行。换行从来就不是必须的。

选项 { "allowNewlines": true } 的 错误 代码示例：
```js
/*eslint func-call-spacing: ["error", "always", { "allowNewlines": true }]*/

fn();
```

选项 { "allowNewlines": true } 的 正确 代码示例：
```js
/*eslint func-call-spacing: ["error", "always", { "allowNewlines": true }]*/

fn (); // Newlines are never required.

fn
();
```
### When Not To Use It
如果你的项目并不关心在函数调用中强制使用一致的空格风格，你可以关闭此规则。

### Version
该规则在 ESLint 3.3.0 中被引入。
