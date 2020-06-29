## 禁止重新声明变量 (no-redeclare)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

在 JavaScript 中，使用 var 可以对同一个变量再次声明。这会使变量实际声明和定义的位置混乱不堪。

### Rule Details
此规则目旨在消除同一作用域中多次声明同一变量。

错误 代码示例：
```js
/*eslint no-redeclare: "error"*/

var a = 3;
var a = 10;
```

正确 代码示例：
```js
/*eslint no-redeclare: "error"*/

var a = 3;
// ...
a = 10;
```

### Options
该规则有一个选项参数，是个对象，该对象有个布尔属性为 "builtinGlobals"。默认为true。

如果设置为 true，该规则也会检查全局内建对象，比如Object、Array、Number…

```builtinGlobals```
"builtinGlobals" 选项将会在全局范围检查被重新声明的内置全局变量。

选项 { "builtinGlobals": true } 的 错误 代码示例：
```js
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/

var Object = 0;
```

在 browser 环境下，选项 {"builtinGlobals": true} 的 错误 代码示例：
```js
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/
/*eslint-env browser*/

var top = 0;
```

browser 环境有很多内建的全局变量（例如，top）。一些内建的全局变量不能被重新声明。

注意，当使用 node 或 commonjs 环境 (或 ecmaFeatures.globalReturn，如果使用默认解析器)时，则程序的最大作用域不是实际的全局作用域，而是一个模块作用域。当出现这种情况时，声明一个以内置的全局变量命令的变量，不算是重声明，只是遮蔽了全局变量。在这种情况下，应该使用 no-shadow 规则的 "builtinGlobals" 选项。

### Version
该规则在 ESLint 0.0.9 中被引入。

