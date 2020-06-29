## 禁用 process.exit() (no-process-exit)

process.exit() 方法在 Node.js 中被用于立即终止 Node.js 进程且退出。这是非常危险的操作，因为他能在任何方法任何时候出现，当发生错误时可能完全停止 Node.js 应用。如：
```js
if (somethingBadHappened) {
    console.error("Something bad happened!");
    process.exit(1);
}
```
这段代码能出现在任何模块中，当 somethingBadHappened 为 true 时，将停止整个应用。不给应用任何相应错误的机会。通常较好地做法是抛出一个错误，允许应用妥善处理这个错误。
```js
if (somethingBadHappened) {
    throw new Error("Something bad happened!");
}
```
以这种方式抛出错误，应用程序的其他部分有机会处理错误，而不是全部终止程序。如果这个错误向上回退到进程顶部而未被处理，进程将退出并返回异常退出的错误码，所以最终的结果是一样的。

如果只使用 process.exit() 指定退出代码，则可以设置 process.exitCode (在 Node.js 0.11.8 中引入)。

### Rule Details
此规则旨在阻止在 Node.js 中使用 process.exit()。当在代码中发现 process.exit()，该规则会发出警告。

错误 代码示例：
```js
/*eslint no-process-exit: "error"*/

process.exit(1);
process.exit(0);
```

正确 代码示例：
```js
/*eslint no-process-exit: "error"*/

Process.exit();
var exit = process.exit;
```

### When Not To Use It
Node.js 应用中可以能有一部分是负责正确的退出码返回退出。在这种情况下，你应该关闭规则来允许适当处理退出码。

### Version
该规则在 ESLint 0.4.0 中被引入。
