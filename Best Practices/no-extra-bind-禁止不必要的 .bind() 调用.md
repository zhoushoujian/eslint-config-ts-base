## 禁止不必要的 .bind() 调用 (no-extra-bind)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

bind() 方法使用特定的 this 值来创建函数，并可选地将参数绑定到特定的值。当使用 this 时，在函数体中实际上使用的 this 值。例如：
```js
var boundGetName = (function getName() {
    return this.name;
}).bind({ name: "ESLint" });

console.log(boundGetName());      // "ESLint"
```

这段代码就是一个很好的例子，它使用 bind() 来设置 this 值。

有时，在代码维护过程中，bind() 不再传入 this。在这种情况下，你可以不调用 bind()，因为它没有做任何事情。
```js
// useless bind
var boundGetName = (function getName() {
    return "ESLint";
}).bind({ name: "ESLint" });

console.log(boundGetName());      // "ESLint"
```

在这段代码中，this 的引用已经被删除，但是 bind() 仍在使用。在这种情况下，bind() 就成了不必要的开销（和性能损耗），可以安全地删除。

### Rule Details
此规则目的在于避免不必要的 bind() 使用，并且当立即执行的函数表达式 (IIFE) 使用 bind()，但是没有一个合适的 this 值时，该规则会发出警告。此规则不会标记有函数参数绑定的bind() 的使用情况。

注意：箭头函数不能通过使用 bind() 设置它们的自己 this 值。此规则把所有使用bind() 的箭头函数标记为是有问题的。

错误 代码示例：
```js
/*eslint no-extra-bind: "error"*/
/*eslint-env es6*/

var x = function () {
    foo();
}.bind(bar);

var x = (() => {
    foo();
}).bind(bar);

var x = (() => {
    this.foo();
}).bind(bar);

var x = function () {
    (function () {
      this.foo();
    }());
}.bind(bar);

var x = function () {
    function foo() {
      this.bar();
    }
}.bind(baz);
```

正确 代码示例：
```js
/*eslint no-extra-bind: "error"*/

var x = function () {
    this.foo();
}.bind(bar);

var x = function (a) {
    return a + 1;
}.bind(foo, bar);
```

### When Not To Use It
如果你不担心不必要的 bind() 调用，你可以禁用此规则。

### Version
该规则在 ESLint 0.8.0 中被引入。

