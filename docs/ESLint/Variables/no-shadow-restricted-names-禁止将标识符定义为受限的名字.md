## 禁止变量声明覆盖外层作用域的变量 (no-shadow)

覆盖是指在同一作用域里局部变量和全局变量同名，比如：
```js
var a = 3;
function b() {
    var a = 10;
}
```

在这种情况中，b() 作用域中的 a 覆盖了全局环境中的 a。这会混淆读者并且在 b中不能获取全局变量。

### Rule Details
此规则旨在消除变量声明覆盖。

错误 代码示例：
```js
/*eslint no-shadow: "error"*/
/*eslint-env es6*/

var a = 3;
function b() {
    var a = 10;
}

var b = function () {
    var a = 10;
}

function b(a) {
    a = 10;
}
b(a);

if (true) {
    let a = 5;
}
```

### Options
对象配置项，包含属性 "builtinGlobals"、"hoist" 和 "allow".
```js
{
    "no-shadow": ["error", { "builtinGlobals": false, "hoist": "functions", "allow": [] }]
}
```

```builtinGlobals```
默认值是 false，如果 builtinGlobals 是 true，会检测内置对象如 Object，Array、Number 等等。

选项 {"builtinGlobals": true} 的 错误 代码示例：
```js
/*eslint no-shadow: ["error", { "builtinGlobals": true }]*/

function foo() {
    var Object = 0;
}
```

hoist
此配置项有三个值：

functions (默认值)-在被覆盖前呈报函数覆盖错误。
all-在被覆盖之前呈报函数和变量的覆盖错误。
never-不呈报覆盖错误。

```hoist: functions```
默认选项 { "hoist": "functions" } 的 错误 代码示例：
```js
/*eslint no-shadow: ["error", { "hoist": "functions" }]*/
/*eslint-env es6*/

if (true) {
    let b = 6;
}

function b() {}
```

虽然 if 语句中的 let b 在 function声明之前，该示例是正确的。

默认选项 { "hoist": "functions" } 的 正确 代码示例：
```js
/*eslint no-shadow: ["error", { "hoist": "functions" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
}

let a = 5;
```

因为在 if 语句中 let a 在外层作用域声明语句之前，所以是正确的。

```hoist: all```
选项 { "hoist": "all" } 的 错误 代码示例：
```js
/*eslint no-shadow: ["error", { "hoist": "all" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
    let b = 6;
}

let a = 5;
function b() {}
```

```hoist: never```
选项 { "hoist": "never" } 的 正确 代码示例：
```js
/*eslint no-shadow: ["error", { "hoist": "never" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
    let b = 6;
}

let a = 5;
function b() {}
```

因为在 if 语句中 let a 和 let b 在外层作用域声明语句之前，所以是正确的。

```allow```
allow 选项是个标识符名称的数组，以允许他们被重写。例如："resolve"， "reject"， "done"， "cb"。

选项 { "allow": ["done"] } 的 正确 代码示例：
```js
/*eslint no-shadow: ["error", { "allow": ["done"] }]*/
/*eslint-env es6*/

import async from 'async';

function foo(done) {
  async.map([1, 2], function (e, done) {
    done(null, e * 2)
  }, done);
}

foo(function (err, result) {
  console.log({ err, result });
});
```

### Version
该规则在 ESLint 0.0.9 中被引入。

