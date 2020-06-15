## 强制模板字符串中空格的使用 (template-curly-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

我们可以在模板字符串中使用 ${ 和 } 嵌入表达式。

该规则可以根据风格指南强制花括号内空格的使用。
```js
let hello = `hello, ${people.name}!`;
```

### Rule Details
该规则只在维护模板字面量中空格的一致性。

### Options
```js
{
    "template-curly-spacing": ["error", "never"]
}
```

该规则有一个选项：

"never" (默认) - 禁止花括号内出现空格。
"always" - 要求花括号内有一个或多个空格。
Examples
never
默认选项 "never" 的 错误 代码示例：
```js
/*eslint template-curly-spacing: "error"*/

`hello, ${ people.name}!`;
`hello, ${people.name }!`;

`hello, ${ people.name }!`;
```

默认选项 "never" 的 正确 代码示例：
```js
/*eslint template-curly-spacing: "error"*/

`hello, ${people.name}!`;

`hello, ${
    people.name
}!`;
```

always
选项 "always" 的 错误 代码示例：
```js
/*eslint template-curly-spacing: ["error", "always"]*/

`hello, ${ people.name}!`;
`hello, ${people.name }!`;

`hello, ${people.name}!`;
```

选项 "always" 的 正确 代码示例：
```js
/*eslint template-curly-spacing: ["error", "always"]*/

`hello, ${ people.name }!`;

`hello, ${
    people.name
}!`;
```

### When Not To Use It
如果你不想收到关于模板字符串中空格的使用情况的通知，可以禁用此规则。

### Version
该规则在 ESLint 2.0.0-rc.0 中被引入。

