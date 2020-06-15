## 禁用函数内没有yield的 generator 函数

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

### Rule Details
如果 generator 函数内部没有yield关键字，该规则将发出警告。

### Examples
错误 代码示例：
```js
/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  return 10;
}
```

正确 代码示例：
```js
/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  yield 5;
  return 10;
}

function foo() {
  return 10;
}

// This rule does not warn on empty generator functions.
function* foo() { }
```

### When Not To Use It
如果伱不想被通知 generator 函数没有 yield 表达式，关闭此规则即可。

### Version
该规则在 ESLint 1.0.0-rc-1 中被引入。
