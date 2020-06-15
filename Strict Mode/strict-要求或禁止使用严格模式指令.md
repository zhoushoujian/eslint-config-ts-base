## 要求或禁止使用严格模式指令 (strict)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

严格模式指令是在脚本或函数体开始位置放置一个 "use strict" 字面量。它启用了严格模式语义。

当指令出现在全局作用域，严格模式指令适用于整个脚本：
```js
"use strict";

// strict mode

function foo() {
    // strict mode
}
```

当指令出现在函数体开始位置，严格模式指令只适用于那个函数，包括其内部函数：
```js
function foo() {
    "use strict";
    // strict mode
}

function foo2() {
    // not strict mode
};

(function() {
    "use strict";
    function bar() {
        // strict mode
    }
}());
```

在 CommonJS 模块系统，a hidden function wraps each module and limits the scope of a “global” strict mode directive。

在 ECMAScript 模块中，总是处于严格模式语义下，严格模式指令也就没必要了。

### Rule Details
该规则要求或禁止严格模式指令。

该规则禁止严格模式指令，无论指定了下面的哪个选项 parser options：

"sourceType": "module" 也就是说，文件是 ECMAScript 模块
"impliedStrict": true ecmaFeatures 对象中的属性
在有非常规参数列表（例如，有默认参数值）的函数中，不管指定的了什么选项，该规则禁止指定严格模式指令，因为 在 ECMAScript 2016 和以后的版本中将会报语法错误。查看function 选项。

命令行的 --fix 选项不会插入新的 "use strict" 语句，只会移除不再需要的语句。

### Options
该规则有一个字符串选项：

"safe" (默认) 对应下面的选项：
"global" 如果 ESLint 认为一个文件是 CommonJS 模块
"function" 如果 ESLint 认为一个文件不是 CommonJS 模块
"global" 要求在全局作用域下有一个严格模式指令（不允许任何其它严格模式指令）
"function" 要求在函数声明或表达式开始位置有一个严格模式指令（不允许任何其它严格模式指令）
"never" 禁用严格模式指令
safe
如果 ESLint 认为一个文件是 Node.js 或 CommonJS 模块，"safe" 选项就对应 "global" 选项，因为配置指定了下面中的一个：

node 或 commonjs environments
"globalReturn": true parser options 的 ecmaFeatures 对象中的属性
否则 "safe" 选项就对应 "function" 选项。注意，如果在配置中显示指定了 "globalReturn": false，则 "safe" 选项等同于 "function" 选项，不受限于所指定的环境。

### global
选项 "global" 的 错误 代码示例：
```js
/*eslint strict: ["error", "global"]*/

function foo() {
}
/*eslint strict: ["error", "global"]*/

function foo() {
    "use strict";
}
/*eslint strict: ["error", "global"]*/

"use strict";

function foo() {
    "use strict";
}
```

选项 "global" 的 正确 代码示例：
```js
/*eslint strict: ["error", "global"]*/

"use strict";

function foo() {
}
```

### function
该个选项确保所有的函数体都是严格模式代码，而全局代码不是。特别是如果一个构建步骤链接多个脚本，一个脚本中的全局作用域的严格模式指令会无意间启用另一个脚本的严格模式。

选项 "function" 的 错误 代码示例：
```js
/*eslint strict: ["error", "function"]*/

"use strict";

function foo() {
}
/*eslint strict: ["error", "function"]*/

function foo() {
}

(function() {
    function bar() {
        "use strict";
    }
}());
/*eslint strict: ["error", "function"]*/
/*eslint-env es6*/

// Illegal "use strict" directive in function with non-simple parameter list.
// This is a syntax error since ES2016.
function foo(a = 1) {
    "use strict";
}

// We cannot write "use strict" directive in this function.
// So we have to wrap this function with a function with "use strict" directive.
function foo(a = 1) {
}
```

选项 "function" 的 正确 代码示例：
```js
/*eslint strict: ["error", "function"]*/

function foo() {
    "use strict";
}

(function() {
    "use strict";

    function bar() {
    }

    function baz(a = 1) {
    }
}());

var foo = (function() {
    "use strict";

    return function foo(a = 1) {
    };
}());
```

### never
选项 "never" 的 错误 代码示例：
```js
/*eslint strict: ["error", "never"]*/

"use strict";

function foo() {
}
/*eslint strict: ["error", "never"]*/

function foo() {
    "use strict";
}
```

选项 "never" 的 正确 代码示例：
```js
/*eslint strict: ["error", "never"]*/

function foo() {
}
```

### earlier default (removed)
该规则的默认选项(即没有指定字符串选项)在 ESLint v1.0中 被移除。"function" 选项最类似于已删除的选项。

此选项确保所有函数都在严格模式下执行。严格模式指令必须出现在全局代码中，或者在每个顶级函数声明或表达式中。它不关心嵌套函数中已经严格的不必要的严格模式指令，也不关心同一级别的多个严格模式指令。

已被删除的早期默认选项 错误 代码示例:
```js
// "strict": "error"

function foo() {
}
// "strict": "error"

(function() {
    function bar() {
        "use strict";
    }
}());
```

已被删除的早期默认选项 正确 代码示例:
```js
// "strict": "error"

"use strict";

function foo() {
}
// "strict": "error"

function foo() {
    "use strict";
}
// "strict": "error"

(function() {
    "use strict";
    function bar() {
        "use strict";
    }
}());
```

### When Not To Use It
在既有严格模式也有非严格模式的代码库中，可以关闭此规则，或必要时选择性地禁用严格模式。例如，函数引用 arguments.callee在严格模式下是无效的。可以看一下 MDN 上的这篇文章《严格模式的区别》。

### Version
该规则在 ESLint 0.1.0 中被引入。
