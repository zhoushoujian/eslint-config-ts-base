## 强制使用一致的反勾号、双引号或单引号 (quotes)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

Javascript 允许你用三种方式定义字符串：双引号，单引号和反勾号(在 ECMAScript 6 中)。例如：
```js
/*eslint-env es6*/

var double = "double";
var single = 'single';
var backtick = `backtick`;    // ES6 only
```

每一行创建了一个字符串，在某些情况下，可替换使用。在代码库中，如何定义字符串是模板文本(允许嵌入的表达式被解释执行)之外的风格上的问题。

许多代码库要求以一致的方式定义字符串。

### Rule Details
该规则强制使用一致的反勾号、双引号或单引号。

### Options
该规则有两个选项，一个是字符串，一个是对象。

字符串选项：

"double" (默认) 要求尽可能地使用双引号
"single" 要求尽可能地使用单引号
"backtick" 要求尽可能地使用反勾号
对象选项：

"avoidEscape": true 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
"allowTemplateLiterals": true 允许字符串使用反勾号
弃用：avoid-escape选项已被弃用；请使用 avoidEscape。

```double```
默认选项 "double" 的 错误 代码示例：
```js
/*eslint quotes: ["error", "double"]*/

var single = 'single';
var unescaped = 'a string containing "double" quotes';
var backtick = `back\ntick`; // you can use \n in single or double quoted strings
```

默认选项 "double" 的 正确 代码示例：
```js
/*eslint quotes: ["error", "double"]*/
/*eslint-env es6*/

var double = "double";
var backtick = `back
tick`;  // backticks are allowed due to newline
var backtick = tag`backtick`; // backticks are allowed due to tag
```

```single```
选项 "single" 的 错误 代码示例：
```js
/*eslint quotes: ["error", "single"]*/

var double = "double";
var unescaped = "a string containing 'single' quotes";
```

选项 "single" 的 正确 代码示例：
```js
/*eslint quotes: ["error", "single"]*/
/*eslint-env es6*/

var single = 'single';
var backtick = `back${x}tick`; // backticks are allowed due to substitution
```

```backticks```
选项 "backtick" 的 错误 代码示例：
```js
/*eslint quotes: ["error", "backtick"]*/

var single = 'single';
var double = "double";
var unescaped = 'a string containing `backticks`';
```

选项 "backtick" 的 正确 代码示例：
```js
/*eslint quotes: ["error", "backtick"]*/
/*eslint-env es6*/

var backtick = `backtick`;
```

```avoidEscape```
选项呢 "double", { "avoidEscape": true } 的 正确 代码示例：
```js
/*eslint quotes: ["error", "double", { "avoidEscape": true }]*/
```

var single = 'a string containing "double" quotes';
选项 "single", { "avoidEscape": true } 的 正确 代码示例：
```js
/*eslint quotes: ["error", "single", { "avoidEscape": true }]*/

var double = "a string containing 'single' quotes";
```

选项 "backtick", { "avoidEscape": true } 的 正确 代码示例：
```js
/*eslint quotes: ["error", "backtick", { "avoidEscape": true }]*/

var double = "a string containing `backtick` quotes"
```

```allowTemplateLiterals```
选项 "double", { "allowTemplateLiterals": true } 的 正确 代码示例：
```js
/*eslint quotes: ["error", "double", { "allowTemplateLiterals": true }]*/

var double = "double";
var double = `double`;
```

选项 "single", { "allowTemplateLiterals": true } 的 正确 代码示例：
```js
/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

var single = 'single';
var single = `single`;
{ "allowTemplateLiterals": false } 不会禁止使用所有模板文字。如果你想禁止任何模板字面量的实例，请使用 no-restricted-syntax，并将目标指向 TemplateLiteral。
```

### When Not To Use It
如果你不需要字符串风格保持一致，可以关闭此规则。

### Version
该规则在 ESLint 0.0.7 被引入。

