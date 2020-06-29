## 禁止使用 new 以避免产生副作用 (no-new)

对构造函数使用 new 的目的通常是创建一个特定类型的对象并且将该对象存储在变量中，比如：
```js
var person = new Person();
```

使用 new 却不存储结果这种情况是不太常见的，比如：
```js
new Person();
```
在这个例子中，创建的对象被销毁因为它的引用没有被存储在任何地方，并且在许多场景中，这意味着构造函数应该被一个不需要使用 new 的函数所替代。

### Rule Details
此规则旨在通过禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量来保持一致性和约定。

错误 代码示例：
```js
/*eslint no-new: "error"*/

new Thing();
```

正确 代码示例：
```js
/*eslint no-new: "error"*/

var thing = new Thing();

Thing();
```

### Version
该规则在 ESLint 0.0.7 中被引入。

