## 禁止在对象中使用不必要的计算属性 (no-useless-computed-key)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

使用不必要的计算属性是不必要的，例如：
```js
var foo = {["a"]: "b"};
```
应被重写为：
```js
var foo = {"a": "b"};
```

### Rule Details
这条规则禁止使用不必要的计算属性。

### Examples
错误 代码示例：
```js
/*eslint no-useless-computed-key: "error"*/
/*eslint-env es6*/

var a = { ['0']: 0 };
var a = { ['0+1,234']: 0 };
var a = { [0]: 0 };
var a = { ['x']: 0 };
var a = { ['x']() {} };
```

正确 代码示例：
```js
/*eslint no-useless-computed-key: "error"*/

var c = { 'a': 0 };
var c = { 0: 0 };
var a = { x() {} };
var c = { a: 0 };
var c = { '0+1,234': 0 };
```

### When Not To Use It
如果你不想被提示使用了不必要的计算属性，你可以禁用此规则。

### Version
该规则在 ESLint 2.9.0 中被引入。
