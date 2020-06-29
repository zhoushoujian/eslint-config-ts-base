## 禁止在全局范围使用变量和函数声明 (no-implicit-globals)

当使用浏览器端脚本时，开发者经常忘记在顶级作用域下变量和函数声明都会变成全局变量，作为 window 对象的一个属性或方法存在。它们没有自己的作用域，这一点与模块不一样。全局变量应该显式地赋值给 window 或 self。否则，局部变量应该包裹在 IIFE 中。

### Rule Details
该规则禁止在顶级作用域下使用 var 和命名的 function 声明。该规则不适用于 ES 和 CommonJS 的模块，因为它们有自己的模块作用域。

错误 代码示例：
```js
/*eslint no-implicit-globals: "error"*/

var foo = 1;

function bar() {}
```

正确 代码示例：
```js
/*eslint no-implicit-globals: "error"*/

// explicitly set on window
window.foo = 1;
window.bar = function() {};

// intended to be scope to this file
(function() {
  var foo = 1;

  function bar() {}
})();
```

选项 "parserOptions": { "sourceType": "module" } 的 正确 代码示例：
```js
/*eslint no-implicit-globals: "error"*/

// foo and bar are local to module
var foo = 1;
function bar() {}
```

### When Not To Use It
如果你希望能够在全局作用域下声明变量和函数，你可以禁用此规则。如果你总是使用模块作用域的文件，该规则将永远不会起作用。

Version
### 该规则在 ESLint 2.0.0-alpha-1 中被引入。
