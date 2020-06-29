## 禁止使用 空格 和 tab 混合缩进 (no-mixed-spaces-and-tabs)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

大多数代码约定要求使用空格或 tab 进行缩进。因此，一行代码同时混有 tab 缩进和空格缩进，通常是错误的。

### Rule Details
该规则禁止使用 空格 和 tab 混合缩进。

错误 代码示例：
```js
/*eslint no-mixed-spaces-and-tabs: "error"*/

function add(x, y) {
// --->..return x + y;

      return x + y;
}

function main() {
// --->var x = 5,
// --->....y = 7;

    var x = 5,
        y = 7;
}
```

正确 代码示例：
```js
/*eslint no-mixed-spaces-and-tabs: "error"*/

function add(x, y) {
// --->return x + y;
    return x + y;
}
```

### Options
该规则有一个字符串选项。

"smart-tabs" 当空格用于对齐时，允许混合制表符和空格。
```smart-tabs```
选项 "smart-tabs" 的 正确 代码示例：
```js
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/

function main() {
// --->var x = 5,
// --->....y = 7;

    var x = 5,
        y = 7;
}
```

### Version
该规则在 ESLint 0.7.1 中被引入。
