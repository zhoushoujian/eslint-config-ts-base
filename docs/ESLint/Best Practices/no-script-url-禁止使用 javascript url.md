### 禁用 Script URL (no-script-url)

在链接地址中使用 javascript: 被有些人认为是 eval 的一种形式。在 javascript: 链接中的代码必须由浏览器解析和赋值，其处理方式与 eval 一样。

### Rule Details
错误 代码示例：
```js
/*eslint no-script-url: "error"*/

location.href = "javascript:void(0)";
```

### Compatibility
JSHint: This rule corresponds to scripturl rule of JSHint.

JSHint：此规则对应JSHint中的scripturl规则。

### Version
该规则在 ESLint 0.0.9 中被引入。
