### 要求将变量声明放在它们作用域的顶部 (vars-on-top)

该规则会生成警告，当变量的声明不是在函数作用域顶部或者项目顶部被连续使用时。默认的，JavaScript 的解析器会隐式的将变量的声明移到它们所在作用域的顶部。这个规则迫使程序员通过手动移动变量声明到其作用域的顶部来实现这个行为。

### Rule Details
此规则目的在于保持所有的变量声明在一系列的语句中处于前导地位。允许多行声明有助于提高可维护性因此是被允许的。

错误 代码示例：
```js
/*eslint vars-on-top: "error"*/

// Variable declarations in a block:
function doSomething() {
    var first;
    if (true) {
        first = true;
    }
    var second;
}

// Variable declaration in for initializer:
function doSomething() {
    for (var i=0; i<10; i++) {}
}
/*eslint vars-on-top: "error"*/

// Variables after other statements:
f();
var a;
```

正确 代码示例：
```js
/*eslint vars-on-top: "error"*/

function doSomething() {
    var first;
    var second; //multiple declarations are allowed at the top
    if (true) {
        first = true;
    }
}

function doSomething() {
    var i;
    for (i=0; i<10; i++) {}
}
/*eslint vars-on-top: "error"*/

var a;
f();
/*eslint vars-on-top: "error"*/

// Directives may precede variable declarations.
"use strict";
var a;
f();

// Comments can describe variables.
function doSomething() {
    // this is the first var.
    var first;
    // this is the second var.
    var second
}
```

### Version
该规则在 ESLint 0.8.0 中被引入。
