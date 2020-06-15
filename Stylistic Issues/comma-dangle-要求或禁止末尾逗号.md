## 要求或禁止使用拖尾逗号 (comma-dangle)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

根据 ECMAScript5 (和 ECMAScript3!)规范，对象字面量中的拖尾逗号是合法的。然而，在 IE8（非 IE8 文档模式）下，当在 JavaScript 出现拖尾逗号，以下情况下将抛出错误。
```js
var foo = {
    bar: "baz",
    qux: "quux",
};
```

拖尾逗号简化了对象和数组增加或删除元素，因为你只需接触你要修改的行。另一个支持拖尾逗号的观点是，当对象或数组添加或删除元素时，它提高了代码差异的清晰度。

不太清晰：
```js
 var foo = {
-    bar: "baz",
-    qux: "quux"
+    bar: "baz"
 };
```
更清晰：
```js
 var foo = {
     bar: "baz",
-    qux: "quux",
 };
```

### Rule Details
这个规则强制在对象和数组字面量中使用一致的拖尾逗号。

### Options
该规则有一个字符串选项或一个对象选项：
```js
{
    "comma-dangle": ["error", "never"],
    // or
    "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }]
}
```

"never" (默认) 禁用拖尾逗号
"always" 要求使用拖尾逗号
"always-multiline" 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
"only-multiline" 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
你也可以使用一个对象选项针对每种类型的语法来配置该规则规则。

以下每个选项可以设置为 "never"、"always"、"always-multiline"、"only-multiline" 或 "ignore"。

每个选项默认为 "never"，除非额外指定。

arrays 针对数组字面量和解构赋值的数组模式。(比如 let [a,] = [1,];)
objects 针对对象字面量和解构赋值的对象模式。(比如 let {a,} = {a: 1};)
imports 针对 ES 模块的 import 声明。 (比如 import {a,} from "foo";)
exports 针对 ES 模块的 export 声明。 (比如 export {a,};)
functions 针对函数声明和函数调用。 (比如 (function(a,){ })(b,);)
functions 应该只在检测 ECMAScript 2017 或 更高版本时启用。

```never```
默认选项 "never" 的 错误 代码示例：
```js
/*eslint comma-dangle: ["error", "never"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var arr = [1,2,];

foo({
  bar: "baz",
  qux: "quux",
});
```

默认选项 "never" 的 正确 代码示例：
```js
/*eslint comma-dangle: ["error", "never"]*/

var foo = {
    bar: "baz",
    qux: "quux"
};

var arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});
```

```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint comma-dangle: ["error", "always"]*/
```js
var foo = {
    bar: "baz",
    qux: "quux"
};

var arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});
```

选项 "always" 的 正确 代码示例：
```js
/*eslint comma-dangle: ["error", "always"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var arr = [1,2,];

foo({
  bar: "baz",
  qux: "quux",
});
```

```always-multiline```
选项 "always-multiline" 的 错误 代码示例：
```js
/*eslint comma-dangle: ["error", "always-multiline"]*/

var foo = {
    bar: "baz",
    qux: "quux"
};

var foo = { bar: "baz", qux: "quux", };

var arr = [1,2,];

var arr = [1,
    2,];

var arr = [
    1,
    2
];

foo({
  bar: "baz",
  qux: "quux"
});
```

选项 "always-multiline" 的 正确 代码示例：
```js
/*eslint comma-dangle: ["error", "always-multiline"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var foo = {bar: "baz", qux: "quux"};
var arr = [1,2];

var arr = [1,
    2];

var arr = [
    1,
    2,
];

foo({
  bar: "baz",
  qux: "quux",
});
```

```only-multiline```
选项 "only-multiline" 的 错误 代码示例：
```js
/*eslint comma-dangle: ["error", "only-multiline"]*/

var foo = { bar: "baz", qux: "quux", };

var arr = [1,2,];

var arr = [1,
    2,];
```

选项 "only-multiline" 的 正确 代码示例：
```js
/*eslint comma-dangle: ["error", "only-multiline"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var foo = {
    bar: "baz",
    qux: "quux"
};

var foo = {bar: "baz", qux: "quux"};
var arr = [1,2];

var arr = [1,
    2];

var arr = [
    1,
    2,
];

var arr = [
    1,
    2
];

foo({
  bar: "baz",
  qux: "quux",
});

foo({
  bar: "baz",
  qux: "quux"
});
```

```functions```
选项 {"functions": "never"} 的 错误 代码示例：
```js
/*eslint comma-dangle: ["error", {"functions": "never"}]*/

function foo(a, b,) {
}

foo(a, b,);
new foo(a, b,);
```

选项 {"functions": "never"} 的 正确 代码示例：
```js
/*eslint comma-dangle: ["error", {"functions": "never"}]*/

function foo(a, b) {
}

foo(a, b);
new foo(a, b);
```

选项 {"functions": "always"} 的 错误 代码示例：
```js
/*eslint comma-dangle: ["error", {"functions": "always"}]*/

function foo(a, b) {
}

foo(a, b);
new foo(a, b);
```

选项 {"functions": "always"} 的 正确 代码示例：
```js
/*eslint comma-dangle: ["error", {"functions": "always"}]*/

function foo(a, b,) {
}

foo(a, b,);
new foo(a, b,);
```

### When Not To Use It
如果你并不关心拖尾逗号的问题，你可以关闭这个规则。

### Version
该规则在 ESLint 0.16.0 中被引入。

