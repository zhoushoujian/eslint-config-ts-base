## 禁止使用 Array 构造函数(no-array-constructor)

由于单参数的陷阱，和全局范围的 Array 可能被重定义，通常不允许使用 Array的构造函数来创建数组。唯一的例外是通过给构造函数传入指定的一个数值来创建稀疏数组。

### Rule Details
该规则禁止使用 Array 构造函数。

错误 代码示例：
```js
/*eslint no-array-constructor: "error"*/

Array(0, 1, 2)
/*eslint no-array-constructor: "error"*/

new Array(0, 1, 2)
```

正确 代码示例：
```js
/*eslint no-array-constructor: "error"*/

Array(500)
/*eslint no-array-constructor: "error"*/

new Array(someOtherArray.length)
```

### When Not To Use It
该规则强制一个几乎很普遍的风格问题。也就是说，如果构造函数的风格是首选的，可以禁用此规则。

### Version
该规则在 ESLint 0.4.0 中被引入。
