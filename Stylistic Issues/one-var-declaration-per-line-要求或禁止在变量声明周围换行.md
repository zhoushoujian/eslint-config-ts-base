## 要求或禁止在变量声明周围换行 (one-var-declaration-per-line)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些开发者在同一行上声明多个变量：
```js
var foo, bar, baz;
```
另一些人更喜欢声明每个变量单独成行。
```js
var foo,
    bar,
    baz;
```

在整个项目中保持使用一种风格有利于保持代码一致性。

### Rule Details
该规则强制变量声明使用一致的的换行。该规则忽略 for 循环语句中的变量声明。

### Options
该规则有一个字符串选项，可以是：

"initializations" (默认) 强制每个变量初始化语句换行
"always" 强制每个变量声明都换行
initializations
默认选项 "initializations" 的 错误 代码示例：
```js
/*eslint one-var-declaration-per-line: ["error", "initializations"]*/
/*eslint-env es6*/

var a, b, c = 0;

let a,
    b = 0, c;
```

默认选项 "initializations" 的 正确 代码示例：
```js
/*eslint one-var-declaration-per-line: ["error", "initializations"]*/
/*eslint-env es6*/

var a, b;

let a,
    b;

let a,
    b = 0;
```

```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint one-var-declaration-per-line: ["error", "always"]*/
/*eslint-env es6*/

var a, b;

let a, b = 0;

const a = 0, b = 0;
```

选项 "always" 的 正确 代码示例：
```js
/*eslint one-var-declaration-per-line: ["error", "always"]*/
/*eslint-env es6*/

var a,
    b;

let a,
    b = 0;
```

### Version
该规则在 ESLint 2.0.0-beta.3 中被引入。
