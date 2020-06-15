## 要求或禁止使用分号代替 ASI (semi)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

JavaScript 在所有类 C 语言中是比较独特的，它不需要在每个语句的末尾有分号。在很多情况下，JavaScript 引擎可以确定一个分号应该在什么位置然后自动添加它。此特征被称为 自动分号插入 (ASI)，被认为是 JavaScript 中较为有争议的特征。例如，以下各行均有效：
```js
var name = "ESLint"
var website = "eslint.org";
```

第一行，JavaScript 引擎会自动插入分号，所以不会被认为是个语法错误。JavaScript 引擎还知道如何解释这一行，也知道行尾意味着语句的结束。

在 ASI 的争论中，一般有两大思想流派。第一个是，我们应该忽略 ASI 的存在，总是手动添加分号。理由是比起记住什么时候是否需要分号，把它们加进来更容易一些，并因此降低了引入错误的可能性。

然而，对使用分号的人而言，ASI 机制有时会很棘手。例如：
```js
return
{
    name: "ESLint"
};
```
这个看起来像是个return语句返回一个对象文本。然而，JavaScript 引擎将代码解释成：
```js
return;
{
    name: "ESLint";
}
```

事实上，一个分号插入到 return 语句之后，导致(块中的标签文本)下面的代码不可达。该规则和 no-unreachable 规则将会避免你的代码出现这种情况。

争论的另一派别说由于分号的自动插入，它们是可选的，不需要手动添加。然而，对不使用分号的人而言，ASI 机制有时也会很棘手。例如，考虑以下代码：
```js
var globalCounter = { }

(function () {
    var n = 0
    globalCounter.increment = function () {
        return ++n
    }
})()
```

在这个例子中，分号不会被插入到第一行末尾，导致一个运行时错误（因为一个空的对象被调用，犹如它是个函数）。no-unexpected-multiline 规则将会避免你的代码出现这种情况。

即使 ASI 允许在你的代码风格上提供更多的自由，不论你是否使用分号，它仍可以使你的代码表现的出乎意料。因此，最好是知道 ASI 什么时候插入分号，什么时候不插入分号，让 ESLint 帮你的代码避免这些潜在的意外情况。总之，正如 Isaac Schlueter 曾经描述的那样，一个 \n 字符总是一个语句的结尾(像分号一样)，除非是下面情况之一:

该语句有一个没有闭合的括号，数组或对象或其它某种方式，不是有效结束一个语句的方式。（比如，以. 或,结尾）
该行是--或 ++（在这种情况下它将减少或增加下一个标记。）
它是个 for()，while()，do，if()或 else，没有{
下一行以[，(，+，*，/，-，,，.或一些其他在单个表达式中两个标记之间的二元操作符

### Rule Details
该规则强制使用一致的分号。

### Options
该规则有两个选项，一个是字符串，一个是对象。

字符串选项：

"always" (默认) 要求在语句末尾使用分号
"never" 禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
对象选项（当为 "always" 时）：

"omitLastInOneLineBlock": true 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
对象选项（当为 "never" 时）：

"beforeStatementContinuationChars": "any" (默认) 如果下一句以 [、(、/、+ 或 - 开头，忽略句末分号 (或缺少分号)。
"beforeStatementContinuationChars": "always" 如果下一句以 [、(、/、+ 或 - 开头，要求句末有分号。
"beforeStatementContinuationChars": "never" 如果下一句以 [、(、/、+ 或 - 开头，禁止末尾有分号。

```always```
默认选项 "always" 的 错误 代码示例：
```js
/*eslint semi: ["error", "always"]*/

var name = "ESLint"

object.method = function() {
    // ...
}
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint semi: "error"*/

var name = "ESLint";

object.method = function() {
    // ...
};
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint semi: ["error", "never"]*/

var name = "ESLint";

object.method = function() {
    // ...
};
```

选项 "never" 的 正确 代码示例：
```js
/*eslint semi: ["error", "never"]*/

var name = "ESLint"

object.method = function() {
    // ...
}

var name = "ESLint"

;(function() {
    // ...
})()

import a from "a"
(function() {
    // ...
})()

import b from "b"
;(function() {
    // ...
})()
```

```omitLastInOneLineBlock```
选项 "always", { "omitLastInOneLineBlock": true } 的 正确 代码示例：
```js
/*eslint semi: ["error", "always", { "omitLastInOneLineBlock": true}] */

if (foo) { bar() }

if (foo) { bar(); baz() }
```

```beforeStatementContinuationChars```
选项 "never", { "beforeStatementContinuationChars": "always" } 的 错误 代码示例：
```js
/*eslint semi: ["error", "never", { "beforeStatementContinuationChars": "always"}] */
import a from "a"

(function() {
    // ...
})()
````

选项 "never", { "beforeStatementContinuationChars": "never" } 的 错误 代码示例：
```js
/*eslint semi: ["error", "never", { "beforeStatementContinuationChars": "never"}] */
import a from "a"

;(function() {
    // ...
})()
```

### When Not To Use It
如果你不想以任何特定的方式强制分号的使用（或省略），你可以关闭此规则。

### Version
该规则在 ESLint 0.0.6 中被引入。

