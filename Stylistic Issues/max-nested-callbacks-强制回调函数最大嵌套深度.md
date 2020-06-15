## 强制回调函数最大嵌套深度 (max-nested-callbacks)
很多 JavaScript 类库是使用回调模式处理异步操作。任何复杂的程序都将最有可能在不同级别的并发性下处理多个异步回调操作。一个最长见的隐患就是嵌套的回调，使得代码嵌套层级越深越难以阅读。
```js
foo(function () {
    bar(function () {
        baz(function() {
            qux(function () {

            });
        });
    });
});
```

### Rule Details
该规则旨在强制回调函数最大可嵌套深度，以提高代码的清晰度。

### Options
该规则有一个数字或对象选项：

"max" (默认 10) 强制回调函数最大可嵌套深度
已弃用： maximum 属性已弃用；请使用 max 属性。

```max```
选项 { "max": 3 } 的 错误 代码示例：
```js
/*eslint max-nested-callbacks: ["error", 3]*/

foo1(function() {
    foo2(function() {
        foo3(function() {
            foo4(function() {
                // Do something
            });
        });
    });
});
```

选项 { "max": 3 } 的 正确 代码示例：
```js
/*eslint max-nested-callbacks: ["error", 3]*/

foo1(handleFoo1);

function handleFoo1() {
    foo2(handleFoo2);
}

function handleFoo2() {
    foo3(handleFoo3);
}

function handleFoo3() {
    foo4(handleFoo4);
}

function handleFoo4() {
    foo5();
}
```

### Version
该规则在 ESLint 0.2.0 中被引入。
