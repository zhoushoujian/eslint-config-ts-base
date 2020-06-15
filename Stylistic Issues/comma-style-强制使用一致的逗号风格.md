## 逗号风格 (comma-style)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

逗号风格规则强制逗号分隔列表使用一致的风格。在 JavaScript 中主要有两种逗号风格:

标准风格, 即将逗号放置在当前行的末尾
逗号前置风格, 即将逗号放置在下一行的开始位置
使用逗号前置风格的一个理由是，它能帮助跟踪遗漏的逗号和拖尾的逗号。在旧版 IE 中，这两种情况都是有问题的：在变量声明中，遗漏逗号会导致全局变量的内存泄漏，而拖尾逗号会导致出现错误。

### Rule Details
该规则强制在数组字面量、对象字面量和变量声明中使用一致的逗号风格。

该规则不适用于以下两种情况：

在逗号前后有换行符 (单独的逗号)
单行数组字面量、对象字面量和变量声明

### Options
该规则有一个字符串选项：

"last" (默认) 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
"first" 要求逗号放在数组元素、对象属性或变量声明之前，且在同一行
该规则还接受一个额外的 exceptions 对象：

"exceptions" 包含与 JavaScript 代码的抽象语法树 (AST) 的节点类型对应的属性：

"ArrayExpression": true 忽略数组字面量的逗号风格
"ArrayPattern": true 忽略数组的解构赋值语句中的逗号风格
"ArrowFunctionExpression": true 忽略箭头函数表达式的参数中的逗号风格
"CallExpression": true 忽略函数调用的参数中的逗号风格
"FunctionDeclaration": true 忽略函数声明的参数中的逗号风格
"FunctionExpression": true 忽略函数表达式的参数中的逗号风格
"ImportDeclaration": true 忽略 import 语句中的逗号风格
"ObjectExpression": true 忽略对象字面量的逗号风格
"ObjectPattern": true 忽略对象的解构赋值中的逗号风格
"VariableDeclaration": true 忽略变量声明的逗号风格
"NewExpression": true 忽略构造函数表达式参数中的逗号风格
可以使用 online demo 来确定 ESTree 定义的节点类型。

```last```
默认选项 "last" 的 错误 代码示例：
```js
/*eslint comma-style: ["error", "last"]*/

var foo = 1
,
bar = 2;

var foo = 1
  , bar = 2;


var foo = ["apples"
           , "oranges"];

function bar() {
    return {
        "a": 1
        ,"b:": 2
    };
}
```

默认选项 "last" 的 正确 代码示例：
```js
/*eslint comma-style: ["error", "last"]*/

var foo = 1, bar = 2;

var foo = 1,
    bar = 2;

var foo = ["apples",
           "oranges"];

function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}
```

```first```
选项 "first" 的 错误 代码示例：
```js
/*eslint comma-style: ["error", "first"]*/

var foo = 1,
    bar = 2;

var foo = ["apples",
           "oranges"];

function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}
```

选项 "first" 的 正确 代码示例：
```js
/*eslint comma-style: ["error", "first"]*/

var foo = 1, bar = 2;

var foo = 1
    ,bar = 2;

var foo = ["apples"
          ,"oranges"];

function bar() {
    return {
        "a": 1
        ,"b:": 2
    };
}
```

```exceptions```
一个强制 只在变量声明中 使用逗号风格的例子。

选项 "first", { "exceptions": { … } } 的 错误 代码示例：
```js
/*eslint comma-style: ["error", "first", { "exceptions": { "ArrayExpression": true, "ObjectExpression": true } }]*/

var o = {},
    a = [];
```

选项 "first", { "exceptions": { … } } 的 正确 代码示例：
```js
/*eslint comma-style: ["error", "first", { "exceptions": { "ArrayExpression": true, "ObjectExpression": true } }]*/

var o = {fst:1,
         snd: [1,
               2]}
  , a = [];
```

### When Not To Use It
如果你的项目不强制使用一致的逗号风格，关闭此规则即可。

### Version
该规则在 ESLint 0.9.0 被引入。

