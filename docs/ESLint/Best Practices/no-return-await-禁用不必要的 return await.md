## 禁用不必要的 return await (no-return-await)

在 async function， return await 很少有用。因为 async function 的返回值总是封装在 Promise.resolve，return await 实际上并没有做任何事情，只是在 Promise resolve 或 reject 之前增加了额外的时间。唯一有效是，如果 try/catch 语句中使用 return await 来捕获另一个基于 Promise 的函数的错误，则会出现异常。

### Rule Details
该规则旨在防止由于缺乏对 async function 语法的理解而造成的常见的性能风险。

错误 代码示例：
```js
async function foo() {
    return await bar();
}
```

正确的 代码示例：
```js
async function foo() {
    return bar();
}

async function foo() {
    await bar();
    return;
}

async function foo() {
    const x = await bar();
    return x;
}

async function foo() {
    try {
        return await bar();
    } catch (error) {}
}
```

在最后一个例子中，await 是必须的，可以捕获从 bar() 抛出的错误。

### When Not To Use It
如果你使用 await 来表示一个 thenable 的值，即使是非必要的；或，如果你不想要因避免 return await 而带来的性能好处，你可以关闭此规则。

### Version
This rule was introduced in ESLint 3.10.0.

