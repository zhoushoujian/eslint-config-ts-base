## 强制回调错误处理 (handle-callback-err)

在 Node.js 中，最普遍的处理异步行为是回调模式。

这个模式期望一个 Error 对象或 null 作为回调的第一个参数。

如果忘记处理这些错误会导致你的应用程序出现一些非常奇怪的行为。
```js
function loadData (err, data) {
    doSomething(); // forgot to handle error
}
```

### Rule Details
该规则期望当你在 Node.js 中使用回调模式时，你将处理错误。

### Options
该规则只有一个字符串选项：错误参数的名称。默认是 err。

默认参数 "err" 的 错误 代码示例：
```js
/*eslint handle-callback-err: "error"*/

function loadData (err, data) {
    doSomething();
}
```

默认参数 "err" 的 正确 代码示例：
```js
/*eslint handle-callback-err: "error"*/

function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}

function generateError (err) {
    if (err) {}
}
```

参数 "error" 的 正确 代码示例：

/*eslint handle-callback-err: ["error", "error"]*/
```js
function loadData (error, data) {
    if (error) {
       console.log(error.stack);
    }
    doSomething();
}
```

### regular expression
有时候（特别是在大项目中）错误变量名不都一致在整个项目中，所以你需要一个更加灵活的配置去确保未处理的错误得到此规则的认可。

如果错误变量的配置名以 ^ 开头被认为是一个正则模式。

如果这个选项是 "^(err|error|anySpecificError)$"，当参数名为 err, error or anySpecificError 时，该规则会报告有未处理的错误。
如果这个选项是 "^.+Error$"，当参数名以 Error 结尾时（例如，connectionError 或 validationError），该规则会报告有未处理的错误。
如果这个选项是 "^.*(e|E)rr"，当参数名匹配任何字符串中含有 err 或 Err的（例如，err，error，anyError，some_err`）该规则会报告有未处理的错误。
When Not To Use It
如果一些情况下忽略错误处理并不影响应用的安全，并且你相信一些其他形式的监督将帮助你发现问题，这时可以不使用此规则。

### Version
该规则在 ESLint 0.4.5 被引入。

