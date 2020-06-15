## 禁止在字符串字面量中使用八进制转义序列 (no-octal-escape)

自 ECMAScript 规范第5版起，字符串字面量中的八进制转义序列已经被弃用，不应该被使用。应该使用 Unicode 转义序列。
```js
var foo = "Copyright \251";
```

### Rule Details
该规则禁止在字符串字面量中使用八进制转义序列。

如果 ESLint 是在严格模式下解析代码，解析器（而不是该规则）会报告错误。

错误 代码示例：
```js
/*eslint no-octal-escape: "error"*/

var foo = "Copyright \251";
```

正确 代码示例：
```js
/*eslint no-octal-escape: "error"*/

var foo = "Copyright \u00A9";   // unicode

var foo = "Copyright \xA9";     // hexadecimal
```

### Version
该规则在 ESLint 0.0.9 中被引入。
