## 要求或禁止在语句间填充空行 (padding-line-between-statements)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

该规则要求或禁止在给定的两种语句间填充空行。正确的空行可以帮助开发人员理解代码。

例如，以下配置要求在变量声明和 return 语句之间有一行空行。
```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "var", next: "return" }
]*/

function foo() {
    var a = 1;

    return a;
}
```

### Rule Details
如果没有提供配置，则此规则不执行任何操作。

配置是具有三个属性的对象：：blankLine、prev 和 next。例如，{ blankLine: "always", prev: "var", next: "return" } 表示 “要求在变量声明和 return 语句之间有一行或多行空行空白”。你可以提供任意数量的配置。如果语句对匹配多个配置，则将使用最后匹配的配置。
```js
{
    "padding-line-between-statements": [
        "error",
        { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        ...
    ]
}
```

LINEBREAK_TYPE 是以下一种：
"any" 忽略成对语句。
"never" 禁止出现空行。
"always" 要求一行或多行空行。注意它不计算注释中存在的空行。
STATEMENT_TYPE 是以下一个或多个：
"*" 通配符。匹配任何语句。
"block" 是单个块。
"block-like" 像块的语句。匹配语句的最后一个 token 是闭括号的块；如 { }、if (a) { } 和 while (a) { }。也匹配立即调用的函数表达式语句。
"break" 是 break 语句。
"case" 是 case 标签。
"cjs-export" 是 CommonJS 的 export 语句；如 module.exports = 0、module.exports.foo = 1 和 exports.foo = 2。这是一种特殊的赋值。
"cjs-import" 是 CommonJS 的 import 语句; 如 const foo = require("foo")。这是一种特殊的变量声明。
"class" 是 class 声明。
"const" 是 const 变量声明，包括单行和多行。
"continue" 是 continue 语句。
"debugger" 是 debugger 语句。
"default" 是 default 标签。
"directive" 是指令序言。它匹配指令，如 "use strict"。
"do" 是 do-while 语句。它匹配所有以 do 关键字开始的语句。
"empty" 是空语句。
"export" 是 export 声明。
"expression" 是表达式语句。
"for" 是 for 循环. 它匹配所有以 for 关键字开始的语句。
"function" 是函数声明。
"if" 是 if 语句。
"iife" 是立即调用的函数表达式语句。这将匹配对函数表达式的调用，函数表达式可选前缀为一元运算符。
"import" 是 import 语句。
"let" 是 let 变量声明，包括单行和多行。
"multiline-block-like" 是像块的语句。它和 block-like 类型相同，但只应用于多行块。
"multiline-const" 是多行 const 变量声明。
"multiline-expression" 是表达式语句。同 expression 类型一下，但只应用于多行语句。
"multiline-let" 是多行 let 变量声明。
"multiline-var" 是多行 var 变量声明。
"return" 是 return 语句。
"singleline-const" 是单行 const 变量声明。
"singleline-let" 是单行 let 变量声明。
"singleline-var" 是单行 var 变量声明。
"switch" 是 switch 语句。
"throw" 是 throw 语句。
"try" 是 try 语句。
"var" 是 var 变量声明，包括单行和多行。
"while" 是 while 循环。
"with" 是 with 语句。
Examples
该配置会要求所有的 return 语句前都有空行，就像 newline-before-return规则一样。

配置 [{ blankLine: "always", prev: "*", next: "return" }] 的 错误 代码示例：
```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "*", next: "return" }
]*/

function foo() {
    bar();
    return;
}
```

配置 [{ blankLine: "always", prev: "*", next: "return" }] 的 正确 代码示例：
```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "*", next: "return" }
]*/

function foo() {
    bar();

    return;
}

function foo() {
    return;
}
```

该配置要求每一个变量声明之后都有空行，就像 newline-after-var 规则。

配置 [{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}] 的 错误 代码示例：
```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
    { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}
]*/

function foo() {
    var a = 0;
    bar();
}

function foo() {
    let a = 0;
    bar();
}

function foo() {
    const a = 0;
    bar();
}
```

配置 [{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}] 的 正确 代码示例：
```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
    { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}
]*/

function foo() {
    var a = 0;
    var b = 0;

    bar();
}

function foo() {
    let a = 0;
    const b = 0;

    bar();
}

function foo() {
    const a = 0;
    const b = 0;

    bar();
}
```

该配置要所有的指令序言之后都有空行，就像 lines-around-directive 规则。

配置 [{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }] 的 错误 代码示例：
```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "directive", next: "*" },
    { blankLine: "any",    prev: "directive", next: "directive" }
]*/

"use strict";
foo();
```

配置 [{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }] 的 正确 代码示例：
```js
/*eslint padding-line-between-statements: [
    "error",
    { blankLine: "always", prev: "directive", next: "*" },
    { blankLine: "any",    prev: "directive", next: "directive" }
]*/

"use strict";
"use asm";

foo();
```

### When Not To Use It
如果你不想受到关于换行的通知，可以禁用此规则。

### Version
该规则在 ESLint 4.0.0-beta.0 中被引入。

