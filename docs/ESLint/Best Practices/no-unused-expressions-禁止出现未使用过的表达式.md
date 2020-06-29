## 禁止未使用过的表达式 (no-unused-expressions)

对程序状态没有影响的未使用表达式往往是个逻辑错误。

例如，n + 1; 不是语法错误，但它可能是程序员的书写错误，原本是想写赋值语句 n += 1;。有时，生产环境中的一些构建工具可能会消除这些未使用的表达式，这可能会破坏应用程序逻辑。

### Rule Details
此规则旨在消除不使用的表达式，这些表达式对程序的状态没有影响。

此规则不适用于函数调用或带有 new 操作符的构造函数调用，因为它们可能对程序的状态产生“副作用”。
```js
var i = 0;
function increment() { i += 1; }
increment(); // return value is unused, but i changed as a side effect

var nThings = 0;
function Thing() { nThings += 1; }
new Thing(); // constructed object is unused, but nThings changed as a side effect
```

该规则不适用于指令（比如在脚本（模块或函数）顶部的 "use strict";）。

连续的表达式（使用逗号分隔，比如 a = 1, b = 2）总是被认为为被使用过的，除非它们的返回值被赋值给一个变量或被用在条件表达式中或函数调用。

### Options
此规则在默认情况下，不需要任何参数。如果你想要开启一个或者更多的设置你可以通过一个如下所示的选项对象实现：

allowShortCircuit 设置为 true 将允许你在表达式中使用逻辑短路求值。（默认为 false）
allowTernary 设置为 true 将允许你在表达式中使用类似逻辑短路求值的三元运算符。（默认为 false）。
allowTaggedTemplates 设置为 true 将允许你在表达式中使用带标签的模板字面量 (默认: false)。
这些选项只有在所有的代码路径要么直接改变状态（比如，赋值语句）或可以有 副作用（例如，函数调用）才允许出现未使用过的表达式。

默认选项 { "allowShortCircuit": false, "allowTernary": false } 的 错误 代码示例：
```js
/*eslint no-unused-expressions: "error"*/

0

if(0) 0

{0}

f(0), {}

a && b()

a, b()

c = a, b;

a() && function namedFunctionInExpressionContext () {f();}

(function anIncompleteIIFE () {});

injectGlobal`body{ color: red; }`
```

注意，一个或多个字符串表达式（无论有无分号）如果不是在脚本、模块或函数（单独的，不被其它语句打断的）顶部都被认为是未使用过的。否则，它们将被视为对 JavaScript 引擎很有用的指令的一部分。包括严格模式指令：
```js
"use strict";
"use asm"
"use stricter";
"use babel"
"any other strings like this in the prologue";
```

默认选项 { "allowShortCircuit": false, "allowTernary": false } 的 正确 代码示例：
```js
/*eslint no-unused-expressions: "error"*/

{} // In this context, this is a block statement, not an object literal

{myLabel: someVar} // In this context, this is a block statement with a label and expression, not an object literal

function namedFunctionDeclaration () {}

(function aGenuineIIFE () {}());

f()

a = 0

new C

delete a.b

void a
```

```allowShortCircuit```
选项 { "allowShortCircuit": true } 的 错误 代码示例：
```js
/*eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/

a || b
```

选项 { "allowShortCircuit": true } 的 正确 代码示例：

/*eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
```js
a && b()
a() || (b = c)
allowTernary
```

选项 { "allowTernary": true } 的 错误 代码示例：
```js
/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/

a ? b : 0
a ? b : c()
```

选项 { "allowTernary": true } 的 正确 代码示例：
```js
/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/

a ? b() : c()
a ? (b = c) : d()
```

```allowShortCircuit and allowTernary```
选项 { "allowShortCircuit": true, "allowTernary": true } 的 正确 代码示例：
```js
/*eslint no-unused-expressions: ["error", { "allowShortCircuit": true, "allowTernary": true }]*/

a ? b() || (c = d) : e()
```

```allowTaggedTemplates```
选项 { "allowTaggedTemplates": true } 的 错误 代码示例：
```js
/*eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }]*/

`some untagged template string`;
```

选项 { "allowTaggedTemplates": true } 的 正确 代码示例：
```js
/*eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }]*/

tag`some tagged template string`;
```

### Version
该规则在 ESLint 0.1.0 中被引入。

