## 禁止使用 Object 构造函数 (no-new-object)

在 JavaScript 中，Object的构造函数用来创建新的通用对象，例如：
```js
var myObject = new Object();
```
然而，这与使用更为简洁的字面量没有什么区别：
```js
var myObject = {};
```

为此，很多人更青睐使用对象字面量而非 Object 的构造函数。

虽然这两种方式没有性能上的差别，当对象字面量节省字节、简洁的特点，让它成为事实上的创建新对象的方式。

### Rule Details
该规则禁止使用 Object 构造函数。。

错误 代码示例：
```js
/*eslint no-new-object: "error"*/

var myObject = new Object();

var myObject = new Object;
```

正确 代码示例：
```js
/*eslint no-new-object: "error"*/

var myObject = new CustomObject();

var myObject = {};
```

### When Not To Use It
如果你允许 Object 构造函数的使用，你可以关闭此规则。

### Version
该规则在 ESLint 0.0.9 中被引入。

