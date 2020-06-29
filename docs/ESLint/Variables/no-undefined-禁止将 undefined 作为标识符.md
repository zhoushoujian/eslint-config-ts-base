## 不允许使用undefined变量 (no-undefined)

undefined 变量在 JavaScript 中是独一无二的，因为它实际上是一个全局对象属性。在 ECMAScript 3 中，可重写 undefined 的值，然而 ECMAScript 5 不允许重写 undefined ，但仍然可能遮盖原来的 undefined，例如：
```js
function doSomething(data) {
    var undefined = "hi";

    // doesn't do what you think it does
    if (data === undefined) {
        // ...
    }

}
```

由于 undefined 会被覆盖和遮蔽，所以读取 undefined 会给你一个意想不到的值。（这种情况还不同于 null， null 会始终产生同一个值。）为了防止这种情况凡是，你可以避免对 undefined 的所有使用，这也是一项风格指南所推荐的，也是该规则强制的。那些风格指南也推荐：

要使变量值为 undefined，不初始化即可。 (在 JavaScript 中，所有未经初始化的变量会自动地获得值为 undefined)
应该使用 typeof 检测一个值是否是 undefined。
如果有必要，使用 void 操作符生成 undefined。
作为另外一种宣泄，你可以使用 no-global-assign 和 no-shadow-restricted-names 规则来阻止遮蔽 undefined 或被赋值为一个不同的值。这会保证 undefined 将总是保持它的原始的和所期望的值。

### Rule Details
此规则的目的在于消除使用 undefined，使用 undefined 会产生一个警告。

错误 代码示例：
```js
/*eslint no-undefined: "error"*/

var foo = undefined;

var undefined = "foo";

if (foo === undefined) {
    // ...
}

function foo(undefined) {
    // ...
}
```

正确 代码示例：
```js
/*eslint no-undefined: "error"*/

var foo = void 0;

var Undefined = "foo";

if (typeof foo === "undefined") {
    // ...
}

global.undefined = "foo";
```

### When Not To Use It
如果想在代码中使用 undefined，应关闭此规则。

### Version
该规则在 ESLint 0.7.1 中被引入。
