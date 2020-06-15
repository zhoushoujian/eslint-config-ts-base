## 禁止出现多个空格 (no-multi-spaces)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在某行中，出现多个空格而且不是用来作缩进的，通常是个错误。例如：

```js
if(foo  === "bar") {}
```

很难说，但是在 foo 和 === 之间有两个空格。支持使用单一空格的，是不赞成使用像这样的多个空格的。

```js
if(foo === "bar") {}
```

### Rule Details
此规则目的在于禁止在逻辑表达式、条件表达式、声明、数组元素、对象属性、序列和函数参数周围使用多个空格。

错误 代码示例：
```js
/*eslint no-multi-spaces: "error"*/

var a =  1;

if(foo   === "bar") {}

a <<  b

var arr = [1,  2];

a ?  b: c
```

正确 代码示例：
```js
/*eslint no-multi-spaces: "error"*/

var a = 1;

if(foo === "bar") {}

a << b

var arr = [1, 2];

a ? b: c
```

### Options
该规则的配置是个对象，包含以下属性：

"ignoreEOLComments": true (默认 false) 忽略行尾注释前的多个空格
"exceptions": { "Property": true } ("Property" 是为一个默认指定的节点) 指定要忽略的节点

```ignoreEOLComments```
默认选项 { "ignoreEOLComments": false } 的 错误 代码示例：
```js
/*eslint no-multi-spaces: ["error", { ignoreEOLComments: false }]*/

var x = 5;      // comment
var x = 5;      /* multiline
 * comment
 */
```

选项 { "ignoreEOLComments": false } 的 正确 代码示例：
```js
/*eslint no-multi-spaces: ["error", { ignoreEOLComments: false }]*/

var x = 5; // comment
var x = 5; /* multiline
 * comment
 */
```

选项 { "ignoreEOLComments": true } 的 正确 代码示例：
```js
/*eslint no-multi-spaces: ["error", { ignoreEOLComments: true }]*/

var x = 5; // comment
var x = 5;      // comment
var x = 5; /* multiline
 * comment
 */
var x = 5;      /* multiline
 * comment
 */
```

```exceptions```
为了避免与其他需要多个空格的规则发生冲突，该规则有一个 exceptions 选项可以忽略特定的节点。

该选项是个对象，属性名是 AST 节点类型，这些类型被定义在 ESTree。确定节点类型的最简单的方法是使用 online demo。

默认情况下，只忽略 Property 节点类型，因为 key-spacing 规则的对其选项要求对象中的属性有多个空格。

默认选项 "exceptions": { "Property": true } 的 正确 代码示例：
```js
/*eslint no-multi-spaces: "error"*/
/*eslint key-spacing: ["error", { align: "value" }]*/

var obj = {
    first:  "first",
    second: "second"
};
```

选项 "exceptions": { "Property": false } 的 错误 代码示例：
```js
/*eslint no-multi-spaces: ["error", { exceptions: { "Property": false } }]*/
/*eslint key-spacing: ["error", { align: "value" }]*/

var obj = {
    first:  "first",
    second: "second"
};
```

选项 "exceptions": { "BinaryExpression": true } 的 正确 代码示例：
```js
/*eslint no-multi-spaces: ["error", { exceptions: { "BinaryExpression": true } }]*/

var a = 1  *  2;
```

选项 "exceptions": { "VariableDeclarator": true } 的 正确 代码示例：
```js
/*eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }]*/

var someVar      = 'foo';
var someOtherVar = 'barBaz';
```

选项 "exceptions": { "ImportDeclaration": true } 的 正确 代码示例：
```js
/*eslint no-multi-spaces: ["error", { exceptions: { "ImportDeclaration": true } }]*/

import mod          from 'mod';
import someOtherMod from 'some-other-mod';
```

### When Not To Use It
如果你不想检查或禁止出现多个空格，你可以关闭此规则。

### Version
该规则在 ESLint 0.9.0 中被引入。

