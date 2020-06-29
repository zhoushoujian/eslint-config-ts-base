### 强制或禁止变量声明语句中初始化 (init-declarations)

在 JavaScript 中，变量可在声明时初始化，或者在赋值语句中初始化。例如，在下面的代码中，foo 在声明时被初始化，而 bar 在之后被初始化。
```js
var foo = 1;
var bar;

if (foo) {
    bar = 1;
} else {
    bar = 2;
}
```

### Rule Details
此规则旨在声明的过程中强制或消除变量在声明时进行初始化。例如，在下面的代码，foo 在声明过程中初始化，而 bar 不是。
```js
var foo = 1;
var bar;

bar = 2;
```

这一规则的目的是保持一致的变量初始化和声明。

### Options
该规则有两个选项：

一个字符串，值为 "always"（默认）强制在声明时进行初始化，或 "never" 禁止在声明时进行初始化。该规则适用于var、let 和const 变量，然而，const 变量会忽略 "never"，因为未赋值的常量（const）会生成一个解析错误。
一个对象，进一步控制该规则的行为。目前，唯一可以的参数是 ignoreForLoopInit ，用来表明在设置了 "never" 之后，是否允许在 for 循环中变量声明时进行初始化，这是一个典型的用例。
你可以配置规则如下：

变量必须在声明时初始化（默认）
```js
{
    "init-declarations": ["error", "always"],
}
```
变量不能在声明时初始化
```js
{
    "init-declarations": ["error", "never"]
}
```
除了 for 循环外，变量不能在声明时初始化
```js
{
    "init-declarations": ["error", "never", { "ignoreForLoopInit": true }]
}
```
```always```
默认选项 "always" 的 错误 代码示例：
```js
/*eslint init-declarations: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    let baz;
}
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint init-declarations: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
    var bar = 1;
    let baz = 2;
    const qux = 3;
}
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint init-declarations: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    var bar = 1;
    let baz = 2;

    for (var i = 0; i < 1; i++) {}
}
```

选项 "never" 的 正确 代码示例：
```js
/*eslint init-declarations: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    var bar;
    let baz;
    const buzz = 1;
}
```

选项 "never" 忽略 const 变量的初始化。

```ignoreForLoopInit```
选项 "never", { "ignoreForLoopInit": true } 的 正确 代码示例：
```js
/*eslint init-declarations: ["error", "never", { "ignoreForLoopInit": true }]*/
for (var i = 0; i < 1; i++) {}
```

### When Not To Use It
如果你不关心变量如何初始化，可以关闭此规则。

### Version
该规则在 ESLint 1.0.0-rc-1 中被引入。
