## 建议使用剩余参数代替 arguments (prefer-rest-params)

ES2015 里有剩余参数。我们可以利用这个特性代替变参函数的 arguments 变量。

arguments 没有 Array.prototype 方法，所以有点不方便。

### Rule Details
该规则旨在减少 arguments 变量的使用。

### Examples
错误 的代码示例：
```js
function foo() {
    console.log(arguments);
}

function foo(action) {
    var args = Array.prototype.slice.call(arguments, 1);
    action.apply(null, args);
}

function foo(action) {
    var args = [].slice.call(arguments, 1);
    action.apply(null, args);
}
```

正确 的代码示例：
```js
function foo(...args) {
    console.log(args);
}

function foo(action, ...args) {
    action.apply(null, args); // or `action(...args)`, related to the `prefer-spread` rule.
}

// Note: the implicit arguments can be overwritten.
function foo(arguments) {
    console.log(arguments); // This is the first argument.
}
function foo() {
    var arguments = 0;
    console.log(arguments); // This is a local variable.
}
```

### When Not To Use It
该规则不应该在 ES3/5 环境中使用。

在 ES2015 (ES6) 或更高的版本中，如果你不想收到关于 arguments 变量的通知，那么禁用此规则。

### Version
该规则在 ESLint 2.0.0-alpha-1 中被引入。

