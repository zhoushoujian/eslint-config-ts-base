## 强制函数中的变量在一起声明或分开声明 (one-var)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

变量可以在 JavaScript 的任何地方通过使用 var、let 或 const 进行声明。有很多风格和首选项都与变量声明有关，其中之一就是决定在一个方法中应该允许多少个变量声明。

在这个方面有两个思想流派：

在方法中所有的变量应该只有一个声明。这个声明通常出现在方法顶部。
你应该为每个你想定义的变量进行声明。
例如：
```js
// one variable declaration per function
function foo() {
    var bar, baz;
}

// multiple variable declarations per function
function foo() {
    var bar;
    var baz;
}
```

单一声明的思想流派是基于 ECMAScript 6 之前版本的行为，没有块作用域，只有方法作用域。由于所有的 var 语句都会被提升到函数顶部，有些人认为将所有的变量一一条语句声明在函数顶部，避免了函数范围内的混乱。

### Rule Details
该规则旨在强制在函数 (var) 或块 (let 和 const) 范围使用单一声明还是多条声明。

### Options
该规则有一个选项，可以是字符串或对象。

字符串选项：

"always" (默认) 要求每个作用域有一个变量声明
"never" 要求每个作用域有多个变量声明
"consecutive" 每个作用域允许出现多个变量声明，但对连续的变量声明要求合并为单个声明
对象选项：

"var": "always" 要求每个函数有一个 var 声明
"var": "never" 要求每个函数有多个 var 声明
"var": "consecutive" 要求连续的 var 声明合并为一个
"let": "always" 要求每个块有一个 let 声明
"let": "never" 要求每个块有多个 let 声明
"let": "consecutive" 要求连续的 let 声明合并为一个
"const": "always" 要求每个块有一个 const 声明
"const": "never" 要求每个块有多个 const 声明
"const": "consecutive" 要求连续的 const 声明合并为一个
"separateRequires": true 强制 requires 分开声明
对象选项：

"initialized": "always" 要求每个作用域的初始化的变量有一个变量声明
"initialized": "never" 要求每个作用域的初始化的变量有多个变量声明
"initialized": "consecutive" 对已经初始化的变量，要求其连续的变量声明合并为一个声明
"uninitialized": "always" 要求每个作用域的未初始化的变量有一个变量声明
"uninitialized": "never" 要求每个作用域的未初始化的变量有多个变量声明
"uninitialized": "consecutive" 对未初始化的变量，要求其连续的变量声明合并为一个声明
always
默认选项 "always" 的 错误 代码示例：
```js
/*eslint one-var: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
    let qux;
    let norf;
}

function foo(){
    const bar = false;
    const baz = true;
    let qux;
    let norf;
}

function foo() {
    var bar;

    if (baz) {
        var qux = true;
    }
}
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint one-var: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    let qux,
        norf;
}

function foo(){
    const bar = true,
        baz = false;
    let qux,
        norf;
}

function foo() {
    var bar,
        qux;

    if (baz) {
        qux = true;
    }
}

function foo(){
    let bar;

    if (baz) {
        let qux;
    }
}
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint one-var: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    const bar = true,
        baz = false;
}

function foo() {
    var bar,
        qux;

    if (baz) {
        qux = true;
    }
}

function foo(){
    let bar = true,
        baz = false;
}
```

选项 "never" 的 正确 代码示例：
```js
/*eslint one-var: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
}

function foo() {
    var bar;

    if (baz) {
        var qux = true;
    }
}

function foo() {
    let bar;

    if (baz) {
        let qux = true;
    }
}
```

```consecutive```
选项 "consecutive" 的 错误 代码示例：
```js
/*eslint one-var: ["error", "consecutive"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
}

function foo(){
    var bar = 1;
    var baz = 2;

    qux();

    var qux = 3;
    var quux;
}
```

选项 "consecutive" 的 正确 代码示例：
```js
/*eslint one-var: ["error", "consecutive"]*/
/*eslint-env es6*/


function foo() {
    var bar,
        baz;
}

function foo(){
    var bar = 1,
        baz = 2;

    qux();

    var qux = 3,
        quux;
}
var, let, and const
```

选项 { var: "always", let: "never", const: "never" } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { var: "always", let: "never", const: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar;
    var baz;
    let qux,
        norf;
}

