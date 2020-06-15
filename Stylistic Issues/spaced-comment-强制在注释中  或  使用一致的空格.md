## 要求或禁止在注释前有空白 (space 或 tab) (spaced-comment)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些风格指南要求或禁止注释 // 或 /* 后的空白。

// 或 /* 后的空白使注释中的文本更容易阅读。另一方面，// 或 /* 后面不加空白的话，给代码添加注释会变得更容易。

### Rule Details
该规则强制注释中 // 或 /* 后空格的一致性。它还为各种文档风格提供了一些例外情况。

### Options
该规则有两个可选项。

第一个是个字符串，值为 "always" 或 "never"。默认是 "always"。
如果是 "always"，// 或 /* 必须跟随至少一个空白。
如果是 "never"，其后不允许有空白。
该规则可以设置第二个选项，是一个对象，其属性的键为 "exceptions" 和 "markers"。
"exceptions" 的值是一个字符串形式的数组，这些字符串也就是该规则的例外。 请注意，如果第一个参数是 "never"，例外情况会被忽略。
  "spaced-comment": ["error", "always", { "exceptions": ["-", "+"] }]
"markers"的值是一个字符串形式的数组，这些字符串也就是块级注释的标记，例如一个额外的 /，被用来表示是由 doxygen、vsdoc 等系统读取的文档，这些系统必须有额外的字符。 不管第一个参数是 "always" 还是 "never"、"markers"数组都会起作用。
  "spaced-comment": ["error", "always", { "markers": ["/"] }]
标记和例外的区别是，标记值只出现在注释的开头，而例外是可以出现在注释中任何地方。

你可以为块级注释和单行注释定义不同的例外和标记。"block" 对象可以有一个 boolean 类型的属性 "balanced"，用来指定内联块注释是否应该有对称的空格。默认为 false。

如果 "balanced": true 而且是 "always" 那么 /* 后必须有只上一个空白，*/之前必须至少有一个空白。
如果 "balanced": true 而且是 "never" 那么 /* 之后或 */ 之前不应该有空白。
如果 "balanced": false 不强制有对称的空白。
```js
"spaced-comment": ["error", "always", {
    "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"]
    },
    "block": {
        "markers": ["!"],
        "exceptions": ["*"],
        "balanced": true
    }
}]
```

```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint spaced-comment: ["error", "always"]*/

//This is a comment with no whitespace at the beginning

/*This is a comment with no whitespace at the beginning */
/* eslint spaced-comment: ["error", "always", { "block": { "balanced": true } }] */
/* This is a comment with whitespace at the beginning but not the end*/
```

选项 "always" 的 正确 代码示例：
```js
/* eslint spaced-comment: ["error", "always"] */

// This is a comment with a whitespace at the beginning

/* This is a comment with a whitespace at the beginning */

/*
 * This is a comment with a whitespace at the beginning
 */

/*
This comment has a newline
*/
/* eslint spaced-comment: ["error", "always"] */

/**
* I am jsdoc
*/
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint spaced-comment: ["error", "never"]*/

// This is a comment with a whitespace at the beginning

/* This is a comment with a whitespace at the beginning */

/* \nThis is a comment with a whitespace at the beginning */
/*eslint spaced-comment: ["error", "never", { "block": { "balanced": true } }]*/
/*This is a comment with whitespace at the end */
```

选项 "never" 的 正确 代码示例：
```js
/*eslint spaced-comment: ["error", "never"]*/

/*This is a comment with no whitespace at the beginning */
/*eslint spaced-comment: ["error", "never"]*/

/**
* I am jsdoc
*/
```

```exceptions```
选项 "always" 结合 "exceptions" 的 错误 代码示例：
```js
/* eslint spaced-comment: ["error", "always", { "block": { "exceptions": ["-"] } }] */

//--------------
// Comment block
//--------------
/* eslint spaced-comment: ["error", "always", { "exceptions": ["-", "+"] }] */

//------++++++++
// Comment block
//------++++++++
/* eslint spaced-comment: ["error", "always", { "exceptions": ["-", "+"] }] */

/*------++++++++*/
/* Comment block */
/*------++++++++*/
/* eslint spaced-comment: ["error", "always", { "line": { "exceptions": ["-+"] } }] */

/*-+-+-+-+-+-+-+*/
// Comment block
/*-+-+-+-+-+-+-+*/
```

选项 "always" 结合 "exceptions" 的 正确 代码示例：
```js
/* eslint spaced-comment: ["error", "always", { "exceptions": ["-"] }] */

//--------------
// Comment block
//--------------
/* eslint spaced-comment: ["error", "always", { "line": { "exceptions": ["-"] } }] */

//--------------
// Comment block
//--------------
/* eslint spaced-comment: ["error", "always", { "exceptions": ["*"] }] */

/****************
 * Comment block
 ****************/
/* eslint spaced-comment: ["error", "always", { "exceptions": ["-+"] }] */

//-+-+-+-+-+-+-+
// Comment block
//-+-+-+-+-+-+-+

/*-+-+-+-+-+-+-+*/
// Comment block
/*-+-+-+-+-+-+-+*/
/* eslint spaced-comment: ["error", "always", { "block": { "exceptions": ["-+"] } }] */

/*-+-+-+-+-+-+-+*/
// Comment block
/*-+-+-+-+-+-+-+*/
```

```markers```
选项 "always" 结合 "markers" 的 错误 代码示例：
```js
/* eslint spaced-comment: ["error", "always", { "markers": ["/"] }] */

///This is a comment with a marker but without whitespace
/*eslint spaced-comment: ["error", "always", { "block": { "markers": ["!"], "balanced": true } }]*/
/*! This is a comment with a marker but without whitespace at the end*/
/*eslint spaced-comment: ["error", "never", { "block": { "markers": ["!"], "balanced": true } }]*/
/*!This is a comment with a marker but with whitespace at the end */
```

选项 "always" 结合 "markers" 的 正确 代码示例：
```js
/* eslint spaced-comment: ["error", "always", { "markers": ["/"] }] */

/// This is a comment with a marker
/*eslint spaced-comment: ["error", "never", { "markers": ["!<"] }]*/

//!<This is a line comment with a marker

/*!<this is a block comment with a marker
subsequent lines are ignored
*/
/* eslint spaced-comment: ["error", "always", { "markers": ["global"] }] */

/*global ABC*/
```

### Version
该规则在 ESLint 0.23.0 中被引入。

