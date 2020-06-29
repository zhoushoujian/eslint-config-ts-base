## 要求使用 let 或 const 而不是 var (no-var)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

ECMAScript 6 允许程序员使用 let 和 const 关键字在块级作用域而非函数作用域下声明变量。块级作用域在很多其他编程语言中很普遍，能帮助程序员避免错误，例如：
```js
var count = people.length;
var enoughFood = count > sandwiches.length;

if (enoughFood) {
    var count = sandwiches.length; // accidentally overriding the count variable
    console.log("We have " + count + " sandwiches for everyone. Plenty for all!");
}

// our count variable is no longer accurate
console.log("We have " + count + " people and " + sandwiches.length + " sandwiches!");
```

### Rule Details
该规则旨在阻止 var 的使用，推荐使用 const 或 let。

### Examples
错误 代码示例：
```js
/*eslint no-var: "error"*/

var x = "y";
var CONFIG = {};
```

正确 代码示例：
```js
/*eslint no-var: "error"*/
/*eslint-env es6*/

let x = "y";
const CONFIG = {};
```

### When Not To Use It
除了非 ES6 环境外，那些现有 Javascript 项目开始在他们的代码库中引入 ES6 的，如果从 var 迁移到 let 代价高的话，可能并不适用于此规则。

### Version
该规则在 ESLint 0.12.0 中被引入。

