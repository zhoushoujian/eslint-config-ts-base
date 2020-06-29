## 禁用Function构造函数 (no-new-func)

在 JavaScript 中可以使用 Function 构造函数创建一个函数，例如：
```js
var x = new Function("a", "b", "return a + b");
```

由于调试和阅读这种类型的函数比较困难，许多人认为这并不是一个好的做法，

### Rule Details
该规则会高亮标记出不好的实践的使用。把一个字符串传给 Function 构造函数，你需要引擎解析该字符串，这一点同调用 eval 函数一样。

错误 代码示例：
```js
/*eslint no-new-func: "error"*/

var x = new Function("a", "b", "return a + b");
var x = Function("a", "b", "return a + b");
```

正确 代码示例：
```js
/*eslint no-new-func: "error"*/

var x = function (a, b) {
    return a + b;
};
```

### When Not To Use It
在一些更高级的情况下，你确实需要使用 Function 构造函数。

### Version
该规则在 ESLint 0.0.7 中被引入。

