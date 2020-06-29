## 禁用 eval()（no-eval）

JavaScript 中的 eval() 函数是有潜在危险的，而且经常被误用。在不可信的代码里使用 eval() 有可能使程序受到不同的注入攻击。eval() 在大多数情况下可以被更好的解决问题的方法代替。
```js
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
```

### Rule Details
此规则目的在于通过禁止使用 eval() 函数来避免潜在地危险、不必要的和运行效率低下的代码。因此，当时使用 eval() 函数时，该规则将发出警告。

错误 代码示例：
```js
/*eslint no-eval: "error"*/

var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");
```

当环境指定为 browser 为 true 时的 错误 代码示例：
```js
/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");
```

当环境指定为 node 为 true 时的 错误 代码示例：
```js
/*eslint no-eval: "error"*/
/*eslint-env node*/

global.eval("var a = 0");
```

正确 代码示例：
```js
/*eslint no-eval: "error"*/
/*eslint-env es6*/

var obj = { x: "foo" },
    key = "x",
    value = obj[key];

class A {
    foo() {
        // This is a user-defined method.
        this.eval("var a = 0");
    }

    eval() {
    }
}
```

### Options
该规则有一个选项，允许间接调用 eval。间接调用 eval 相对于直接调用 eval 危害性较低，因为不会动态改变作用域。正因为如此，相对于直接调用 eval ，它们也不会对性能造成负面影响。
```js
{
    "no-eval": ["error", {"allowIndirect": true}] // default is false
}
```

选项 {"allowIndirect": true} 的 错误 代码示例：
```js
/*eslint no-eval: "error"*/

var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
```

选项 {"allowIndirect": true} 的 正确 代码示例：
```js
/*eslint no-eval: "error"*/

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

this.eval("var a = 0");
/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");
/*eslint no-eval: "error"*/
/*eslint-env node*/

global.eval("var a = 0");
```

### Known Limitations
该规则会对每一个 eval() 发出警告，即使 eval 是非全局的函数。这种行为是为了检测对 eval 的直接调用。比如：
```js
module.exports = function(eval) {
    // If the value of this `eval` is built-in `eval` function, this is a
    // call of direct `eval`.
    eval("var a = 0");
};
```

该规则无法捕获重命名的全局对象。比如：
```js
var foo = window;
foo.eval("var a = 0");
```

### Version
该规则在 ESLint 0.0.2 中被引入。

