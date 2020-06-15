## 禁止自身比较（no-self-compare）

变量与其自身进行比较通常来说是一个错误，要么是打字错误要么是重构错误。它都会给读者造成困扰并且可能会引入运行错误。

唯一肯能会对变量自身做比较时候是当你在测试变量是否是 NaN。然而，在这种情况下，更适合使用 typeof x === 'number' && isNaN(x) 或者 Number.isNaN ES2015 函数 而不是变量自身比较。

### Rule Details
该规则为了突出一个潜在的令人困惑的、无意义的代码。几乎没有场景需要你比较变量本身。

错误 代码示例：
```js
/*eslint no-self-compare: "error"*/

var x = 10;
if (x === x) {
    x = 20;
}
```

### Version
该规则在 ESLint 0.0.9 中被引入。
