## 强制使用一致的缩进 (indent)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些常见的准则要求嵌套的块和语句使用特定的缩进，比如：
```js
function hello(indentSize, type) {
    if (indentSize === 4 && type !== 'tab') {
        console.log('Each next indentation will increase on 4 spaces');
    }
}
```
这是最常见的情况，也是不同的风格指南中都推荐的：

两个空格，不要 tab： Google、npm、Node.js、Idiomatic、Felix
tab：jQuery
四个空格：Crockford

### Rule Details
该规则旨在强制使用一致的缩进风格。默认是 4个空格。

### Options
该规则有一个混合选项：

例如，2 个空格缩进：
```js
{
    "indent": ["error", 2]
}
```
或 tab 缩进：
```js
{
    "indent": ["error", "tab"]
}
```
默认选项的 错误 代码示例：
```js
/*eslint indent: "error"*/

if (a) {
  b=c;
  function foo(d) {
    e=f;
  }
}
```

默认选项的 正确 代码示例：
```js
/*eslint indent: "error"*/

if (a) {
    b=c;
    function foo(d) {
        e=f;
    }
}
```

该规则有一个对象选项：

"SwitchCase" (默认：0) 强制 switch 语句中的 case 子句的缩进级别
"VariableDeclarator" (默认：1) 强制 var 声明的缩进级别；也可以使用一个对象为 var、let 和 const 声明分别定义。也可以是 "first"，表示所有声明符应与第一个声明符对齐。
"outerIIFEBody" (默认: 1) 强制文件级别的 IIFE 的缩进
"MemberExpression" (默认: 1) 强制多行属性链的缩进 (除了在变量声明和赋值语句中)也可以设置为 "off" 以禁止检查成员表达式的缩进。
"FunctionDeclaration" 使用一个对象定义函数声明的缩进规则。
parameters (默认: 1) 强制函数声明中参数的缩进。可以是一个数字来表示缩进级别，或字符串 "first" 表示声明中的所有参数必须与第一个参数对齐。也可以设置为 "off" 以禁止检查函数声明的参数的缩进。
body (默认: 1) 强制函数声明的函数体的缩进级别。
"FunctionExpression" 使用一个对象定义函数表达式的缩进规则。
parameters (默认: 1) 强制函数表达式中参数的缩进。可以是一个数字来表示缩进级别，或字符串 "first" 表示表达式中的所有参数必须与第一个参数对齐。也可以设置为 "off" 以禁止检查函数表达式的参数的缩进。
body (默认: 1) 强制函数表达式的函数体的缩进级别。
"CallExpression" 使用一个对象定义函数调用表达式的缩进规则。
arguments (默认: 1) 强制函数调用表达式中参数的缩进。可以是一个数字来表示缩进级别，或字符串 "first" 表示表达式中的所有参数必须先与第一个参数对齐。也可以设置为 "off" 以禁止检查函数调用的参数的缩进。
"ArrayExpression" (默认: 1) 强制数组中的元素的缩进。可以是一个数字来表示缩进级别，或字符串 "first" 表示数组中的所有元素必须与第一个元素对齐。也可以设置为 "off" 以禁止检查数组元素的缩进。
"ObjectExpression" (默认: 1) 强制对象中的属性的缩进。可以是一个数字来表示缩进级别，或字符串 "first" 表示对象中的所有属性必须与第一个属性对齐。也可以设置为 "off" 以禁止检查对象属性的缩进。
"ImportDeclaration" (默认: 1) 强制 import 语句的缩进。可以设置为 "first"，表示从一个模块中导入的成员要与第一个成员对齐。也可以设置为 "off" 以禁止检查导入的模块成员的缩进。
"flatTernaryExpressions": true (默认 false) 要求三元表达式内的三元表达式不能有缩进。
"ignoredNodes" 接受一组 selectors。如果任何选择器匹配了一个 AST 节点，其子节点的 token 的缩进将被忽略。如果你不同意它为特定的语法模式强制执行缩进，可以将此选项作为规避该规则的选项。
"ignoreComments" (默认: false) 当注释不需要与前一行或下一行的注释对齐，可以使用此选项。
缩进级别表示指定的多个缩进。例如：

