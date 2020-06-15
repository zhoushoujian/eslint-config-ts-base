## 禁用__proto__（no-proto）

__proto__ 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替。

### Rule Details
当使用 new 操作符创建对象时，将 __proto__ 设置为对象构造函数的原始 “prototype” 属性。Object.getPrototypeOf 是获取对象原型的首选方法。要更改对象的原型，请使用 Object.setPrototypeOf。

错误 代码示例：
```js
/*eslint no-proto: "error"*/

var a = obj.__proto__;

var a = obj["__proto__"];

obj.__proto__ = b;

obj["__proto__"] = b;
```

正确 代码示例：
```js
/*eslint no-proto: "error"*/

var a = Object.getPrototypeOf(obj);

Object.setPrototypeOf(obj, b);

var c = { __proto__: a };
```

### When Not To Use It
You might want to turn this rule off if you need to support legacy browsers which implement the __proto__ property but not Object.getPrototypeOf or Object.setPrototypeOf.

### Version
This rule was introduced in ESLint 0.0.9.
