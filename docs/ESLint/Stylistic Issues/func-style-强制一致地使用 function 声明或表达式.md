## 强制 function 声明或表达式的一致性 (func-style)

在 Javascript 中，有两种方式定义函数：function 声明和 function 表达式。函数声明是以 function 关键字开头，然后是函数的名字，其次是它的参数和函数主体，例如：
```js
function doSomething() {
    // ...
}
```

函数表达式以 var 关键字开头，后面是函数的名称，然后是函数本身，例如：
```js
var doSomething = function() {
    // ...
};
```
函数声明和函数表达式的主要区别是：所有的声明都被提升到当前作用域的顶部，这就意味着可以把调用它的语句放在函数声明之前。例如：
```js
doSomething();

function doSomething() {
    // ...
}
```

虽然这段代码可能看起来像一个错误，但实际上由于 Javascript 引擎将函数声明提升到了作用域顶部，这段代码是可以运行的。这就意味着这段代码被视为在调用之前进行了声明。

对于 function 表达式，必须在使用它之前进行定义，否则将会导致错误。例如：
```js
doSomething();  // error!

var doSomething = function() {
    // ...
};
```

在这个例子中，doSomething()在调用时是没有定义的，所以导致运行时错误。

由于这些不同的行为，关于应该使用哪种类型的函数，一般要制定一些准则。这种选择没有正确或错误之分，只是一种偏好而已。

### Rule Details
该规则强制在一个 JavaScript 文件中强制使用一种特定的 function 风格：函数声明或函数表达式。你可以在配置文件中指定你喜欢的。

### Options
该规则有一个字符串选项：

"expression" (默认) 要求使用函数表达式而不是函数声明
"declaration" 要求使用函数声明而不是函数表达式
该规则对表达式有一个对象选项：

"allowArrowFunctions": true (默认为 false) 允许使用箭头函数 (仅在使用 declaration 时启用)
```expression```
默认选项 "expression" 的 错误 代码示例：
```js
/*eslint func-style: ["error", "expression"]*/

function foo() {
    // ...
}
```

默认选项 "expression" 的 正确 代码示例：
```js
/*eslint func-style: ["error", "expression"]*/

var foo = function() {
    // ...
};
```

```declaration```
选项 "declaration" 的 错误 代码示例：
```js
/*eslint func-style: ["error", "declaration"]*/

var foo = function() {
    // ...
};

var foo = () => {};
```

选项 "declaration" 的 正确 代码示例：
```js
/*eslint func-style: ["error", "declaration"]*/

function foo() {
    // ...
}

// Methods (functions assigned to objects) are not checked by this rule
SomeObject.foo = function() {
    // ...
};
```

```allowArrowFunctions```
选项 "declaration", { "allowArrowFunctions": true } 的 正确 代码示例：
```js
/*eslint func-style: ["error", "declaration", { "allowArrowFunctions": true }]*/

var foo = () => {};
```

### When Not To Use It
如果你允许每个开发者自己决定使用那种风格的函数，则可以禁用此规则。

### Version
该规则在 ESLint 0.2.0 被引入。
