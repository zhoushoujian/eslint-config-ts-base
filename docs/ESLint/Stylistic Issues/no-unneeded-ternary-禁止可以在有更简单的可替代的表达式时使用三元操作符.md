## 禁止可以表达为更简单结构的三元操作符 (no-unneeded-ternary)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在 JavaScript 中一个常见的错误是使用一个条件表达式在两个 Boolean 值之间进行选择而不是使用！将测试条件转为一个 Boolean 类型。如以下示例：

```js
// Bad
var isYes = answer === 1 ? true : false;

// Good
var isYes = answer === 1;

// Bad
var isNo = answer === 1 ? false : true;

// Good
var isNo = answer !== 1;
```

该规则禁止在条件表达式中使用布尔型字面量。

另一个常见的错误是使用单个变量同时作为测试条件和结果。在这种情况下，逻辑或操作符可以实现相同的功能。如下所示：

```js
// Bad
foo(bar ? bar : 1);

// Good
foo(bar || 1);
```

### Rule Details

当有更简单的结构可以代替三元操作符时，该规则禁止使用三元操作符。

错误 代码示例：

```js
/*eslint no-unneeded-ternary: "error"*/

var a = x === 2 ? true : false;

var a = x ? true : false;

var a = f(x ? x : 1);
```

正确 代码示例：

```js
/*eslint no-unneeded-ternary: "error"*/

var a = x === 2 ? 'Yes' : 'No';

var a = x !== false;

var a = x ? 'Yes' : 'No';

var a = x ? y : x;

var a = x ? x : 1; // Note that this is only allowed as it on the right hand side of an assignment; this type of ternary is disallowed everywhere else. See defaultAssignment option below for more details.
```

### Options

该规则有一个对象选项：

"defaultAssignment": true (默认) 允许条件表达式作为默认的赋值模式
"defaultAssignment": false 禁止条件表达式作为默认的赋值模式
defaultAssignment
defaultAssignment 选项允许 x ? x : expr 形式的表达式(其中 x 是任何标识符，expr 是任何表达式)作为赋值的右侧(但没有其他地方)。

选项 { "defaultAssignment": false } 的 错误 代码示例：

```js
/*eslint no-unneeded-ternary: ["error", { "defaultAssignment": false }]*/

var a = x ? x : 1;
```

### When Not To Use It

如果你不关心条件表达式中不必要的复杂性的话，你可以关闭此规则。

### Version

该规则在 ESLint 0.21.0 中被引入。
