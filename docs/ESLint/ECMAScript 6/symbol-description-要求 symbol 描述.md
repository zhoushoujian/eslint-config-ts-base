### 要求 symbol 描述 (symbol-description)

Symbol 可以有可选的描述：
```js
var foo = Symbol("some description");

var someString = "some description";
var bar = Symbol(someString);
```

使用 描述 更容易促进调试：当生成一个 symbol 实例时，使用描述。
```js
var foo = Symbol("some description");

> console.log(foo);
// Symbol(some description)
```
以便在调试过程中观察时区分不同的 symbol 。

### Rule Details
该规则要求创建 symbol 时带有描述。

### Examples
错误 代码示例：
```js
/*eslint symbol-description: "error"*/
/*eslint-env es6*/

var foo = Symbol();
```

正确 代码示例：
```js
/*eslint symbol-description: "error"*/
/*eslint-env es6*/

var foo = Symbol("some description");

var someString = "some description";
var bar = Symbol(someString);
```

### When Not To Use It
该规则不应该在 ES3/5 环境中使用。

另外，如果你不想在创建 Symbol 时强制出现描述，可以安全地关闭该规则。

### Version
该规则是在 ESLint 3.4.0 中被引入。
