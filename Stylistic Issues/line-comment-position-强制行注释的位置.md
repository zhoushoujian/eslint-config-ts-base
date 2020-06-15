## 强制行注释的位置 (line-comment-position)

行注释可以在代码上方或旁边。该规则帮助团队维护一致的注释风格。
```js
// above comment
var foo = "bar";  // beside comment
```

### Rule Details
该规则强制一致的行注释风格。块注释不受此规则影响。默认情况下，该规则忽略以 eslint、jshint、jslint、 istanbul、global、exported、jscs、falls through 开头的注释。

### Options
该规则有一个参数，可以使是一个字符串也可以是个对象。字符串选项和下面的 position 属性相同。对象选项有以下属性：

### position
position 选项有两个设置：

above (默认) 强制行注释只在代码上方，单独成行。
beside 强制行注释只在代码行后面。
position: above
选项 { "position": "above" } 的 正确 代码示例：
```js
/*eslint line-comment-position: ["error", { "position": "above" }]*/
// valid comment
1 + 1;
```

选项 { "position": "above" } 的 错误 代码示例：
```js
/*eslint line-comment-position: ["error", { "position": "above" }]*/
1 + 1; // invalid comment
```

position: beside
选项 { "position": "beside" } 的 正确 代码示例：
```js
/*eslint line-comment-position: ["error", { "position": "beside" }]*/
1 + 1; // valid comment
```

选项 { "position": "beside" } 的 错误 代码示例：
```js
/*eslint line-comment-position: ["error", { "position": "beside" }]*/
// invalid comment
1 + 1;
```

```ignorePattern```
默认情况下，该规则忽略以 eslint、jshint、jslint、 istanbul、global、exported、jscs、falls through 开头的注释。该规则提供另一种方式，即正则表达式。

选项 ignorePattern 的 正确 代码示例:
```js
/*eslint line-comment-position: ["error", { "ignorePattern": "pragma" }]*/
1 + 1; // pragma valid comment
```

选项 ignorePattern 的 错误 代码示例:
```js
/*eslint line-comment-position: ["error", { "ignorePattern": "pragma" }]*/
1 + 1; // invalid comment
```

```applyDefaultIgnorePatterns```
即使提供了 ignorePattern，默认的忽略模式也会被应用。如果你想省略默认模式，设置此选项为 false。

选项 { "applyDefaultIgnorePatterns": false } 的 正确 代码示例：
```js
/*eslint line-comment-position: ["error", { "ignorePattern": "pragma", "applyDefaultIgnorePatterns": false }]*/
1 + 1; // pragma valid comment
```

选项 { "applyDefaultIgnorePatterns": false } 的 错误 代码示例：
```js
/*eslint line-comment-position: ["error", { "ignorePattern": "pragma", "applyDefaultIgnorePatterns": false }]*/
1 + 1; // falls through
```

弃用：属性applyDefaultPatterns 已被弃用。请使用属性 applyDefaultIgnorePatterns

### When Not To Use It
如果你不关心行注释的风格，可以关闭此规则。

### Version
This rule was introduced in ESLint 3.5.0.
