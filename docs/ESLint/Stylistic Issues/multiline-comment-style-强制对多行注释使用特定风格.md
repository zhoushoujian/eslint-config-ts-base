## 强制对多行注释使用特定风格 (multiline-comment-style)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

很多风格指南对多行注释要求使用特定的风格。例如，一些风格指南喜欢对多行注释使用单个块注释，而其他的风格指南喜欢连续的行注释。

### Rule Details
该规则旨在对多行注释强制使用一中特定的风格。

### Options
该规则有一个字符串选项，可以是以下值：

"starred-block" (默认): 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 *。
"bare-block": 禁止使用连续的行注释来表示块注释，并且禁止块注释每行前有一个"*"。
"separate-lines": 禁用块注释，使用连续的行注释。
该规则总是忽略像 /* eslint-disable */ 这样的指令注释。另外，除非是 "starred-block"，该规则忽略 JSDoc 注释。

默认选项 "starred-block" 的 错误 代码示例：
```js
/* eslint multiline-comment-style: ["error", "starred-block"] */

// this line
// calls foo()
foo();

/* this line
calls foo() */
foo();

/* this comment
 * is missing a newline after /*
 */

/*
 * this comment
 * is missing a newline at the end */

/*
* the star in this line should have a space before it
 */

/*
 * the star on the following line should have a space before it
*/
```

默认选项 "starred-block" 的 正确 代码示例：
```js
/* eslint multiline-comment-style: ["error", "starred-block"] */

/*
 * this line
 * calls foo()
 */
foo();

// single-line comment
```

选项 "bare-block" 的 错误 代码示例：
```js
/* eslint multiline-comment-style: ["error", "bare-block"] */

// this line
// calls foo()
foo();

/*
 * this line
 * calls foo()
 */
foo();
```

选项 "bare-block" 的 正确 代码示例：
```js
/* eslint multiline-comment-style: ["error", "bare-block"] */

/* this line
   calls foo() */
foo();
```

选项 "separate-lines" 的 错误 代码示例：

```js
/* eslint multiline-comment-style: ["error", "separate-lines"] */

/* This line
calls foo() */
foo();

/*
 * This line
 * calls foo()
 */
foo();
```

选项 "separate-lines" 的 正确 代码示例：
```js
/* eslint multiline-comment-style: ["error", "separate-lines"] */

// This line
// calls foo()
foo();
```

### When Not To Use It
如果你不想对多行注释强制使用一种特定的风格，你可以禁用此规则。

### Version
该规则在 ESLint 4.10.0 中被引入。

