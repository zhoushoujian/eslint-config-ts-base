## 禁用迭代器 (no-iterator)

__iterator__ 属性曾是 SpiderMonkey 对 JavaScript 的扩展，被用来创建自定义迭代器，兼容JavaScript的 for in 和 for each。然而，这个属性现在废弃了，所以不应再使用它。这里有个例子，展示它是如何使用的：
```js
Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
}
```
你应该使用 ECMAScript 6 迭代器和生成器。

### Rule Details
此规则目的在于防止因使用 __iterator__属性而出现的错误，并不是所有浏览器都实现了这个属性。因此，当遇到 __iterator__属性时，该规则将会发出警告。

错误 代码示例：
```js
/*eslint no-iterator: "error"*/

Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
};

foo.__iterator__ = function () {};

foo["__iterator__"] = function () {};
```

正确 代码示例：
```js
/*eslint no-iterator: "error"*/

var __iterator__ = foo; // Not using the `__iterator__` property.
```

### Version
该规则在 ESLint 0.0.9 中被引入。
