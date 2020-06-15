## 禁止使用不带 await 表达式的 async 函数 (require-await)

JavaScript 中的异步函数与其他函数在两个重要方面表现不同:

返回值总是一个 Promise。
你可以使用其中的 await 操作符。
使用异步函数的主要原因通常是使用 await 操作符，例如:
```js
async function fetchData(processDataItem) {
    const response = await fetch(DATA_URL);
    const data = await response.json();

    return data.map(processDataItem);
}
```

不使用 await 的异步函数可能不需要是异步函数，也可能是重构的意外结果。

### Rule Details
该规则对不包含 await 表达式的 async 函数发出警告。

错误 代码示例：
```js
/*eslint require-await: "error"*/

async function foo() {
    doSomething();
}

bar(async () => {
    doSomething();
});
```

正确 代码示例：
```js
/*eslint require-await: "error"*/

async function foo() {
    await doSomething();
}

bar(async () => {
    await doSomething();
});

function foo() {
    doSomething();
}

bar(() => {
    doSomething();
});

// Allow empty functions.
async function noop() {}
```

### When Not To Use It
异步函数被设计用来处理 Promise ，这样抛出错误将导致调用 Promise 的拒绝处理程序(如 catch() )。例如:
```js
async function fail() {
    throw new Error("Failure!");
}

fail().catch(error => {
    console.log(error.message);
});
```
在本例中，fail() 函数抛出一个错误，该错误将被稍后分配的 catch() 处理程序捕获。将 fail() 函数转换为同步函数需要对 fail() 调用进行重构，以使用 try-catch 语句而不是 promise。

如果为此目的在异步函数中抛出错误，则可能需要禁用此规则。

### Version
该规则在 ESLint 3.11.0 中被引入。
