## 禁止在可能与比较操作符相混淆的地方使用箭头函数 (no-confusing-arrow)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

箭头函数 (=>) 在语法上与一些比较操作符(>，<，<= 和 >=)相似。当与比较操作符混淆的地方使用箭头函数语法，该规则会发出警告。

下面的例子使用 => 可能会让人感到困惑：
```js
// The intent is not clear
var x = a => 1 ? 2 : 3;
// Did the author mean this
var x = function (a) { return 1 ? 2 : 3 };
// Or this
var x = a <= 1 ? 2 : 3;
```

### Rule Details
错误 代码示例：
```js
/*eslint no-confusing-arrow: "error"*/
/*eslint-env es6*/

var x = a => 1 ? 2 : 3;
var x = (a) => 1 ? 2 : 3;
var x = (a) => (1 ? 2 : 3);
```

正确 代码示例：
```js
/*eslint no-confusing-arrow: "error"*/
/*eslint-env es6*/

var x = a => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
var x = a => { return 1 ? 2 : 3; };
var x = (a) => { return 1 ? 2 : 3; };
```

### Options
该规则只接收一个选项参数，使用下面的默认值：
```js
{
    "rules": {
        "no-confusing-arrow": ["error", {"allowParens": true}]
    }
}
```

allowParens 是一个布尔类型的设置，可以使 true（默认）或 false：

true 使该规则不那么严格，将括号作为有效防止混淆的语法。
false 即使表达式括在括号中也发出警告
选项 {"allowParens": false} 的 错误 代码示例：
```js
/*eslint no-confusing-arrow: ["error", {"allowParens": false}]*/
/*eslint-env es6*/
var x = a => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
```

### Version
该规则在 ESLint 2.0.0-alpha-2 中被引入。