如果缩进设置为 4 个空格，VariableDeclarator 设置为 2，多行变量声明将会缩进 8 个空格。
如果缩进设置为 2 个空格，VariableDeclarator 设置为 2，多行变量声明将会缩进 4 个空格。
如果缩进设置为 2 个空格，VariableDeclarator 设置为 {"var": 2, "let": 2, "const": 3}，多行变量声明将会分别为 var 和 let 语句缩进 4 个空格，const 语句缩进 6 个空格语句。
如果缩进设置为 tab 缩进，VariableDeclarator 设置为 2，多行变量声明将会缩进 2 个 tab。
如果缩进设置为 2 个空格，SwitchCase 设置为 0，case将不会缩进。
如果缩进设置为 2 个空格，SwitchCase 设置为 1，case 子句将相对于 switch 语句缩进 2 个空格。
如果缩进设置为 2 个空格，SwitchCase 设置为 2，case 子句将相对于 switch 语句缩进 4 个空格。
如果缩进设置为 tab 缩进，SwitchCase 设置为 2，case 子句将相对于 switch 语句缩进 2 个 tab。
如果缩进设置为 2 个空格， MemberExpression 设置为 0，多行属性将不对缩进。
如果缩进设置为 2 个空格， MemberExpression 设置为 1，多行属性将缩进 2 个空格。
如果缩进设置为 2 个空格， MemberExpression 设置为 2，多行属性将缩进 4 个空格。
如果缩进设置为 4 个空格， MemberExpression 设置为 0，多行属性将不会缩进。
如果缩进设置为 4 个空格， MemberExpression 设置为 1，多行属性将将缩进 4 个空格。
如果缩进设置为 4 个空格， MemberExpression 设置为 2，多行属性将将缩进 8 个空格。
tab
选项 "tab" 的 错误 代码示例：
```js
/*eslint indent: ["error", "tab"]*/

if (a) {
     b=c;
function foo(d) {
           e=f;
 }
}
```

选项 "tab" 的 正确 代码示例：
```js
/*eslint indent: ["error", "tab"]*/

if (a) {
/*tab*/b=c;
/*tab*/function foo(d) {
/*tab*//*tab*/e=f;
/*tab*/}
}
```

``SwitchCase``
选项 2, { "SwitchCase": 1 } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/

switch(a){
case "a":
    break;
case "b":
    break;
}
```

选项 2, { "SwitchCase": 1 } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/

switch(a){
  case "a":
    break;
  case "b":
    break;
}
```

```VariableDeclarator```
选项 2, { "VariableDeclarator": 1 } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "VariableDeclarator": 1 }]*/
/*eslint-env es6*/

var a,
    b,
    c;
let a,
    b,
    c;
const a = 1,
    b = 2,
    c = 3;
```

选项 2, { "VariableDeclarator": 1 } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "VariableDeclarator": 1 }]*/
/*eslint-env es6*/

var a,
  b,
  c;
let a,
  b,
  c;
const a = 1,
  b = 2,
  c = 3;
```

选项 2, { "VariableDeclarator": 2 } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "VariableDeclarator": 2 }]*/
/*eslint-env es6*/

var a,
    b,
    c;
let a,
    b,
    c;
const a = 1,
    b = 2,
    c = 3;
```

选项 2, { "VariableDeclarator": "first" } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "VariableDeclarator": "first" }]*/
/*eslint-env es6*/

var a,
  b,
  c;
let a,
  b,
  c;
const a = 1,
  b = 2,
  c = 3;
```

选项 2, { "VariableDeclarator": "first" } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "VariableDeclarator": "first" }]*/
/*eslint-env es6*/

var a,
    b,
    c;
let a,
    b,
    c;
const a = 1,
      b = 2,
      c = 3;