function foo() {
    const bar = 1,
          baz = 2;
    let qux,
        norf;
}
```

选项 { var: "always", let: "never", const: "never" } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { var: "always", let: "never", const: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    let qux;
    let norf;
}

function foo() {
    const bar = 1;
    const baz = 2;
    let qux;
    let norf;
}
```

选项 { var: "never" } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { var: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
}
```

选项 { var: "never" } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { var: "never" }]*/
/*eslint-env es6*/

function foo() {
    var bar,
        baz;
    const bar = 1; // `const` and `let` declarations are ignored if they are not specified
    const baz = 2;
    let qux;
    let norf;
}
```

选项 { separateRequires: true } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { separateRequires: true, var: "always" }]*/
/*eslint-env node*/

var foo = require("foo"),
    bar = "bar";
```

选项 { separateRequires: true } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { separateRequires: true, var: "always" }]*/
/*eslint-env node*/

var foo = require("foo");
var bar = "bar";
var foo = require("foo"),
    bar = require("bar");
```

选项 { var: "never", let: "consecutive", const: "consecutive" } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { var: "never", let: "consecutive", const: "consecutive" }]*/
/*eslint-env es6*/

function foo() {
    let a,
        b;
    let c;

    var d,
        e;
}

function foo() {
    const a = 1,
        b = 2;
    const c = 3;

    var d,
        e;
}
```

选项 { var: "never", let: "consecutive", const: "consecutive" } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { var: "never", let: "consecutive", const: "consecutive" }]*/
/*eslint-env es6*/

function foo() {
    let a,
        b;

    var d;
    var e;

    let f;
}

function foo() {
    const a = 1,
          b = 2;

    var c;
    var d;

    const e = 3;
}
```

选项 { var: "consecutive" } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { var: "consecutive" }]*/
/*eslint-env es6*/

function foo() {
    var a;
    var b;
}
```

选项 { var: "consecutive" } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { var: "consecutive" }]*/
/*eslint-env es6*/

function foo() {
    var a,
        b;
    const c = 1; // `const` and `let` declarations are ignored if they are not specified
    const d = 2;
    let e;
    let f;
}
```

```initialized and uninitialized```
选项 { "initialized": "always", "uninitialized": "never" } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { "initialized": "always", "uninitialized": "never" }]*/
/*eslint-env es6*/

function foo() {
    var a, b, c;
    var foo = true;
    var bar = false;
}
```

选项 { "initialized": "always", "uninitialized": "never" } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { "initialized": "always", "uninitialized": "never" }]*/

function foo() {
    var a;
    var b;
    var c;
    var foo = true,
        bar = false;
}

for (let z of foo) {
    doSomething(z);
}

let z;
for (z of foo) {
    doSomething(z);
}
```

选项 { "initialized": "never" } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { "initialized": "never" }]*/
/*eslint-env es6*/

function foo() {
    var foo = true,
        bar = false;
}
```

选项 { "initialized": "never" } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { "initialized": "never" }]*/

function foo() {
    var foo = true;
    var bar = false;
    var a, b, c; // Uninitialized variables are ignored
}
```

选项 { "initialized": "consecutive", "uninitialized": "never" } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { "initialized": "consecutive", "uninitialized": "never" }]*/

function foo() {
    var a = 1;
    var b = 2;
    var c,
        d;
    var e = 3;
    var f = 4;
}
```

选项 { "initialized": "consecutive", "uninitialized": "never" } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { "initialized": "consecutive", "uninitialized": "never" }]*/

function foo() {
    var a = 1,
        b = 2;
    var c;
    var d;
    var e = 3,
        f = 4;
}
```

选项 { "initialized": "consecutive" } 的 错误 代码示例：
```js
/*eslint one-var: ["error", { "initialized": "consecutive" }]*/

function foo() {
    var a = 1;
    var b = 2;

    foo();

    var c = 3;
    var d = 4;
}
```

选项 { "initialized": "consecutive" } 的 正确 代码示例：
```js
/*eslint one-var: ["error", { "initialized": "consecutive" }]*/

function foo() {
    var a = 1,
        b = 2;

    foo();

    var c = 3,
        d = 4;
}
```

### Version
该规则在 ESLint 0.0.9 被引入。

