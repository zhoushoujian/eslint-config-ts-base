## 禁用一成不变的循环条件 (no-unmodified-loop-condition)

循环条件中的变量在循环中是要经常改变的。如果不是这样，那么可能是个错误。
```js
while (node) {
    doSomething(node);
}
while (node) {
    doSomething(node);
    node = node.parent;
}
```

### Rule Details
该规则发现循环条件的引用，检查这些引用的变量在循环过程中是否发生改变。

如果一个引用是在一个二元表达式或三元表达式中，该规则改为检查表达式结果。

如果一个引用是一个动态表达式中(如 CallExpression，YieldExpression, …)，该规则将忽略这种情况。

错误 代码示例：
```js
while (node) {
    doSomething(node);
}
node = other;

for (var j = 0; j < items.length; ++i) {
    doSomething(items[j]);
}

while (node !== root) {
    doSomething(node);
}
```

正确 代码示例：
```js
while (node) {
    doSomething(node);
    node = node.parent;
}

for (var j = 0; j < items.length; ++j) {
    doSomething(items[j]);
}

// OK, the result of this binary expression is changed in this loop.
while (node !== root) {
    doSomething(node);
    node = node.parent;
}

// OK, the result of this ternary expression is changed in this loop.
while (node ? A : B) {
    doSomething(node);
    node = node.parent;
}

// A property might be a getter which has side effect...
// Or "doSomething" can modify "obj.foo".
while (obj.foo) {
    doSomething(obj);
}

// A function call can return various values.
while (check(obj)) {
    doSomething(obj);
}
```

### When Not To Use It
如果你不想收到关于循环条件中引用的通知，可以禁用此规则。

### Version
该规则在 ESLint 2.0.0-alpha-2 中被引入。

