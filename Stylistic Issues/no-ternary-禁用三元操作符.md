### 禁止使用三元操作符 (no-ternary)

三元操作符通过条件操作为一个变量赋值。一些人认为使用三元操作符会导致代码不清晰。
```js
var foo = isBar ? baz : qux;
```

### Rule Details
该规则禁止使用三元操作符。

错误 代码示例：
```js
/*eslint no-ternary: "error"*/

var foo = isBar ? baz : qux;

function quux() {
  return foo ? bar() : baz();
}
```

正确 代码示例：
```js
/*eslint no-ternary: "error"*/

var foo;

if (isBar) {
    foo = baz;
} else {
    foo = qux;
}

function quux() {
    if (foo) {
        return bar();
    } else {
        return baz();
    }
}
```

### Version
该规则在 ESLint 0.0.9 中被引入。
