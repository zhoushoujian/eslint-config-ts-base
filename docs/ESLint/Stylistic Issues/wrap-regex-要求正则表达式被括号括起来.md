## 要求正则表达式被包裹起来 (wrap-regex)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在某些情况下，使用正则表达式时，它看起来会像一个除法运算符。例如：
```js
function a() {
    return /foo/.test("bar");
}
```

### Rule Details
该规则旨在消除斜线运算符造成的歧义，增加代码的可读性。

错误 代码示例：
```js
/*eslint wrap-regex: "error"*/

function a() {
    return /foo/.test("bar");
}
```

正确 代码示例：
```js
/*eslint wrap-regex: "error"*/

function a() {
    return (/foo/).test("bar");
}
```

### Version
该规则在 ESLint 0.1.0 中被引入。
