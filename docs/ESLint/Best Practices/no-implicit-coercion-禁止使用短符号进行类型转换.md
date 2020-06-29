## 禁止使用较短的符号实现类型转换 (no-implicit-coercion)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在 JavaScript 中，有许多不同的方式进行类型转换。其中有些可能难于阅读和理解。

例如：
```js
var b = !!foo;
var b = ~foo.indexOf(".");
var n = +foo;
var n = 1 * foo;
var s = "" + foo;
foo += ``;
```

可以使用下面的代码替换:
```js
var b = Boolean(foo);
var b = foo.indexOf(".") !== -1;
var n = Number(foo);
var n = Number(foo);
var s = String(foo);
foo = String(foo);
```

### Rule Details
该规则目的是标记出使用较短的符号进行类型转换的情况，建议使用一个更明确的符号。

### Options
该规则有三个主要选项和一个覆盖选项，覆盖选项允许一些强制要求。

"boolean"(默认是 true)－当为 true 时，规则会对简短的 boolean 类型转换发出警告。
"number"(默认是 true)－当为 true 时，规则会对简短的 number 类型转换发出警告。
"string"(默认是 true)－当为 true 时，规则会对简短的 string 类型转换发出警告。
"allow" (默认是 empty) - 这个数组的每一项可以是 ~、!!、+ 或 *。
注意，在 allow 列表中，操作符 + 同时允许 +foo（数字）和 "" + foo (字符串)

```boolean```
默认选项 { "boolean": true } 的 错误 代码示例：
```js
/*eslint no-implicit-coercion: "error"*/

var b = !!foo;
var b = ~foo.indexOf(".");
// bitwise not is incorrect only with `indexOf`/`lastIndexOf` method calling.
```

默认选项 { "boolean": true } 的 正确 代码示例：
```js
/*eslint no-implicit-coercion: "error"*/

var b = Boolean(foo);
var b = foo.indexOf(".") !== -1;

var n = ~foo; // This is a just bitwise not.
```

```number```
默认选项 { "number": true } 的 错误 代码示例：
```js
/*eslint no-implicit-coercion: "error"*/

var n = +foo;
var n = 1 * foo;
```

默认选项 { "number": true } 的 正确 代码示例：
```js
/*eslint no-implicit-coercion: "error"*/

var n = Number(foo);
var n = parseFloat(foo);
var n = parseInt(foo, 10);
```

```string```
默认选项 { "string": true } 的 错误 代码示例：
```js
/*eslint no-implicit-coercion: "error"*/

var s = "" + foo;
var s = `` + foo;
foo += "";
foo += ``;
```

默认选项 { "string": true } 的 正确 代码示例：
```js
/*eslint no-implicit-coercion: "error"*/

var s = String(foo);
foo = String(foo);
```

```allow```
使用 allow 列表，我们可以覆盖和允许特定的操作符。

默认选项 { "allow": ["!!", "~"] } 的 正确 代码示例：
```js
/*eslint no-implicit-coercion: [2, { "allow": ["!!", "~"] } ]*/

var b = !!foo;
var b = ~foo.indexOf(".");
```

### When Not To Use It
如果你不想收到关于使用较短符号进行类型转换的通知，可以禁用此规则。

### Version
该规则在 ESLint 1.0.0-rc-2 中被引入。
