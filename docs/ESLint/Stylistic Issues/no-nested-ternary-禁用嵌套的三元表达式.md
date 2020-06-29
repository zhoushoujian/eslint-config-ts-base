## 禁止使用嵌套的三元表达式 (no-nested-ternary)

嵌套的三元表达式使代码更加难以理解。
```js
var foo = bar ? baz : qux === quxx ? bing : bam;
```

### Rule Details
该规则禁止使用嵌套的三元表达式。

错误 代码示例：
```js
/*eslint no-nested-ternary: "error"*/

var thing = foo ? bar : baz === qux ? quxx : foobar;

foo ? baz === qux ? quxx() : foobar() : bar();
```

正确 代码示例：
```js
/*eslint no-nested-ternary: "error"*/

var thing = foo ? bar : foobar;

var thing;

if (foo) {
  thing = bar;
} else if (baz === qux) {
  thing = quxx;
} else {
  thing = foobar;
}
```

### Version
该规则在 ESLint 0.2.0 中被引入。