```

选项 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }]*/
/*eslint-env es6*/

var a,
    b,
    c;
let a,
    b,
    c;
const a = 1,
      b = 2,
      c = 3;
```

```outerIIFEBody```
选项 2, { "outerIIFEBody": 0 } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "outerIIFEBody": 0 }]*/

(function() {

  function foo(x) {
    return x + 1;
  }

})();


if(y) {
console.log('foo');
}
```

选项 2, {"outerIIFEBody": 0} 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "outerIIFEBody": 0 }]*/

(function() {

function foo(x) {
  return x + 1;
}

})();


if(y) {
   console.log('foo');
}
```

```MemberExpression```
选项 2, { "MemberExpression": 1 } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "MemberExpression": 1 }]*/

foo
.bar
.baz()
```

选项 2, { "MemberExpression": 1 } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "MemberExpression": 1 }]*/

foo
  .bar
  .baz();

// Any indentation is permitted in variable declarations and assignments.
var bip = aardvark.badger
                  .coyote;
```

```FunctionDeclaration```
选项 2, { "FunctionDeclaration": {"body": 1, "parameters": 2} } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "FunctionDeclaration": {"body": 1, "parameters": 2} }]*/

function foo(bar,
  baz,
  qux) {
    qux();
}
```

选项 2, { "FunctionDeclaration": {"body": 1, "parameters": 2} } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "FunctionDeclaration": {"body": 1, "parameters": 2} }]*/

function foo(bar,
    baz,
    qux) {
  qux();
}
```

选项 2, { "FunctionDeclaration": {"parameters": "first"} } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, {"FunctionDeclaration": {"parameters": "first"}}]*/

function foo(bar, baz,
  qux, boop) {
  qux();
}
```

选项 2, { "FunctionDeclaration": {"parameters": "first"} } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, {"FunctionDeclaration": {"parameters": "first"}}]*/

function foo(bar, baz,
             qux, boop) {
  qux();
}
```

```FunctionExpression```
选项 2, { "FunctionExpression": {"body": 1, "parameters": 2} } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "FunctionExpression": {"body": 1, "parameters": 2} }]*/

var foo = function(bar,
  baz,
  qux) {
    qux();
}
```

选项 2, { "FunctionExpression": {"body": 1, "parameters": 2} } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "FunctionExpression": {"body": 1, "parameters": 2} }]*/

var foo = function(bar,
    baz,
    qux) {
  qux();
}
```

选项 2, { "FunctionExpression": {"parameters": "first"} } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, {"FunctionExpression": {"parameters": "first"}}]*/

var foo = function(bar, baz,
  qux, boop) {
  qux();
}
```

选项 2, { "FunctionExpression": {"parameters": "first"} } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, {"FunctionExpression": {"parameters": "first"}}]*/

var foo = function(bar, baz,
                   qux, boop) {
  qux();
}
```

```CallExpression```
选项 2, { "CallExpression": {"arguments": 1} } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "CallExpression": {"arguments": 1} }]*/

foo(bar,
    baz,
      qux
);
```

选项 2, { "CallExpression": {"arguments": 1} } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "CallExpression": {"arguments": 1} }]*/

foo(bar,
  baz,
  qux
);
```

选项 2, { "CallExpression": {"arguments": "first"} } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, {"CallExpression": {"arguments": "first"}}]*/

foo(bar, baz,
  baz, boop, beep);
```

选项 2, { "CallExpression": {"arguments": "first"} } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, {"CallExpression": {"arguments": "first"}}]*/

foo(bar, baz,
    baz, boop, beep);
ArrayExpression
选项 2, { "ArrayExpression": 1 } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "ArrayExpression": 1 }]*/

var foo = [
    bar,
baz,
      qux
];
```

选项 2, { "ArrayExpression": 1 } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "ArrayExpression": 1 }]*/

var foo = [
  bar,
  baz,
  qux
];
```

选项 2, { "ArrayExpression": "first" } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, {"ArrayExpression": "first"}]*/

var foo = [bar,
  baz,
  qux
];
```

