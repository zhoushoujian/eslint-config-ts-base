## 在数组开括号后和闭括号前强制换行 (array-bracket-newline)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

很多风格指南要求或禁止在数组括号内出现换行。

### Rule Details
该规则强制在数组开括号后和闭括号前出现换行。

### Options
该规则有一个字符串选项：

"always" 要求在括号之间换行
"never" 禁止在括号之间换行
"consistent" 对每个括号要求使用一致的换行符。如果一个括号有换行符，另一个没有，则会报错。
或一个对象选项（只要有任何一个属性满足条件，要求换行。否则，禁止换行）：

"multiline": true (默认) 如果数组元素内或元素间有换行，则要求换行。如果为 false，该条件不生效。
"minItems": null (默认) 如果数组元素的个数大于等于给定的整数，则要求换行。如果为 0，则等同于 "always" 选项。如果为 null (默认)，该条件不生效。
```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint array-bracket-newline: ["error", "always"]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1,
    2];
var e = [function foo() {
    dosomething();
}];
```

选项 "always" 的 正确 代码示例：
```js
/*eslint array-bracket-newline: ["error", "always"]*/

var a = [
];
var b = [
    1
];
var c = [
    1, 2
];
var d = [
    1,
    2
];
var e = [
    function foo() {
        dosomething();
    }
];
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint array-bracket-newline: ["error", "never"]*/

var a = [
];
var b = [
    1
];
var c = [
    1, 2
];
var d = [
    1,
    2
];
var e = [
    function foo() {
        dosomething();
    }
];
```

选项 "never" 的 正确 代码示例：
```js
/*eslint array-bracket-newline: ["error", "never"]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1,
    2];
var e = [function foo() {
    dosomething();
}];
```

```consistent```
选项 "consistent" 的 错误 代码示例：
```js
/*eslint array-bracket-newline: ["error", "consistent"]*/

var a = [1
];
var b = [
    1];
var c = [function foo() {
    dosomething();
}
]
var d = [
    function foo() {
        dosomething();
    }]
```

选项 "consistent" 的 正确 代码示例：
```js
/*eslint array-bracket-newline: ["error", "consistent"]*/

var a = [];
var b = [
];
var c = [1];
var d = [
    1
];
var e = [function foo() {
    dosomething();
}];
var f = [
    function foo() {
        dosomething();
    }
];
```

```multiline```
默认选项 { "multiline": true } 的 错误 代码示例：
```js
/*eslint array-bracket-newline: ["error", { "multiline": true }]*/

var a = [
];
var b = [
    1
];
var c = [
    1, 2
];
var d = [1,
    2];
var e = [function foo() {
    dosomething();
}];
```

默认选项 { "multiline": true } 的 正确 代码示例：
```js
/*eslint array-bracket-newline: ["error", { "multiline": true }]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [
    1,
    2
];
var e = [
    function foo() {
        dosomething();
    }
];
```

```minItems```
选项 { "minItems": 2 } 的 错误 代码示例：
```js
/*eslint array-bracket-newline: ["error", { "minItems": 2 }]*/

var a = [
];
var b = [
    1
];
var c = [1, 2];
var d = [1,
    2];
var e = [
  function foo() {
    dosomething();
  }
];
```

选项 { "minItems": 2 } 的 正确 代码示例：
```js
/*eslint array-bracket-newline: ["error", { "minItems": 2 }]*/

var a = [];
var b = [1];
var c = [
    1, 2
];
var d = [
    1,
    2
];
var e = [function foo() {
    dosomething();
}];
```

```multiline and minItems```
选项 { "multiline": true, "minItems": 2 } 的 错误 代码示例：
```js
/*eslint array-bracket-newline: ["error", { "multiline": true, "minItems": 2 }]*/

var a = [
];
var b = [
    1
];
var c = [1, 2];
var d = [1,
    2];
var e = [function foo() {
    dosomething();
}];
```

选项 { "multiline": true, "minItems": 2 } 的 正确 代码示例：
```js
/*eslint array-bracket-newline: ["error", { "multiline": true, "minItems": 2 }]*/

var a = [];
var b = [1];
var c = [
    1, 2
];
var d = [
    1,
    2
];
var e = [
    function foo() {
        dosomething();
    }
];
```

### When Not To Use It
如果你不想在数组开括号后和闭括号前强制换行，不要启用此规则。

### Version
该规则在 ESLint 4.0.0-alpha.1 中被引入。

