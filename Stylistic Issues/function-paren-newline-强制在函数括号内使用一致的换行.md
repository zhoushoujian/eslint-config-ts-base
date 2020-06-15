## 强制在函数括号内使用一致的换行 (function-paren-newline)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

很多风格指南在要求或禁止在函数括号内换行。

### Rule Details
该规则强制在函数括号内使用一致的换行。

### Options
该规则有一个选项，可以是个字符串或一个对象。

"always" 要求在所有的函数括号内换行。
"never" 禁止在所有的函数括号内换行。
"multiline" (默认) 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行。
"multiline-arguments" 类似于 multiline，但如果只有一个参数/参数，则允许在函数括号内使用换行符。
"consistent" 要求每个括号使用一致的换行。如果一个括号有换行，另一个括号没有换行，则报错。
{ "minItems": value } 只要参数的个数大于等于指定的 value，则要求在函数括号内换行。否则，禁止换行。
示例配置：
```js
{
  "rules": {
    "function-paren-newline": ["error", "never"]
  }
}
{
  "rules": {
    "function-paren-newline": ["error", { "minItems": 3 }]
  }
}
```

选项 "always" 的 错误 代码示例：
```js
/* eslint function-paren-newline: ["error", "always"] */

function foo(bar, baz) {}

var foo = function(bar, baz) {};

var foo = (bar, baz) => {};

foo(bar, baz);
```

选项 "always" 的 正确 代码示例：

/* eslint function-paren-newline: ["error", "always"] */
```js
function foo(
  bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar,
  baz
);
```

选项 "never" 的 错误 代码示例：
```js
/* eslint function-paren-newline: ["error", "never"] */

function foo(
  bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar,
  baz
);
```

选项 "never" 的 正确 代码示例：
```js
/* eslint function-paren-newline: ["error", "never"] */

function foo(bar, baz) {}

function foo(bar,
             baz) {}

var foo = function(bar, baz) {};

var foo = (bar, baz) => {};

foo(bar, baz);

foo(bar,
  baz);
```

默认选项 "multiline" 的 错误 代码示例：
```js
/* eslint function-paren-newline: ["error", "multiline"] */

function foo(bar,
  baz
) {}

var foo = function(
  bar, baz
) {};

var foo = (
  bar,
  baz) => {};

foo(bar,
  baz);

foo(
  function() {
    return baz;
  }
);
```

默认选项 "multiline" 的 正确 代码示例：
```js
/* eslint function-paren-newline: ["error", "multiline"] */

function foo(bar, baz) {}

var foo = function(
  bar,
  baz
) {};

var foo = (bar, baz) => {};

foo(bar, baz, qux);

foo(
  bar,
  baz,
  qux
);

foo(function() {
  return baz;
});
```

选项 "consistent" 的 错误 代码示例：
```js
/* eslint function-paren-newline: ["error", "consistent"] */

function foo(bar,
  baz
) {}

var foo = function(bar,
  baz
) {};

var foo = (
  bar,
  baz) => {};

foo(
  bar,
  baz);

foo(
  function() {
    return baz;
  });
```

选项 "consistent" 的 正确 代码示例：
```js
/* eslint function-paren-newline: ["error", "consistent"] */

function foo(bar,
  baz) {}

var foo = function(bar, baz) {};

var foo = (
  bar,
  baz
) => {};

foo(
  bar, baz
);

foo(
  function() {
    return baz;
  }
);
```

选项 "multiline-arguments" 的 错误 代码示例：
```js
/* eslint function-paren-newline: ["error", "multiline-arguments"] */

function foo(bar,
  baz
) {}

var foo = function(bar,
  baz
) {};

var foo = (
  bar,
  baz) => {};

foo(
  bar,
  baz);

foo(
  bar, qux,
  baz
);
```

选项 "multiline-arguments" 的 正确 代码示例：
```js
/* eslint function-paren-newline: ["error", "multiline-arguments"] */

function foo(
  bar,
  baz
) {}

var foo = function(bar, baz) {};

var foo = (
  bar
) => {};

foo(
  function() {
    return baz;
  }
);
```

选项 { "minItems": 3 } 的 错误 代码示例：
```js
/* eslint function-paren-newline: ["error", { "minItems": 3 }] */

function foo(
  bar,
  baz
) {}

function foo(bar, baz, qux) {}

var foo = function(
  bar, baz
) {};

var foo = (bar,
  baz) => {};

foo(bar,
  baz);
```

选项 { "minItems": 3 } 的 正确 代码示例：
```js
/* eslint function-paren-newline: ["error", { "minItems": 3 }] */

function foo(bar, baz) {}

var foo = function(
  bar,
  baz,
  qux
) {};

var foo = (
  bar, baz, qux
) => {};

foo(bar, baz);

foo(
  bar, baz, qux
);
```

### When Not To Use It
如果你不想在函数括号内强制使用一致的换行，不要开启此规则。

### Version
该规则在 ESLint 4.6.0 中被引入。
