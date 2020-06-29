## 建议使用扩展语法而非.apply() (prefer-spread)

在 ES2015 之前，必须使用 Function.prototype.apply() 调用可变参数函数。
```js
var args = [1, 2, 3, 4];
Math.max.apply(Math, args);
```

在 ES2015 中，可以使用扩展语法调用可变参数函数。
```js
/*eslint-env es6*/

var args = [1, 2, 3, 4];
Math.max(...args);
```

### Rule Details
这个规则的目的是在可以使用扩展语法的情况下标记出使用 Function.prototype.apply() 的情况。

### Examples
错误 代码示例：
```js
/*eslint prefer-spread: "error"*/

foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
```

正确 代码示例：
```js
/*eslint prefer-spread: "error"*/

// Using spread syntax
foo(...args);
obj.foo(...args);

// The `this` binding is different.
foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);

// The argument list is not variadic.
// Those are warned by the `no-useless-call` rule.
foo.apply(undefined, [1, 2, 3]);
foo.apply(null, [1, 2, 3]);
obj.foo.apply(obj, [1, 2, 3]);
```

### 已知的限制：

该规则通过静态分析代码的方式检查this参数是否有改变。因此，如果在动态表达式中有 this 参数，该规则不会检查这种情况。
```js
/*eslint prefer-spread: "error"*/

// This warns.
a[i++].foo.apply(a[i++], args);

// This does not warn.
a[++i].foo.apply(a[i], args);
```

### When Not To Use It
此规则不应在 ES3/5 环境中使用。

在 ES2015 (ES6) 或以后的版本，如果你不希望收到关于 Function.prototype.apply() 调用的通知，关闭此规则即可。

### Version
该规则在 ESLint 1.0.0-rc-1 中被引入。

