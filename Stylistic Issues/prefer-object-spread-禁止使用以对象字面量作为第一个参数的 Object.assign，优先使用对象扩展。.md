## 优先使用对象扩展而不是 Object.assign

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

当使用对象字面量作为 Object.assign 第一个参数时，此规则要求使用对象扩展语法。这条规则还对只有一个对象字面量作为唯一参数时调用 Object.assign 的情况发出警告，这种情况下，不需要调用 Object.assign。

对象扩展是在 ES2018 中引入的一种声明性替代方法，它可能比更具动态性的命令式 Object.assign 执行得更好。

Rule Details
错误 代码示例：

```js
Object.assign({}, foo)

Object.assign({}, {foo: 'bar'})

Object.assign({ foo: 'bar'}, baz)

Object.assign({ foo: 'bar' }, Object.assign({ bar: 'foo' }))

Object.assign({}, { foo, bar, baz })

Object.assign({}, { ...baz })

// Object.assign with a single argument that is an object literal
Object.assign({});

Object.assign({ foo: bar });
```

正确 代码示例：
```js

Object.assign(...foo);

// Any Object.assign call without an object literal as the first argument
Object.assign(foo, { bar: baz });

Object.assign(foo, Object.assign(bar));

Object.assign(foo, { bar, baz })

Object.assign(foo, { ...baz });
```

### When Not To Use It
除非代码库支持 ES2018，否则不应使用此规则。

### Version
该规则在 ESLint 5.0.0-alpha.3 中被引入。
