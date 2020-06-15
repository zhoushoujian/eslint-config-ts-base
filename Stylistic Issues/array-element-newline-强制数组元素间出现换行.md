## 强制数组元素间出现换行 (array-element-newline)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

很多风格指南要求或禁止在数组元素间出现换行。

### Rule Details
该规则强制数组元素间的换行。

### Options
该规则有一个字符串选项：

"always" (默认) 要求在数组元素间换行
"never" 禁止在数组元素间换行
"consistent" 需要一致地使用数组元素之间的换行符
或一个对象选项（只要有任何一个属性满足条件，要求换行。否则，禁止换行）：

"multiline": <boolean> 如果数组元素间有换行，则要求换行。如果为 false，该条件不生效。
"minItems": <number> 如果数组元素的个数大于等于给定的整数，则要求换行。如果为 0，则该条件将和选项 "always" 一样。如果为 null (默认)，该条件不生效。
always
默认选项 "always" 的 错误 代码示例：
```js
/*eslint array-element-newline: ["error", "always"]*/

var c = [1, 2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint array-element-newline: ["error", "always"]*/

var a = [];
var b = [1];
var c = [1,
    2];
var d = [1,
    2,
    3];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

never
选项 "never" 的 错误 代码示例：
```js
/*eslint array-element-newline: ["error", "never"]*/

var c = [
    1,
    2
];
var d = [
    1,
    2,
    3
];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

选项 "never" 的 正确 代码示例：
```js
/*eslint array-element-newline: ["error", "never"]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

```consistent```
选项 "consistent" 的 错误 代码示例：
```js
/*eslint array-element-newline: ["error", "consistent"]*/

var a = [
    1, 2,
    3
];
var b = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    },
    function baz() {
        dosomething();
    }
];
```

选项 "consistent" 的 正确 代码示例：
```js
/*eslint array-element-newline: ["error", "consistent"]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1, 2, 3];
var e = [
    1,
    2
];
var f = [
    1,
    2,
    3
];
var g = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }, function baz() {
        dosomething();
    }
];
var h = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    },
    function baz() {
        dosomething();
    }
];
```

```multiline```
选项 { "multiline": true } 的 错误 代码示例：
```js
/*eslint array-element-newline: ["error", { "multiline": true }]*/

var d = [1,
    2, 3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

选项 { "multiline": true } 的 正确 代码示例：
```js
/*eslint array-element-newline: ["error", { "multiline": true }]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

```minItems```
选项 { "minItems": 3 } 的 错误 代码示例：
```js
/*eslint array-element-newline: ["error", { "minItems": 3 }]*/

var c = [1,
    2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

选项 { "minItems": 3 } 的 正确 代码示例：
```js
/*eslint array-element-newline: ["error", { "minItems": 3 }]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1,
    2,
    3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

```multiline and minItems```
选项 { "multiline": true, "minItems": 3 } 的 错误 代码示例：
```js
/*eslint array-element-newline: ["error", { "multiline": true, "minItems": 3 }]*/

var c = [1,
2];
var d = [1, 2, 3];
var e = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }
];
```

选项 { "multiline": true, "minItems": 3 } 的 正确 代码示例：
```js
/*eslint array-element-newline: ["error", { "multiline": true, "minItems": 3 }]*/

var a = [];
var b = [1];
var c = [1, 2];
var d = [1,
    2,
    3];
var e = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    }
];
```

### When Not To Use It
如果你不想强制数组元素间的换行，不要启用此规则。

### Version
该规则在 ESLint 4.0.0-rc.0 中被引入。
