## 要求使用 Error 对象作为 Promise 拒绝的原因 (prefer-promise-reject-errors)

在 Promise 中只传递内置的 Error 对象实例给 reject() 函数作为自定义错误，被认为是个很好的实践。Error 对象会自动存储堆栈跟踪，在调试时，通过它可以用来确定错误是从哪里来的。如果 Promise 使用了非 Error 的值作为拒绝原因，那么就很难确定 reject 在哪里产生。

### Rule Details
该规则旨在确保 Promise 只使用 Error 对象拒绝。

### Options
该规则有一个可选的对象参数：

```allowEmptyReject: true (默认为 false) 允许调用不带参数的 Promise.reject()。```
错误 代码示例：
```js
/*eslint prefer-promise-reject-errors: "error"*/

Promise.reject("something bad happened");

Promise.reject(5);

Promise.reject();

new Promise(function(resolve, reject) {
  reject("something bad happened");
});

new Promise(function(resolve, reject) {
  reject();
});
```

正确 代码示例：
```js
/*eslint prefer-promise-reject-errors: "error"*/

Promise.reject(new Error("something bad happened"));

Promise.reject(new TypeError("something bad happened"));

new Promise(function(resolve, reject) {
  reject(new Error("something bad happened"));
});

var foo = getUnknownValue();
Promise.reject(foo);
```

选项 allowEmptyReject: true 的 正确 代码示例：
```js
/*eslint prefer-promise-reject-errors: ["error", {"allowEmptyReject": true}]*/

Promise.reject();

new Promise(function(resolve, reject) {
  reject();
});
```

### Known Limitations
由于静态分析的限制，该规则不能保证你只使用 Error 对象作为 Promise 拒绝的原因。虽然该规则可以报告拒绝的原因明显不是一个 Error，但它不能报告那些不确定给定的原因是否是一个 Error 对象的情况。更多信息请查看 no-throw-literal 规则中的 similar limitations

为了避免规则之间的冲突，该规则不会报告在异步函数的 throw 语句中的非 Error 值，即使这些值会导致 Promise 拒绝。检测这些情况，请使用 no-throw-literal 规则。

### When Not To Use It
如果你使用自定义的非错误值作为 Promise 拒绝的原因，你可以关闭此规则。

### Version
该规则在 ESLint 3.14.0 中被引入。

