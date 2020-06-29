## 要求或禁止语句块之前的空格 (space-before-blocks)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一致性是任何风格指南的重要组成部分。虽然在哪里放置块的开括号纯属个人偏好，但在整个项目中应该保持一致。不一致的风格将会分散读者阅读代码的注意力。

### Rule Details
该规则将强制块之前的空格的一致性。它只在非行首的块上起作用。

该规则忽略 => 和块之间的空格。arrow-spacing 规则处理这些空格。
该规则忽略关键字和块之间的空格。keyword-spacing 规则处理这些空格。

### Options
该规则有一个参数。如果为 "always"，块语句必须总是至少有一个前置空格。如果为"never"，所有的块永远不会有前置空格。如果函数块、关键字块和类要求不同的空格类型，可以单独传递一个可选配置的对象作为该规则的参数来配置这种情况。如果配置对象中的任何值是 "off"，那么这两种类型的块都不会强制执行。 (比如：{ "functions": "never", "keywords": "always", classes: "always" } )

默认为 "always"。

```“always”```
选项 "always" 的 错误 代码示例：
```js
/*eslint space-before-blocks: "error"*/

if (a){
    b();
}

function a(){}

for (;;){
    b();
}

try {} catch(a){}

class Foo{
  constructor(){}
}
```

选项 "always" 的 正确 代码示例：
```js
/*eslint space-before-blocks: "error"*/

if (a) {
    b();
}

if (a) {
    b();
} else{ /*no error. this is checked by `keyword-spacing` rule.*/
    c();
}


function a() {}

for (;;) {
    b();
}

try {} catch(a) {}
```

```“never”```
选项 "never" 的 错误 代码示例：
```js
/*eslint space-before-blocks: ["error", "never"]*/

if (a) {
    b();
}

function a() {}

for (;;) {
    b();
}

try {} catch(a) {}
```

选项 "never" 的 正确 代码示例：
```js
/*eslint space-before-blocks: ["error", "never"]*/

if (a){
    b();
}

function a(){}

for (;;){
    b();
}

try{} catch(a){}

class Foo{
  constructor(){}
}
```

选项 { "functions": "never", "keywords": "always", "classes": "never" } 的 错误 代码示例：
```js
/*eslint space-before-blocks: ["error", { "functions": "never", "keywords": "always", "classes": "never" }]*/
/*eslint-env es6*/

function a() {}

try {} catch(a){}

class Foo{
  constructor() {}
}
```

选项 { "functions": "never", "keywords": "always", "classes": "never" } 的 正确 代码示例：
```js
/*eslint space-before-blocks: ["error", { "functions": "never", "keywords": "always", "classes": "never" }]*/
/*eslint-env es6*/

for (;;) {
  // ...
}

describe(function(){
  // ...
});

class Foo{
  constructor(){}
}
```

选项 { "functions": "always", "keywords": "never", "classes": "never" } 的 错误 代码示例：
```js
/*eslint space-before-blocks: ["error", { "functions": "always", "keywords": "never", "classes": "never" }]*/
/*eslint-env es6*/

function a(){}

try {} catch(a) {}

class Foo {
  constructor(){}
}
```

选项 { "functions": "always", "keywords": "never", "classes": "never" } 的 正确 代码示例：
```js
/*eslint space-before-blocks: ["error", { "functions": "always", "keywords": "never", "classes": "never" }]*/
/*eslint-env es6*/

if (a){
  b();
}

var a = function() {}

class Foo{
  constructor() {}
}
```

选项 { "functions": "never", "keywords": "never", "classes": "always" } 的 错误 代码示例：
```js
/*eslint space-before-blocks: ["error", { "functions": "never", "keywords": "never", "classes": "always" }]*/
/*eslint-env es6*/

class Foo{
  constructor(){}
}
```

选项呢 { "functions": "never", "keywords": "never", "classes": "always" } 的 正确 代码示例：
```js
/*eslint space-before-blocks: ["error", { "functions": "never", "keywords": "never", "classes": "always" }]*/
/*eslint-env es6*/

class Foo {
  constructor(){}
}
```

### When Not To Use It
如果你不关心块之前的空格的一致性，你可以关闭此规则。

### Version
该规则在 ESLint 0.9.0 中被引入。
