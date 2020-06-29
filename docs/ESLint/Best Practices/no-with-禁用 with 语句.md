## 禁用 with 语句 (no-with)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

with 是潜在的问题，因为它会在当前的域中增加对象成员，使得区分实际块中的变量指的是什么变的不可能。

### Rule Details
此规则目的在于排除 with 语句。

如果 ESLint 在严格模式下解析代码，解析器（不是该规则）将报告这样的错误。

错误 代码示例：
```js
/*eslint no-with: "error"*/

with (point) {
    r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```

正确 代码示例：
```js
/*eslint no-with: "error"*/
/*eslint-env es6*/

const r = ({x, y}) => Math.sqrt(x * x + y * y);
```

### When Not To Use It
如果你有意要使用 with 语句，可以禁用此规则。

### Version
该规则在 ESLint 0.0.2 中被引入。

