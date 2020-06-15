## 禁用八进制字面量 (no-octal)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

八进制自面量是指那些以 0 开始的数字，比如：
```js
var num = 071;      // 57
```

在 JavaScript 代码中，八进制的前导数字零作为其标示一致是导致混淆和错误的来源，ECMAScript 5 已经弃用了八进制字面量。

### Rule Details
该规则禁用八进制字面量。

如果 ESLint 是在严格模式下解析代码，解析器（而不是该规则）会报告错误。

错误 代码示例：
```js
/*eslint no-octal: "error"*/
var num = 071;
var result = 5 + 07;
```

正确 代码示例：
```js
/*eslint no-octal: "error"*/

var num  = "071";
```

### Version
该规则在 ESLint 0.0.6 中被引入。
