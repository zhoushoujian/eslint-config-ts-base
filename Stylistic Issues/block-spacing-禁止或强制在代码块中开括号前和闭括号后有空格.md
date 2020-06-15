## 禁止或强制在代码块中开括号前和闭括号后有空格 (block-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

### Rule Details
该规则强制在左花括号和同一行上的下一个 token 之间有一致的空格。该规则同样强制右花括号和在同一行的前一个 token 之间有一致的空格。

### Options
该规则有一个字符串选项：

"always" (more) 要求使用一个或多个空格
"never" 禁用空格
```always```
默认选项"always"的 错误 代码示例：
```js
/*eslint block-spacing: "error"*/

function foo() {return true;}
if (foo) { bar = 0;}
function baz() {let i = 0;
    return i;
}
```

默认选项"always"的 正确 代码示例：
```js
/*eslint block-spacing: "error"*/

function foo() { return true; }
if (foo) { bar = 0; }
```

```never```
选项"never"的 错误 代码示例：
```js
/*eslint block-spacing: ["error", "never"]*/

function foo() { return true; }
if (foo) { bar = 0;}
```

选项"never"的 正确 代码示例：
```js
/*eslint block-spacing: ["error", "never"]*/

function foo() {return true;}
if (foo) {bar = 0;}
```

### When Not To Use It
如果你不想收到单行代码块中间距风格问题的通知，你可以禁用此规则。

### Version
该规则在 ESLint 1.2.0 被引入。
