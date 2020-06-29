## 禁止 Symbolnew 操作符和 new 一起使用 (no-new-symbol)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

Symbol 不和 new 操作符一起使用，而是作为函数调用。
```js
var foo = new Symbol("foo");
```
这会抛出 TypeError 异常。

### Rule Details
该规则旨在阻止使用 new 操作符调用 Symbol。

### Examples
错误 代码示例：
```js
/*eslint no-new-symbol: "error"*/
/*eslint-env es6*/

var foo = new Symbol('foo');
```

正确 代码示例：
```js
/*eslint no-new-symbol: "error"*/
/*eslint-env es6*/

var foo = Symbol('foo');


// Ignores shadowed Symbol.
function bar(Symbol) {
    const baz = new Symbol("baz");
}
```

### When Not To Use It
该规则不应在 ES3/5 环境中使用。

### Version
该规则在 ESLint 2.0.0-beta.1 中被引入。