选项 2, { "ArrayExpression": "first" } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, {"ArrayExpression": "first"}]*/

var foo = [bar,
           baz,
           qux
];
```

```ObjectExpression```
选项 2, { "ObjectExpression": 1 } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, { "ObjectExpression": 1 }]*/

var foo = {
    bar: 1,
baz: 2,
      qux: 3
};
```

选项 2, { "ObjectExpression": 1 } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, { "ObjectExpression": 1 }]*/

var foo = {
  bar: 1,
  baz: 2,
  qux: 3
};
```

选项 2, { "ObjectExpression": "first" } 的 错误 代码示例：
```js
/*eslint indent: ["error", 2, {"ObjectExpression": "first"}]*/

var foo = { bar: 1,
  baz: 2 };
```

选项 2, { "ObjectExpression": "first" } 的 正确 代码示例：
```js
/*eslint indent: ["error", 2, {"ObjectExpression": "first"}]*/

var foo = { bar: 1,
            baz: 2 };
```

```ImportDeclaration```
默认选项 4, { "ImportDeclaration": 1 } 的 正确 代码示例：
```js
/*eslint indent: ["error", 4, { "ImportDeclaration": 1 }]*/

import { foo,
    bar,
    baz,
} from 'qux';

import {
    foo,
    bar,
    baz,
} from 'qux';
```

选项 4, { "ImportDeclaration": "first" } 的 错误 代码示例：
```js
/*eslint indent: ["error", 4, { "ImportDeclaration": "first" }]*/

import { foo,
    bar,
    baz,
} from 'qux';
选项 4, { "ImportDeclaration": "first" } 的 正确 代码示例：
```js
/*eslint indent: ["error", 4, { "ImportDeclaration": "first" }]*/

import { foo,
         bar,
         baz,
} from 'qux';
```

```flatTernaryExpressions```
默认选项 4, { "flatTernaryExpressions": false } 的 错误 代码示例：
```js
/*eslint indent: ["error", 4, { "flatTernaryExpressions": false }]*/

var a =
    foo ? bar :
    baz ? qux :
    boop;
```

选项 4, { "flatTernaryExpressions": false } 的 正确 代码示例：
```js
/*eslint indent: ["error", 4, { "flatTernaryExpressions": false }]*/

var a =
    foo ? bar :
        baz ? qux :
            boop;
```

选项 4, { "flatTernaryExpressions": true } 的 错误 代码示例：
```js
/*eslint indent: ["error", 4, { "flatTernaryExpressions": true }]*/

var a =
    foo ? bar :
        baz ? qux :
            boop;
```

选项 4, { "flatTernaryExpressions": true } 的 正确 代码示例：
```js
/*eslint indent: ["error", 4, { "flatTernaryExpressions": true }]*/

var a =
    foo ? bar :
    baz ? qux :
    boop;
```

```ignoredNodes```
下面的配置忽略 ConditionalExpression (三元表达式)节点的缩进:
```js
选项 4, { "ignoredNodes": ["ConditionalExpression"] } 的 正确 代码示例：

/*eslint indent: ["error", 4, { "ignoredNodes": ["ConditionalExpression"] }]*/

var a = foo
      ? bar
      : baz;

var a = foo
                ? bar
: baz;
```

下面的配置忽略了 IIFE 中的缩进。

选项 4, { "ignoredNodes": ["CallExpression > FunctionExpression.callee > BlockStatement.body"] } 的 正确 代码示例：
```js
/*eslint indent: ["error", 4, { "ignoredNodes": ["CallExpression > FunctionExpression.callee > BlockStatement.body"] }]*/

(function() {

foo();
bar();

})
```

```ignoreComments```
选项 4, { "ignoreComments": true } 的 正确 代码示例：
```js
/*eslint indent: ["error", 4, { "ignoreComments": true }] */

if (foo) {
    doSomething();

// comment intentionally de-indented
    doSomethingElse();
}
```

### Version
该规则在 ESLint 0.14.0 被引入。
