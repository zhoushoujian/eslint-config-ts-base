## 禁止将全局对象当作函数进行调用 (no-obj-calls)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

ECMAScript 提供了几个全局对象，旨在直接调用。这些对象由于是大写的（比如 Math 和 JSON）看起来像是构造函数，但是如果你尝试像函数一样执行它们，将会抛出错误。

ECMAScript 5 规范明确表示 Math 和 JSON 是不能被调用的：

Math 对象没有 [[Call]] 内部属性，不能像一个函数一样调用 Math 对象

ECMAScript 2015 specification 明确表明 Reflect 不能被调用：

Reflect 对象没有 [[Call]] 内置方法；无法像调用函数一样调用 Reflect 对象。

### Rule Details
该规则禁止将 Math、JSON 和 Reflect 对象当作函数进行调用。

错误 代码示例：
```js
/*eslint no-obj-calls: "error"*/

var math = Math();
var json = JSON();
var reflect = Reflect();
```

正确 代码示例：
```js
/*eslint no-obj-calls: "error"*/

function area(r) {
    return Math.PI * r * r;
}
var object = JSON.parse("{}");
var value = Reflect.get({ x: 1, y: 2 }, "x");
```

### Version
该规则在 ESLint 0.0.9 中被引入。
