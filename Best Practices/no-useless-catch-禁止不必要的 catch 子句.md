## 禁止不必要的 catch 子句 (no-useless-catch)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

只重新抛出原始错误的 catch 子句是冗余的，对程序的运行时行为没有影响。这些冗余子句可能会导致混乱和代码膨胀，所以最好不要使用这些不必要的 catch 子句。

### Rule Details
此规则报告只 throw 已捕获过的错误的 catch 子句。

错误 代码示例：
```js
/*eslint no-useless-catch: "error"*/

try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}

try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
} finally {
  cleanUp();
}
```

正确 代码示例：
```js
/*eslint no-useless-catch: "error"*/

try {
  doSomethingThatMightThrow();
} catch (e) {
  doSomethingBeforeRethrow();
  throw e;
}

try {
  doSomethingThatMightThrow();
} catch (e) {
  handleError(e);
}
```

When Not To Use It
如果你不想被通知有关不必要的 catch 子句，你可以安全地禁用此规则。

Version
该规则在 ESLint 5.11.0 中被引入。

