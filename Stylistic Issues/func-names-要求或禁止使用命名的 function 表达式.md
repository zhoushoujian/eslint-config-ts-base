## 要求或禁止命名的 function 表达式 (func-names)

给函数表达式加个名字可以方便调试，这种模式越来越普遍。例如：
```js
Foo.prototype.bar = function bar() {};
```
在上面的例子中添加第二个 bar是可选的。如果不使用函数名的话，当该函数抛出异常时，你可能得到一些类似于堆栈里 anonymous function 的东西。如果你为函数表达式提供了可选名称，你将在堆栈中找到该函数表达式的名称。

### Rule Details
该规则要求或禁止命名的 function 表达式。

### Options
该规则有一个字符串选项：

"always" (默认) 要求函数表达式有一个名字
"as-needed" 如果 在 ES6 环境中，这个函数名无法自动被赋值，要求函数表达式有一个名字
"never" 禁止命名函数表达式，除非在递归函数中，名字是需要的
这个规则有一个对象选项:

"generators": "always" | "as-needed" | "never"

"always" 要求命名的生成器函数 。
"as-needed" 如果无法在ES6环境中自动分配名称，则需要命名的生成器函数。
"never" 尽肯能地禁止命名的生成器函数。
当没有为 generators 提供值时，生成器函数的行为将回退到基本选项。

```always```
默认选项 "always" 的 错误 代码示例：
```js
/*eslint func-names: ["error", "always"]*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint func-names: ["error", "always"]*/

Foo.prototype.bar = function bar() {};

(function bar() {
    // ...
}())
```

```as-needed```
ECMAScript 6 的所有函数中都有一个 name 属性。name值是根据函数的代码来推断的。比如，一个函数赋值给一个变量将会自动有一个 name 属性等同于变量的名称。在堆栈跟踪中使用 name值，更容易调试。

选项 "as-needed" 的 错误 代码示例：
```js
/*eslint func-names: ["error", "as-needed"]*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
```

选项 "as-needed" 的 正确 代码示例：
```js
/*eslint func-names: ["error", "as-needed"]*/

var bar = function() {};

(function bar() {
    // ...
}())
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint func-names: ["error", "never"]*/

Foo.prototype.bar = function bar() {};

(function bar() {
    // ...
}())
```

选项 "never" 的 正确 代码示例：
```js
/*eslint func-names: ["error", "never"]*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
```

```generators```
选项 "always", { "generators": "as-needed" } 的 错误 代码示例：
```js
/*eslint func-names: ["error", "always", { "generators": "as-needed" }]*/

(function*() {
    // ...
}())
```

选项 "always", { "generators": "as-needed" } 的 正确 代码示例：
```js
/*eslint func-names: ["error", "always", { "generators": "as-needed" }]*/

var foo = function*() {};
```

选项 "always", { "generators": "never" } 的 错误 代码示例：
```js
/*eslint func-names: ["error", "always", { "generators": "never" }]*/

var foo = bar(function *baz() {});
```

选项 "always", { "generators": "never" } 的 正确 代码示例：
```js
/*eslint func-names: ["error", "always", { "generators": "never" }]*/

var foo = bar(function *() {});
```

选项 "as-needed", { "generators": "never" } 的 错误 代码示例：
```js
/*eslint func-names: ["error", "as-needed", { "generators": "never" }]*/

var foo = bar(function *baz() {});
```

选项 "as-needed", { "generators": "never" } 的 正确 代码示例：
```js
/*eslint func-names: ["error", "as-needed", { "generators": "never" }]*/

var foo = bar(function *() {});
```

选项 "never", { "generators": "always" } 的 错误 代码示例：
```js
/*eslint func-names: ["error", "never", { "generators": "always" }]*/

var foo = bar(function *() {});
```

选项 "never", { "generators": "always" } 的 正确 代码示例：
```js
/*eslint func-names: ["error", "never", { "generators": "always" }]*/

var foo = bar(function *baz() {});
```

### Version
该规则在 ESLint 0.4.0 中被引入。
