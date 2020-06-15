## 禁用与变量同名的标签 (no-label-var)

### Rule Details
该规则旨在通过禁止使用同一作用域下的同名的变量做为标签，来创建更清晰的代码。

错误 代码示例：
```js
/*eslint no-label-var: "error"*/

var x = foo;
function bar() {
x:
  for (;;) {
    break x;
  }
}
```

正确 代码示例：
```js
/*eslint no-label-var: "error"*/

// The variable that has the same name as the label is not in scope.

function foo() {
  var q = t;
}

function bar() {
q:
  for(;;) {
    break q;
  }
}
```

### When Not To Use It
如果你不想收到标签的使用情况的通知，可以关闭此规则。

### Version
该规则在 ESLint 0.0.9 中被引入。
