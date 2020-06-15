## 禁止循环中存在函数 (no-loop-func)

由于函数在循环中创建闭包的方式不同，在循环中编写函数往往会导致错误。例如:
```js
for (var i = 0; i < 10; i++) {
    funcs[i] = function() {
        return i;
    };
}
```

在这个例子中，你希望在循环中创建的每个函数返回一个不同的数字。实际上，每个函数都返回作用域中 i 的最后一个值 10。

let 或 const 规避了这个问题。
```js
/*eslint-env es6*/

for (let i = 0; i < 10; i++) {
    funcs[i] = function() {
        return i;
    };
}
```
在本例中，循环中创建的每个函数都返回一个与预期不同的数字。

### Rule Details
这个错误的出现会导致代码可能无法像你期望的那样运行，还可能表示对该语言的工作方式存在误解。 如果不修复此错误，代码可能会正常运行，但在某些情况下，可能会出现意想不到的行为。

此规则禁止在循环中包含不安全引用的任何函数(例如，在外部作用域中修改变量)。

错误 代码示例：
```js
/*eslint no-loop-func: "error"*/
/*eslint-env es6*/

for (var i=10; i; i--) {
    (function() { return i; })();
}

while(i) {
    var a = function() { return i; };
    a();
}

do {
    function a() { return i; };
    a();
} while (i);

let foo = 0;
for (let i = 0; i < 10; ++i) {
    //Bad, `foo` is not in the loop-block's scope and `foo` is modified in/after the loop
    setTimeout(() => console.log(foo));
    foo += 1;
}

for (let i = 0; i < 10; ++i) {
    //Bad, `foo` is not in the loop-block's scope and `foo` is modified in/after the loop
    setTimeout(() => console.log(foo));
}
foo = 100;
```

正确 代码示例：
```js
/*eslint no-loop-func: "error"*/
/*eslint-env es6*/

var a = function() {};

for (var i=10; i; i--) {
    a();
}

for (var i=10; i; i--) {
    var a = function() {}; // OK, no references to variables in the outer scopes.
    a();
}

for (let i=10; i; i--) {
    var a = function() { return i; }; // OK, all references are referring to block scoped variables in the loop.
    a();
}

var foo = 100;
for (let i=10; i; i--) {
    var a = function() { return foo; }; // OK, all references are referring to never modified variables.
    a();
}
//... no modifications of foo after this loop ...
```

### Version
该规则在 ESLint 0.0.9 中被引入。

