### 禁用不必要的 .call() 和 .apply()（no-useless-call）

函数的调用可以写成 Function.prototype.call() 和 Function.prototype.apply()，但是 Function.prototype.call() 和 Function.prototype.apply() 比正常的函数调用效率低。

### Rule Details
此规则的目的在于标记出可以被正常函数调用所替代的 Function.prototype.call() 和 Function.prototype.apply() 的使用。

错误 代码示例：
```js
/*eslint no-useless-call: "error"*/

// These are same as `foo(1, 2, 3);`
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);

// These are same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);
```

正确 代码示例：
```js
/*eslint no-useless-call: "error"*/

// The `this` binding is different.
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);
obj.foo.apply(null, [1, 2, 3]);
obj.foo.call(otherObj, 1, 2, 3);
obj.foo.apply(otherObj, [1, 2, 3]);

// The argument list is variadic.
// Those are warned by the `prefer-spread` rule.
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
```

### Known Limitations
此规则通过静态地对比代码检测 thisArg 是否被改变。所以如果 thisArg 是个动态表达式，此规则不能作出正确的判断。

错误 代码示例：
```js
/*eslint no-useless-call: "error"*/

a[i++].foo.call(a[i++], 1, 2, 3);
```

正确 代码示例：
```js
/*eslint no-useless-call: "error"*/

a[++i].foo.call(a[i], 1, 2, 3);
```

### When Not To Use It
如果你不想收到关于不必要的 .call() 和 .apply()的通知，你可以禁用此规则。

### Version
该规则在 ESLint 1.0.0-rc-1 中被引入。

