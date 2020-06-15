## 禁止对函数参数再赋值 (no-param-reassign)

对函数参数中的变量进行赋值可能会误导读者，导致混乱，也会改变 arguments 对象。通常，对函数参数进行赋值并非有意为之，更多的是程序员的书写错误做成的。

当函数参数被修改时，该规则也可能会失效。由此造成的副作用可能导致不直观的执行流程，使错误难以跟踪。

### Rule Details
该规则旨在避免出现对函数参数的修改或重新赋值造成的非自主行为。

错误 代码示例：
```js
/*eslint no-param-reassign: "error"*/

function foo(bar) {
    bar = 13;
}

function foo(bar) {
    bar++;
}
```

正确 代码示例：
```js
/*eslint no-param-reassign: "error"*/

function foo(bar) {
    var baz = bar;
}
```

### Options
该规则有一个选项，是个对象，其中有一个 "props" 的布尔属性和一个数组属性"ignorePropertyModificationsFor"。"props" 默认为 false。如果 "props" 设置为true，对参数的任何属性的修改，该规则都将发出警告， 除非在 "ignorePropertyModificationsFor"（默认为空数组） 有该参数。

```props```
默认选项 { "props": false }的 正确 代码示例：
```js
/*eslint no-param-reassign: ["error", { "props": false }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}
```

选项 { "props": true } 的 错误 代码示例：
```js
/*eslint no-param-reassign: ["error", { "props": true }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}
```

选项 { "props": true } 并设置了 "ignorePropertyModificationsFor" 的 正确 代码示例：
```js
/*eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["bar"] }]*/

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
}

function foo(bar) {
    bar.aaa++;
}
```

### When Not To Use It
如果你想允许对函数参数重新赋值，你可以禁用此规则。

### Version
该规则在 ESLint 0.18.0 中被引入。
