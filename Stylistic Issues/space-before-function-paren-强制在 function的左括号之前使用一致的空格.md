## 要求或禁止函数圆括号之前有一个空格 (space-before-function-paren)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

当格式化一个函数，函数名或 function 关键字与左括号之间允许有空白。命名函数要求函数名和 function 关键字之间有空格，但是匿名函数要求不加空格。例如：
```js
function withoutSpace(x) {
    // ...
}

function withSpace (x) {
    // ...
}

var anonymousWithoutSpace = function() {};

var anonymousWithSpace = function () {};
```

一些风格指南可能要求匿名函数的 function 关键字后面有一个空格，而其他函数指定不要空格。同样的，函数名后可能会也可能不会要求有空格。

### Rule Details
该规则旨在强制函数括号之前的空格的一致性，因此，当空格值不匹配指定首选参数时，该规则将发出警告。

### Options
该规则有一个字符串选项或一个对象选项：
```js
{
    "space-before-function-paren": ["error", "always"],
    // or
    "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
    }],
}
```

always (默认) 要求在参数的 ( 前面有一个空格。
never 禁止在参数的 ( 前面有空格。
字符串选项不会检查异步的箭头函数表达式以向后兼容。

你也可以对每种类型的函数分别设置选项。以下每个选项可以设置为 "always"、"never" 或 "ignore"。默认为 "always"。

anonymous 针对匿名函数表达式 (比如 function () {})。
named 针对命名的函数表达式 (比如 function foo () {})。
asyncArrow 针对异步的箭头函数表达式 (比如 async () => {})。
```“always”```
默认选项 "always" 的 错误 代码示例：
```js
/*eslint space-before-function-paren: "error"*/
/*eslint-env es6*/

function foo() {
    // ...
}

var bar = function() {
    // ...
};

var bar = function foo() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};

var foo = async() => 1
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint space-before-function-paren: "error"*/
/*eslint-env es6*/

function foo () {
    // ...
}

var bar = function () {
    // ...
};

var bar = function foo () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};

var foo = async () => 1
```

```“never”```
选项 "never" 的 错误 代码示例：
```js
/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/

function foo () {
    // ...
}

var bar = function () {
    // ...
};

var bar = function foo () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};

var foo = async () => 1
```

选项 "never" 的 正确 代码示例：
```js
/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/

function foo() {
    // ...
}

var bar = function() {
    // ...
};

var bar = function foo() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};

var foo = async() => 1

```

{"anonymous": "always", "named": "never", "asyncArrow": "always"}
选项 {"anonymous": "always", "named": "never", "asyncArrow": "always"} 的 错误 代码示例：
```js
/*eslint space-before-function-paren: ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}]*/
/*eslint-env es6*/

function foo () {
    // ...
}

var bar = function() {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};

var foo = async(a) => await a
```

选项 {"anonymous": "always", "named": "never", "asyncArrow": "always"} 的 正确 代码示例：
```js
/*eslint space-before-function-paren: ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}]*/
/*eslint-env es6*/

function foo() {
    // ...
}

var bar = function () {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};

var foo = async (a) => await a

```

{"anonymous": "never", "named": "always"}
选项 {"anonymous": "never", "named": "always"} 的 错误 代码示例：
```js
/*eslint space-before-function-paren: ["error", { "anonymous": "never", "named": "always" }]*/
/*eslint-env es6*/

function foo() {
    // ...
}

var bar = function () {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
```

选项 {"anonymous": "never", "named": "always"} 的 正确 代码示例：
```js
/*eslint space-before-function-paren: ["error", { "anonymous": "never", "named": "always" }]*/
/*eslint-env es6*/

function foo () {
    // ...
}

var bar = function() {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
```

{"anonymous": "ignore", "named": "always"}
选项 {"anonymous": "ignore", "named": "always"} 的 错误 代码示例：
```js
/*eslint space-before-function-paren: ["error", { "anonymous": "ignore", "named": "always" }]*/
/*eslint-env es6*/

function foo() {
    // ...
}

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
```

选项 {"anonymous": "ignore", "named": "always"} 的 正确 代码示例：
```js
/*eslint space-before-function-paren: ["error", { "anonymous": "ignore", "named": "always" }]*/
/*eslint-env es6*/

var bar = function() {
    // ...
};

var bar = function () {
    // ...
};

function foo () {
    // ...
}

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
```

### When Not To Use It
如果你不关心函数圆括号之前的空格的一致性，你可以关闭此规则。

### Version
该规则在 ESLint 0.18.0 中被引入。

