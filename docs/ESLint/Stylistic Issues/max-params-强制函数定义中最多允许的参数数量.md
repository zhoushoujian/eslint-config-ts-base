## 限制函数定义中最大参数个数(max-params)

函数如果有许多参数的话，会难以阅读和书写，因为要记住每个参数是什么，它的类型以及它们出现顺序。因此，许多程序员都约定一个函数中参数个数的上限。
```js
function foo (bar, baz, qux, qxx) { // four parameters, may be too many
    doSomething();
}
```

### Rule Details
该规则强制函数定义中所允许的最大参数个数。

### Options
该规则有一个数字或对象选项：

"max" (默认 3) 强制函数定义中最大参数个数
已弃用： maximum 属性已弃用；请使用 max 属性。

```max```
默认选 { "max": 3 } 的 错误 代码示例：
```js
/*eslint max-params: ["error", 3]*/
/*eslint-env es6*/

function foo (bar, baz, qux, qxx) {
    doSomething();
}

let foo = (bar, baz, qux, qxx) => {
    doSomething();
};
```

默认选项 { "max": 3 } 的 正确 代码示例：
```js
/*eslint max-params: ["error", 3]*/
/*eslint-env es6*/

function foo (bar, baz, qux) {
    doSomething();
}

let foo = (bar, baz, qux) => {
    doSomething();
};
```

### Version
该规则在 ESLint 0.0.9 中被引入。

