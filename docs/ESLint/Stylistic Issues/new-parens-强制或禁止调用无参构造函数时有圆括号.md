## 要求调用无参构造函数时带括号 (new-parens)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在 JavaScript 中，如果通过 new 关键调用一个函数而且它的构造函数不带参数，则可以省略后面圆括号。然而，一些程序员认为省略圆括号与整体不一致，从而使代码不清晰。
```js
var person = new Person;
```

### Rule Details
当使用 new 关键字调用没有参数的构造函数时，此规则可以强制或禁止括号。

### Options
此规则接受一个选项。

"always" 强制括号后的新构造函数没有参数（默认）
"never" 强制在没有参数的新构造函数后不出现任何圆括号
```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint new-parens: "error"*/

var person = new Person;
var person = new (Person);
```

选项 "always" 的 正确 代码示例：
```js
/*eslint new-parens: "error"*/

var person = new Person();
var person = new (Person)();
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint new-parens: ["error", "never"]*/

var person = new Person();
var person = new (Person)();
```

选项 "never" 的 正确 代码示例：
```js
/*eslint new-parens: ["error", "never"]*/

var person = new Person;
var person = (new Person);
var person = new Person("Name");
```

### Version
该规则在 ESLint 0.0.6 中被引入。

