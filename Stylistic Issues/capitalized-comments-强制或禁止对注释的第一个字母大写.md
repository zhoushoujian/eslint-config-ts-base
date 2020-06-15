## 强制或禁止对注释的第一个字母大写 (capitalized-comments)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

注释可以为将来的开发人员留下信息，这很有用。为了使这些信息有用而不是分散注意力，有时候，注释需要遵循某种特定的风格。有一种注释格式化风格是注释的第一个字是否应该大写或小写。

一般来说，没有任何注释风格比其他注释风格更有效，但是许多开发人员都认为一致的风格可以提高项目的可维护性。

### Rule Details
该规则的目的是在你的代码库中强制使用一种一致的注释风格，特别是在注释中要求或禁止第一个字母为大写字母。当使用非大小写的字母时，该规则将不会发出警告。

默认情况下，该规则要求在注释的开始位置有一个非小写的字母。

错误 代码示例：
```js
/* eslint capitalized-comments: ["error"] */

// lowercase comment
```

正确 代码示例：

```js
// Capitalized comment

// 1. Non-letter at beginning of comment

// 丈 Non-Latin character at beginning of comment

/* eslint semi:off */
/* eslint-env node */
/* eslint-disable */
/* eslint-enable */
/* istanbul ignore next */
/* jscs:enable */
/* jshint asi:true */
/* global foo */
/* globals foo */
/* exported myVar */
// eslint-disable-line
// eslint-disable-next-line
// https://github.com
```

### Options
该规则有两个选项：一个值为 "always" 或 "never" 的字符串，来决定是否要求或禁止一个注释的第一个字母，以及一个可包含更多配置参数的对象选项。

以下是对象选项：

ignorePattern: 应该被该规则忽略的单词的正则表达式。如果注释的第一个字母与模式匹配，该规则将不会报告该注释。
注意，以下单词总是被该规则忽略：["jscs", "jshint", "eslint", "istanbul", "global", "globals", "exported"]。
ignoreInlineComments: 如果为 true， 该规则将不会报告行内注释。默认为 false。
ignoreConsecutiveComments: 如果为 true，该规则将不会报告违反此规则的注释，只要该注释紧随另一注释。。默认为 false。
以下是一个示例配置：
```js
{
    "capitalized-comments": [
        "error",
        "always",
        {
            "ignorePattern": "pragma|ignored",
            "ignoreInlineComments": true
        }
    ]
}
```

```"always"```
"always" 选项意味着该规则将报告任何以小写字母开始的注释。这是该规则的默认配置。

注意，该规则不会报告 eslint 的配置注释 和 以 URL 开始的注释。

错误 代码示例：
```js
/* eslint capitalized-comments: ["error", "always"] */

// lowercase comment
```

正确 代码示例：
```js
/* eslint capitalized-comments: ["error", "always"] */

// Capitalized comment

// 1. Non-letter at beginning of comment

// 丈 Non-Latin character at beginning of comment

/* eslint semi:off */
/* eslint-env node */
/* eslint-disable */
/* eslint-enable */
/* istanbul ignore next */
/* jscs:enable */
/* jshint asi:true */
/* global foo */
/* globals foo */
/* exported myVar */
// eslint-disable-line
// eslint-disable-next-line
// https://github.com
```

```never```
"never" 选项意味着该规则将报告任何以大写字母开始的注释。

选项 "never" 的 错误 代码示例：
```js
/* eslint capitalized-comments: ["error", "never"] */

// Capitalized comment
```

选项 "never" 的 正确 代码示例：
```js
/* eslint capitalized-comments: ["error", "never"] */

// lowercase comment

// 1. Non-letter at beginning of comment

// 丈 Non-Latin character at beginning of comment
```

```ignorePattern```
ignorePattern 值为字符串，该字符串作为一个正则表达式应用到注释的第一个字母。

选项 { "ignorePattern": "pragma" } 的 正确 代码示例：
```js
/* eslint capitalized-comments: ["error", "always", { "ignorePattern": "pragma" }] */

function foo() {
    /* pragma wrap(true) */
}
```

```ignoreInlineComments```
设置选项 ignoreInlineComments 为 true 意味着该规则不会报告代码中的注释（在同一行中，一个标记作为注释的开始，另一个标记作为注释的结尾）。

选项 { "ignoreInlineComments": true } 的 正确 代码示例：
```js
/* eslint capitalized-comments: ["error", "always", { "ignoreInlineComments": true }] */

function foo(/* ignored */ a) {
}
```

```ignoreConsecutiveComments```
设置选项 ignoreInlineComments 为 true，违反此规则的注释将不会被报告，只要该注释紧随另一个注释。可以被应用多次。

选项 { "ignoreConsecutiveComments": true } 的 正确 代码示例：
```js
/* eslint capitalized-comments: ["error", "always", { "ignoreConsecutiveComments": true }] */

// This comment is valid since it has the correct capitalization.
// this comment is ignored since it follows another comment,
// and this one as well because it follows yet another comment.

/* Here is a block comment which has the correct capitalization, */
/* but this one is ignored due to being consecutive; */
/*
 * in fact, even if any of these are multi-line, that is fine too.
 */
```

选项 { "ignoreConsecutiveComments": true } 的 错误 代码示例：
```js
/* eslint capitalized-comments: ["error", "always", { "ignoreConsecutiveComments": true }] */

// this comment is invalid, but only on this line.
// this comment does NOT get reported, since it is a consecutive comment.
```

Using Different Options for Line and Block Comments
如果你想对行注释和块注释进行不同的配置，你可以用两个不同的配置对象（注意，对行注释和块注释，将强制使用一致的大写选项）：
```js
{
    "capitalized-comments": [
        "error",
        "always",
        {
            "line": {
                "ignorePattern": "pragma|ignored",
            },
            "block": {
                "ignoreInlineComments": true,
                "ignorePattern": "ignored"
            }
        }
    ]
}
```

不同的行和块注释配置的 错误 代码示例：
```js
/* eslint capitalized-comments: ["error", "always", { "block": { "ignorePattern": "blockignore" } }] */

// capitalized line comment, this is incorrect, blockignore does not help here
/* lowercased block comment, this is incorrect too */
```

不同的行和块注释配置的 正确 代码示例：
```js
/* eslint capitalized-comments: ["error", "always", { "block": { "ignorePattern": "blockignore" } }] */

// Uppercase line comment, this is correct
/* blockignore lowercase block comment, this is correct due to ignorePattern */
```

### When Not To Use It
如果你不关心代码库中注释的语法风格，你可以禁用此规则。

### Version
该规则在 ESLint 3.11.0 中被引入。
