## 强制行的最大长度 (max-len)
代码中非常长的行在任何语言中都很难阅读。为了提高可读性和可维护性，许多程序员制定了一项约定，来限制一行代码的字符数量(按照惯例80个字符)。
```js
var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" }; // very long
```

### Rule Details
该规则旨在通过限制代码行的长度来提高代码的可读性和可维护性。因此，如果超过了配置的最大值，该规则将发出警告。一行的长度为行中的 Unicode 字符的数量。

注意：该规则是通过编码长度而不是字符格式来计算某一行的长度。这就意味着，如果你在代码中使用了双字节字符，它将被计数为 2 而不是 1 。这是 JavaScript 的一个技术上的局限性，在 ES2015 中会变得更加容易，而且在 Node.js 支持 ES2015 时，我们将更新这个规则。

### Options
该规则有一个数字或对象选项：
```js
"code" (默认 80) 强制行的最大长度
"tabWidth" (默认 4) 指定 tab 字符的宽度
"comments" 强制注释的最大长度；默认长度同 code
"ignorePattern" 忽略正则表达式匹配的行；可以只匹配单行，而且在 YAML 或 JSON 中需要双重转义
"ignoreComments": true 忽略所有拖尾注释和行内注释
"ignoreTrailingComments": true 忽略拖尾注释
"ignoreUrls": true 忽略含有链接的行
"ignoreStrings": true 忽略含有双引号或单引号字符串的行
"ignoreTemplateLiterals": true 忽略包含模板字面量的行
"ignoreRegExpLiterals": true 忽略包含正则表达式的行
```

### code
默认选项 { "code": 80 } 的 错误 代码示例：
```js
/*eslint max-len: ["error", { "code": 80 }]*/

var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };
```

默认选项 { "code": 80 } 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "code": 80 }]*/

var foo = {
  "bar": "This is a bar.",
  "baz": { "qux": "This is a qux" },
  "easier": "to read"
};
```

```tabWidth```
默认选项 { "tabWidth": 4 } 的 错误 代码示例：
```js
/*eslint max-len: ["error", { "code": 80, "tabWidth": 4 }]*/

\t  \t  var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" } };
```

默认选项 { "tabWidth": 4 } 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "code": 80, "tabWidth": 4 }]*/

\t  \t  var foo = {
\t  \t  \t  \t  "bar": "This is a bar.",
\t  \t  \t  \t  "baz": { "qux": "This is a qux" }
\t  \t  };
```

```comments```
选项 { "comments": 65 } 的 错误 代码示例：
```js
/*eslint max-len: ["error", { "comments": 65 }]*/

/**
 * This is a comment that violates the maximum line length we have specified
**/
```

```ignoreComments```
选项 { "ignoreComments": true } 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "ignoreComments": true }]*/

/**
 * This is a really really really really really really really really really long comment
**/
```

```ignoreTrailingComments```
选项 { "ignoreTrailingComments": true } 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "ignoreTrailingComments": true }]*/

var foo = 'bar'; // This is a really really really really really really really long comment
```

```ignoreUrls```
选项 { "ignoreUrls": true } 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "ignoreUrls": true }]*/

var url = 'https://www.example.com/really/really/really/really/really/really/really/long';
```

```ignoreStrings```
选项 { "ignoreStrings": true } 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "ignoreStrings": true }]*/

var longString = 'this is a really really really really really long string!';
```

```ignoreTemplateLiterals```
选项 { "ignoreTemplateLiterals": true } 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

var longTemplateLiteral = `this is a really really really really really long template literal!`;
```

```ignoreRegExpLiterals```
选项 { "ignoreRegExpLiterals": true } 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "ignoreRegExpLiterals": true }]*/

var longRegExpLiteral = /this is a really really really really really long regular expression!/;
```

```ignorePattern```
选项 ignorePattern 的 正确 代码示例：
```js
/*eslint max-len: ["error", { "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\(" }]*/

var dep = require('really/really/really/really/really/really/really/really/long/module');
```

### Version
该规则在 ESLint 0.0.9 中被引入。
