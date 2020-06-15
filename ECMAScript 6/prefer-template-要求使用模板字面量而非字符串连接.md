## 建议使用模板字面量而非字符串连接 (prefer-template)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在 ES2015 (ES6) 中，我们可以使用模板而非字符串连接。
```js
var str = "Hello, " + name + "!";
/*eslint-env es6*/

var str = `Hello, ${name}!`;
```

### Rule Details
该规则旨在标记字符串间 + 操作符的使用。

### Examples
错误 代码示例：
```js
/*eslint prefer-template: "error"*/

var str = "Hello, " + name + "!";
var str = "Time: " + (12 * 60 * 60 * 1000);
```

正确 代码示例：
```js
/*eslint prefer-template: "error"*/
/*eslint-env es6*/

var str = "Hello World!";
var str = `Hello, ${name}!`;
var str = `Time: ${12 * 60 * 60 * 1000}`;

// This is reported by `no-useless-concat`.
var str = "Hello, " + "World!";
```

### When Not To Use It
此规则不应在 ES3/5 环境中使用。

在 ES2015 (ES6) 或以后的版本，如果你不希望收到关于字符串连接的通知，关闭此规则即可。

### Version
该规则在 ESLint 1.2.0 中被引入。

