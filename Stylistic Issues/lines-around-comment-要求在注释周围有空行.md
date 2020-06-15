## 强制注释周围有空行 (lines-around-comment)
命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

很多风格指南要求在注释前后要有空行。该规则的主要目标是使这些注释更易阅读，提高代码的可读性。

### Rule Details
该规则允许你指定在注释之前或之后是否应该有空行。它可以区分块级注释 (/*) 和单行注释(//)。该规则不适用于注释和代码出现在同一行的情况，也不要求在文件开头和末尾有空行。空行

### Options
该规则有一个对象选项：

"beforeBlockComment": true (默认) 要求在块级注释之前有一空行
"beforeBlockComment": false 禁止在块级注释之前有一空行
"afterBlockComment": true 要求在块级注释之后有一空行
"beforeLineComment": true 要求在行级注释之前有一空行
"afterLineComment": true 要求在行级注释之后有一空行
"allowBlockStart": true 允许注释出现在块语句的开始位置
"allowBlockEnd": true 允许注释出现在块语句的结束位置
"allowObjectStart": true 允许注释出现在对象字面量的开始位置
"allowObjectEnd": true 允许注释出现在对象字面量的结束位置
"allowArrayStart": true 允许注释出现在数组字面量的开始位置
"allowArrayEnd": true 允许注释出现在数组字面量的结束位置
"allowClassStart": true 允许注释出现在类的开始位置
"allowClassEnd": true 允许注释出现在类的结束位置
"applyDefaultIgnorePatterns" 启用或禁用该规则忽略的默认注释模式
"ignorePattern" 被该规则忽略的自定义模式
```beforeBlockComment```
默认选项 { "beforeBlockComment": true } 的 错误 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true }]*/

var night = "long";
/* what a great and wonderful day */
var day = "great"
```

默认选项 { "beforeBlockComment": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true }]*/

var night = "long";

/* what a great and wonderful day */
var day = "great"
```

```afterBlockComment```
选项 { "afterBlockComment": true } 的 错误 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true }]*/

var night = "long";

/* what a great and wonderful day */
var day = "great"
```

选项 { "afterBlockComment": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true }]*/

var night = "long";

/* what a great and wonderful day */

var day = "great"
```

```beforeLineComment```
选项 { "beforeLineComment": true } 的 错误 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true }]*/

var night = "long";
// what a great and wonderful day
var day = "great"
```

选项 { "beforeLineComment": true } 的 正确 代码示例：

/*eslint lines-around-comment: ["error", { "beforeLineComment": true }]*/
```js
var night = "long";

// what a great and wonderful day
```

var day = "great"
afterLineComment
选项 { "afterLineComment": true } 的 错误 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true }]*/

var night = "long";
// what a great and wonderful day
var day = "great"
```

选项 { "afterLineComment": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true }]*/

var night = "long";
// what a great and wonderful day

var day = "great"
```

```allowBlockStart```
选项 { "beforeLineComment": true, "allowBlockStart": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowBlockStart": true }]*/

function foo(){
    // what a great and wonderful day
    var day = "great"
    return day;
}
```

选项 { "beforeBlockComment": true, "allowBlockStart": true } 的 正确代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowBlockStart": true }]*/

function foo(){
    /* what a great and wonderful day */
    var day = "great"
    return day;
}
```

```allowBlockEnd```
选项 { "afterLineComment": true, "allowBlockEnd": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true, "allowBlockEnd": true }]*/

function foo(){
    var day = "great"
    return day;
    // what a great and wonderful day
}
```

选项 { "afterBlockComment": true, "allowBlockEnd": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true, "allowBlockEnd": true }]*/

function foo(){
    var day = "great"
    return day;

    /* what a great and wonderful day */
}
```

```allowClassStart```
选项 { "beforeLineComment": true, "allowClassStart": false } 的 错误 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowClassStart": false }]*/

class foo {
    // what a great and wonderful day
    day() {}
};
```

选项 { "beforeLineComment": true, "allowClassStart": false } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowClassStart": false }]*/

class foo {

    // what a great and wonderful day
    day() {}
};
```

选项 { "beforeLineComment": true, "allowClassStart": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowClassStart": true }]*/

class foo {
    // what a great and wonderful day
    day() {}
};
```

选项 { "beforeBlockComment": true, "allowClassStart": false } 的 错误 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowClassStart": false }]*/

class foo {
    /* what a great and wonderful day */
    day() {}
};
```

选项 { "beforeBlockComment": true, "allowClassStart": false } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowClassStart": false }]*/

class foo {

    /* what a great and wonderful day */
    day() {}
};
```

