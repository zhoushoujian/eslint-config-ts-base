## 指定程序中允许的最大环路复杂度 (complexity)

圈复杂度数量上表现为覆盖所有代码的独立现行路径条数。该规则允许设置一个圈复杂度阈值。

```js
function a(x) {
    if (true) {
        return x; // 1st path
    } else if (false) {
        return x+1; // 2nd path
    } else {
        return 4; // 3rd path
    }
}
```

### Rule Details
此规则目的在于通过在项目中设置一个圈复杂度阈值来控制代码的复杂度，因此，它将会在圈复杂度超过配置的阈值时发出警告 (默认是 20)。

最大阈值为 2 的 错误 代码示例：
```js
/*eslint complexity: ["error", 2]*/

function a(x) {
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
}
```

最大阈值为 2 的 正确 代码示例：
```js
/*eslint complexity: ["error", 2]*/

function a(x) {
    if (true) {
        return x;
    } else {
        return 4;
    }
}
```

### Options
你可以指定一个包含 max 属性的对象：

"complexity": ["error", 2]
等同于：

"complexity": ["error", { "max": 2 }]
弃用：属性 maximum 已弃用。请使用 max 属性。

### When Not To Use It
如果你不能为你的代码确定一个合适的圈复杂度阈值，最好禁用此规则。

### Version
该规则在 ESLint 0.0.9 中被引入。
