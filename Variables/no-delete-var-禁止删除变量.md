## 禁止删除变量 (no-delete-var)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

delete 的目的是删除对象的属性。使用 delete 操作删除一个变量可能会导致意外情况发生。

### Rule Details
该规则禁止对变量使用 delete 操作符。

如果 ESLint 是在严格模式下解析代码，解析器（而不是该规则）会报告错误。

错误 代码示例：
```js
/*eslint no-delete-var: "error"*/

var x;
delete x;
```

### Version
该规则在 ESLint 0.0.9 中被引入。
