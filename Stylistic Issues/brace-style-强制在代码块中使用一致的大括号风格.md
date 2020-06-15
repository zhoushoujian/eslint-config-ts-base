## 大括号风格要求 (brace-style)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对控制语句和代码块的位置，少说也有十几种。

在 Javascript 中，one true brace style也是最常见的一种，它将大括号放在控制语句或声明语句同一行的位置。例如：
```js
if (foo) {
  bar();
} else {
  baz();
}
```

one true brace style的一种常见的变体形式叫做 Stroustrup，if-else中的else语句，连同catch 和 finally，都必须在右括号后另起一行，如下面这个例子：
```js
if (foo) {
  bar();
}
else {
  baz();
}
```

另一种风格叫做Allman， 括号必须单独成行且没有任何缩进：
```js
if (foo)
{
  bar();
}
else
{
  baz();
}
```

尽管没有哪种风格被认为会比另一种更好，但大多数开发者一致认为在同一项目中保持一致的风格对于长期的可维护性是很重要的。

### Rule Details
该规则旨在强制在Javascript中使用特定的括号风格。因此，如果某条语句或声明没有遵守该该风格，该规则将发出警告。

### Options
该规则有一个字符串选项：

"1tbs" (默认) 强制 one true brace style
"stroustrup" 强制 Stroustrup style
"allman" 强制 Allman style
该规则可以有例外情况，用对象表示：

"allowSingleLine": true (默认 false) 允许块的开括号和闭括号在 同一行
```1tbs```
选项"1tbs"的 错误 代码示例：
```js
/*eslint brace-style: "error"*/

function foo()
{
  return true;
}

if (foo)
{
  bar();
}

try
{
  somethingRisky();
} catch(e)
{
  handleError();
}

if (foo) {
  bar();
}
else {
  baz();
}
```

选项"1tbs"的 正确 代码示例：
```js
/*eslint brace-style: "error"*/

function foo() {
  return true;
}

if (foo) {
  bar();
}

if (foo) {
  bar();
} else {
  baz();
}

try {
  somethingRisky();
} catch(e) {
  handleError();
}

// when there are no braces, there are no problems
if (foo) bar();
else if (baz) boom();
```

选项"1tbs", { "allowSingleLine": true }的 正确 代码示例：
```js
/*eslint brace-style: ["error", "1tbs", { "allowSingleLine": true }]*/

function nop() { return; }

if (foo) { bar(); }

if (foo) { bar(); } else { baz(); }

try { somethingRisky(); } catch(e) { handleError(); }
```

```stroustrup```
选项"stroustrup"的 错误 代码示例：
```js
/*eslint brace-style: ["error", "stroustrup"]*/

function foo()
{
  return true;
}

if (foo)
{
  bar();
}

try
{
  somethingRisky();
} catch(e)
{
  handleError();
}

if (foo) {
  bar();
} else {
  baz();
}
```

选项"stroustrup"的 正确 代码示例：
```js
/*eslint brace-style: ["error", "stroustrup"]*/

function foo() {
  return true;
}

if (foo) {
  bar();
}

if (foo) {
  bar();
}
else {
  baz();
}

try {
  somethingRisky();
}
catch(e) {
  handleError();
}

// when there are no braces, there are no problems
if (foo) bar();
else if (baz) boom();
```

选项"stroustrup", { "allowSingleLine": true }的 正确 代码示例：
```js
/*eslint brace-style: ["error", "stroustrup", { "allowSingleLine": true }]*/

function nop() { return; }

if (foo) { bar(); }

if (foo) { bar(); }
else { baz(); }

try { somethingRisky(); }
catch(e) { handleError(); }
```

```allman```
选项"allman"的 错误 代码示例：
```js
/*eslint brace-style: ["error", "allman"]*/

function foo() {
  return true;
}

if (foo)
{
  bar(); }

try
{
  somethingRisky();
} catch(e)
{
  handleError();
}

if (foo) {
  bar();
} else {
  baz();
}
```

选项"allman"的 正确 代码示例：
```js
/*eslint brace-style: ["error", "allman"]*/

function foo()
{
  return true;
}

if (foo)
{
  bar();
}

if (foo)
{
  bar();
}
else
{
  baz();
}

try
{
  somethingRisky();
}
catch(e)
{
  handleError();
}

// when there are no braces, there are no problems
if (foo) bar();
else if (baz) boom();
```

选项"allman", { "allowSingleLine": true }的 正确 代码示例：
```js
/*eslint brace-style: ["error", "allman", { "allowSingleLine": true }]*/

function nop() { return; }

if (foo) { bar(); }

if (foo) { bar(); }
else { baz(); }

try { somethingRisky(); }
catch(e) { handleError(); }
```

### When Not To Use It
如果伱不想强制使用一种括号风格，关闭此规则即可。

### Version
该规则在 ESLint 0.0.7 中被引入。

