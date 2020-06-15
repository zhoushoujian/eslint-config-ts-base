## 要求或禁止在模板标记和它们的字面量之间有空格 (template-tag-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

使用 ES6，可以在函数参数中包含模板字面量字符串和表达式的地方使用标记的模板字面量创建函数。

当使用标记的模板字面量，可以在标记的函数和模板字面量之间插入空格。由于这个空格是可选的，下面几行是等价的：
```js
let hello = func`Hello world`;
let hello = func `Hello world`;
```

### Rule Details
该规则旨在维持模板标记函数和它们的模板字面量直接的空格的一致性。

### Options
```js
{
    "template-tag-spacing": ["error", "never"]
}
```

该规则有一个选项，可以设置为 "never" 或 "always"

"never" (默认) - 禁止在一个标记的函数和它的模板字面量之间有空格。
"always" - 要求一个标记的函数和它的模板字面量之间有一个或多个空格。
Examples
```never```
默认选项 "never" 的 错误 代码示例：
```js
/*eslint template-tag-spacing: "error"*/

func `Hello world`;
```

默认选项 "never" 的 正确 代码示例：
```js
/*eslint template-tag-spacing: "error"*/

func`Hello world`;
```

```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint template-tag-spacing: ["error", "always"]*/

func`Hello world`;
```

选项 "always" 的 正确 代码示例：
```js
/*eslint template-tag-spacing: ["error", "always"]*/

func `Hello world`;
```

### When Not To Use It
如果不想被通知在标记函数和它们的模板字面量之间有空格，就禁用此规则。

### Version
该规则在 ESLint 3.15.0 中被引入。