选项 { "beforeBlockComment": true, "allowClassStart": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowClassStart": true }]*/

class foo {
    /* what a great and wonderful day */
    day() {}
};
```

```allowClassEnd```
选项 { "afterLineComment": true, "allowClassEnd": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true, "allowClassEnd": true }]*/

class foo {
    day() {}
    // what a great and wonderful day
};
```

选项 { "afterBlockComment": true, "allowClassEnd": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true, "allowClassEnd": true }]*/

class foo {
    day() {}

    /* what a great and wonderful day */
};
```

```allowObjectStart```
选项 { "beforeLineComment": true, "allowObjectStart": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowObjectStart": true }]*/

var foo = {
    // what a great and wonderful day
    day: "great"
};

const {
    // what a great and wonderful day
    foo: someDay
} = {foo: "great"};

const {
    // what a great and wonderful day
    day
} = {day: "great"};
```

选项 { "beforeBlockComment": true, "allowObjectStart": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowObjectStart": true }]*/

var foo = {
    /* what a great and wonderful day */
    day: "great"
};

const {
    /* what a great and wonderful day */
    foo: someDay
} = {foo: "great"};

const {
    /* what a great and wonderful day */
    day
} = {day: "great"};
```

```allowObjectEnd```
选项 { "afterLineComment": true, "allowObjectEnd": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true, "allowObjectEnd": true }]*/

var foo = {
    day: "great"
    // what a great and wonderful day
};

const {
    foo: someDay
    // what a great and wonderful day
} = {foo: "great"};

const {
    day
    // what a great and wonderful day
} = {day: "great"};
```

选项 { "afterBlockComment": true, "allowObjectEnd": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true, "allowObjectEnd": true }]*/

var foo = {
    day: "great"

    /* what a great and wonderful day */
};

const {
    foo: someDay

    /* what a great and wonderful day */
} = {foo: "great"};

const {
    day

    /* what a great and wonderful day */
} = {day: "great"};
```

```allowArrayStart```
选项 { "beforeLineComment": true, "allowArrayStart": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeLineComment": true, "allowArrayStart": true }]*/

var day = [
    // what a great and wonderful day
    "great",
    "wonderful"
];

const [
    // what a great and wonderful day
    someDay
] = ["great", "not great"];
```

选项 { "beforeBlockComment": true, "allowArrayStart": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "beforeBlockComment": true, "allowArrayStart": true }]*/

var day = [
    /* what a great and wonderful day */
    "great",
    "wonderful"
];

const [
    /* what a great and wonderful day */
    someDay
] = ["great", "not great"];
```

```allowArrayEnd```
选项 { "afterLineComment": true, "allowArrayEnd": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterLineComment": true, "allowArrayEnd": true }]*/

var day = [
    "great",
    "wonderful"
    // what a great and wonderful day
];

const [
    someDay
    // what a great and wonderful day
] = ["great", "not great"];
```

选项 { "afterBlockComment": true, "allowArrayEnd": true } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "afterBlockComment": true, "allowArrayEnd": true }]*/

var day = [
    "great",
    "wonderful"

    /* what a great and wonderful day */
];

const [
    someDay

    /* what a great and wonderful day */
] = ["great", "not great"];
```

```ignorePattern```
默认情况下，该规则忽略以 eslint、jshint、jslint、istanbul、global、exported、jscs 开头的注释。可以提供另一种正则表达式。

选项 ignorePattern 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error"]*/

foo();
/* eslint mentioned in this comment */,
bar();


/*eslint lines-around-comment: ["error", { "ignorePattern": "pragma" }] */

foo();
/* a valid comment using pragma in it */
```

选项 ignorePattern 的 错误 代码示例：
```js
/*eslint lines-around-comment: ["error", { "ignorePattern": "pragma" }] */

1 + 1;
/* something else */
```

```applyDefaultIgnorePatterns```
即使提供了 ignorePattern，也应用默认的忽略模式。如果你想省略默认模式，请将此选项设置为 false。

选项 { "applyDefaultIgnorePatterns": false } 的 正确 代码示例：
```js
/*eslint lines-around-comment: ["error", { "ignorePattern": "pragma", applyDefaultIgnorePatterns: false }] */

foo();
/* a valid comment using pragma in it */
```

选项 { "applyDefaultIgnorePatterns": false } 的 错误 代码示例：
```js
/*eslint lines-around-comment: ["error", { "applyDefaultIgnorePatterns": false }] */

foo();
/* eslint mentioned in comment */
```

### When Not To Use It
很多人喜欢简洁的代码风格，不介意代码中注释的风格。如果你也是这样的，此规则不适合你。

### Version
该规则在 ESLint 0.22.0 中被引入。
