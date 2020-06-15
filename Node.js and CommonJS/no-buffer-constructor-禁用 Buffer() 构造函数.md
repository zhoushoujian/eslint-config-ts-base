## 禁用 Buffer() 构造函数 (no-buffer-constructor)
在 Node.js 中，Buffer 构造函数的行为取决于其参数的类型。将用户输入的参数传递给 Buffer()，而不验证其类型，会导致安全漏洞，比如远程内存泄漏和拒绝服务。因此，Buffer 构造函数已经被弃用，不应该再使用。使用 Buffer.from、Buffer.alloc 和 Buffer.allocUnsafe 生成器方法代替。

### Rule Details
该规则禁止调用 Buffer() 构造函数。

错误 代码示例：
```js
new Buffer(5);
new Buffer([1, 2, 3]);

Buffer(5);
Buffer([1, 2, 3]);

new Buffer(res.body.amount);
new Buffer(res.body.values);
```

正确 代码示例：
```js
Buffer.alloc(5);
Buffer.allocUnsafe(5);
Buffer.from([1, 2, 3]);

Buffer.alloc(res.body.amount);
Buffer.from(res.body.values);
```

### When Not To Use It
如果你不使用 Node.js，或你仍需要支持缺少像 Buffer.from 的方法的 Node.js 的版本，你不应该启用此规则。

### Version
该规则在 ESLint 4.0.0-alpha.0 中被引入。

