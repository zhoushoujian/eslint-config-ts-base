## 禁用不必要的嵌套块 (no-lone-blocks)

在 JavaScript 中，ES6 之前，由花括号分隔开的独立代码块不会创建新的作用域，也就不起什么作用。例如，这些花括号对 foo 不起任何作用：
```js
{
    var foo = bar();
}
```

在 ES6 中，如果出现一个块级绑定 (let 和 const)，类声明或函数声明（在严格模式下），代码块就会创建一个新的作用域。在这些情况下，代码块不会被认为是多余的。

### Rule Details
该规则旨在消除脚本顶部或其它块中不必要的和潜在的令人困惑的代码块。

错误 代码示例：
```js
/*eslint no-lone-blocks: "error"*/

{}

if (foo) {
    bar();
    {
        baz();
    }
}

function bar() {
    {
        baz();
    }
}

{
    function foo() {}
}

{
    aLabel: {
    }
}
```

ES6 环境下 正确 代码示例：
```js
/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/

while (foo) {
    bar();
}

if (foo) {
    if (bar) {
        baz();
    }
}

function bar() {
    baz();
}

{
    let x = 1;
}

{
    const y = 1;
}

{
    class Foo {}
}

```

在 ES6 环境和严格模式下，设置 ecmaFeatures: { blockBindings: true } 或在代码中使用 "use strict" 指令的 正确 代码示例：
```js
/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/

"use strict";

{
    function foo() {}
}
```

### Version
该规则在 ESLint 0.4.0 中被引入。
