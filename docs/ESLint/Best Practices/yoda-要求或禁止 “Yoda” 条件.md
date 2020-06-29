## 要求或者禁止Yoda条件 (yoda)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

Yoda 条件被如此命名，是因为在条件判断中字面量在先而变量在第二的位置。例如，以下是 Yoda 条件：
```js
if ("red" === color) {
    // ...
}
```
它被叫做 Yoda 条件是因为它这样读：”红色是颜色”，类似于星球大战中 Yoda 的讲话方式。对比另一种操作数的排序方式：
```js
if (color === "red") {
    // ...
}
```
这通常读作，”颜色是红的”，这是一种更自然的方式去描述对比。

Yoda 条件的支持者强调，错误地使用 = 代替 == 是不可能的，因为你不能分配给一个文本值。这样做将导致一个语法错误，并且你会被提早告知。因此在工具尚不可用的早期编程中，这种做法是非常常见的。

Yoda 条件的反对者指出工具使我们成为更好的程序员，因为工具将捕获使用 = 代替 == 的错误（ESLint 将为你捕获这个错误）。因此,他们认为当使用 Yoda 条件时，该模式的实用性并不高于代码的可读性。

### Rule Details
这条规则需要一个参数。如果是 "never" 那么比较绝不能是一个 Yoda 条件。

### Options
该规则只有一个字符串选项：

如果是默认的 "never"，则比较绝不能是 Yoda 条件。
如果是 "always"，那么字面量值必须放在首位。
默认选项 "never" 可以有例外情况，是个对象：

如果 "exceptRange" 为 true，该规则 允许 yoda 条件 出现在被括号包裹的范围比较中，包括 if 或 while 条件的括号。默认为 false。一个 范围 比较测试一个变量是在两个字面量内部还是外部。
如果 "onlyEquality" 为 true，该规则 只 对等号操作符 == 和 === 报告 yoda 条件。默认为 false。
onlyEquality 选项所允许的是 exceptRange 所允许的例外的超集，因此同时使用它们什么用。

```never```
默认选项"never"的 错误 代码示例：
```js
/*eslint yoda: "error"*/

if ("red" === color) {
    // ...
}

if (true == flag) {
    // ...
}

if (5 > count) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}

if (0 <= x && x < 1) {
    // ...
}
```

默认选项 "never" 的 正确 代码示例：
```js
/*eslint yoda: "error"*/

if (5 & value) {
    // ...
}

if (value === "red") {
    // ...
}
```

```exceptRange```
选项 "never", { "exceptRange": true } 的 正确 代码示例：
```js
/*eslint yoda: ["error", "never", { "exceptRange": true }]*/

function isReddish(color) {
    return (color.hue < 60 || 300 < color.hue);
}

if (x < -1 || 1 < x) {
    // ...
}

if (count < 10 && (0 <= rand && rand < 1)) {
    // ...
}

function howLong(arr) {
    return (0 <= arr.length && arr.length < 10) ? "short" : "long";
}
```

```onlyEquality```
选项 "never", { "onlyEquality": true } 的 正确 代码示例：
```js
/*eslint yoda: ["error", "never", { "onlyEquality": true }]*/

if (x < -1 || 9 < x) {
}

if (x !== 'foo' && 'bar' != x) {
}
```

```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint yoda: ["error", "always"]*/

if (color == "blue") {
    // ...
}
```

选项 "always" 的 正确 代码示例：
```js
/*eslint yoda: ["error", "always"]*/

if ("blue" == value) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}
```

### Version
该规则在 ESLint 0.7.1 中被引入。

