## 禁止在 RegExp 构造函数中出现无效的正则表达式 (no-invalid-regexp)
```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

在正则表达式字面量中无效的模式在代码解析时会引起 SyntaxError，但是 RegExp 的构造函数中无效的字符串只在代码执行时才会抛出 SyntaxError。

### Rule Details
该规则禁止在 RegExp 构造函数中出现无效的正则表达式。

错误 代码示例：
```js
/*eslint no-invalid-regexp: "error"*/

RegExp('[')

RegExp('.', 'z')

new RegExp('\\')
```

正确 代码示例：
```js
/*eslint no-invalid-regexp: "error"*/

RegExp('.')

new RegExp

this.RegExp('[')
```

### Environments
ECMAScript 6 为 RegExp 构造函数增加了以下标志参数：

"u" (unicode)
"y" (sticky)
你可以在你的 ESLint 配置 中通过设置 ECMAScript 为 6 ，来使这些标志被有效地识别。

如果你想允许使用额外的标志，也不论出于什么目的，你可以在 .eslintrc 使用 allowConstructorFlags 选项指定它们。这样，不管是否有 ecmaVersion 设置，这些标记将会被该规则忽略。

### Options
该规则有例外情况，是个对象：

"allowConstructorFlags" 是个标志的数组
allowConstructorFlags
选项 { "allowConstructorFlags": ["u", "y"] } 的 正确 代码示例：
```js
/*eslint no-invalid-regexp: ["error", { "allowConstructorFlags": ["u", "y"] }]*/

new RegExp('.', 'y')

new RegExp('.', 'yu')
```

### Version
该规则在 ESLint 0.1.4 中被引入。
