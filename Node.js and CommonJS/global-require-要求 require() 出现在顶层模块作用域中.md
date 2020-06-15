## 强制在模块顶部调用 require() (global-require)

在 Node.js 中，使用 require() 函数引入依赖的模块，例如：
```js
var fs = require("fs");
```

虽然 require() 可以在代码的任何地方被调用，一些风格指南规定，它只能在模块顶层被调用，这样更容易识别依赖关系。例如，当它们在深层次嵌套在函数和其它语句时，就很难识别依赖：
```js
function foo() {

    if (condition) {
        var fs = require("fs");
    }
}
```
因为 require() 是同步加载的，在其它地方使用时，会导致性能问题。

此外，ES6 模块要求 import 和 export 语句只能放在模块顶部。

### Rule Details
此规则要求所有调用 require() 必须在模块顶部，与 ES6 中 import 和 export 语句（只能放在顶部）相同。

错误 代码示例：
```js
/*eslint global-require: "error"*/
/*eslint-env es6*/

// calling require() inside of a function is not allowed
function readFile(filename, callback) {
    var fs = require('fs');
    fs.readFile(filename, callback)
}

// conditional requires like this are also not allowed
if (DEBUG) { require('debug'); }

// a require() in a switch statement is also flagged
switch(x) { case '1': require('1'); break; }

// you may not require() inside an arrow function body
var getModule = (name) => require(name);

// you may not require() inside of a function body as well
function getModule(name) { return require(name); }

// you may not require() inside of a try/catch block
try {
    require(unsafeModule);
} catch(e) {
    console.log(e);
}
```

正确 代码示例：
```js
/*eslint global-require: "error"*/

// all these variations of require() are ok
require('x');
var y = require('y');
var z;
z = require('z').initialize();

// requiring a module and using it in a function is ok
var fs = require('fs');
function readFile(filename, callback) {
    fs.readFile(filename, callback)
}

// you can use a ternary to determine which module to require
var logger = DEBUG ? require('dev-logger') : require('logger');

// if you want you can require() at the end of your module
function doSomethingA() {}
function doSomethingB() {}
var x = require("x"),
    z = require("z");
```

### When Not To Use It
如果一个模块必须使用来至于系统文件的信息初始化或者一个模块仅仅在非常稀少的情况下使用，将导致重大开销去加载模块，禁用此规则将是有意义的。如果你需要在 try/catch 内部使用 require() 一个可选依赖，你可以使用 // eslint-disable-line global-require 注释只对此依赖禁用此规则。

### Version
该规则在 ESLint 1.4.0 中被引入。
