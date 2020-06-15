## 不允许初始化变量值为 undefined (no-undef-init)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 undefined 作为初始值。比如：
```js
var foo;

console.log(foo === undefined);     // true
```

因此，初始化变量值为 undefined 是多余的，如：
```js
var foo = undefined;
```
最好的做法是避免初始化变量值为 undefined。

### Rule Details
此规则旨在限制变量声明后被初始化为 undefined。

错误 代码示例：
```js
/*eslint no-undef-init: "error"*/
/*eslint-env es6*/

var foo = undefined;
let bar = undefined;
```

正确 代码示例：
```js
/*eslint no-undef-init: "error"*/
/*eslint-env es6*/

var foo;
let bar;
const baz = undefined;
```

### When Not To Use It
当在一个循环中用 var 声明一个变量的时候，这种情况下给变量赋值为 undefined 与省略初始化的结果不同。比如：

错误 代码示例：
```js
for (i = 0; i < 10; i++) {
    var x = undefined;
    console.log(x);
    x = i;
}
```

在这种情况下，var x 被提升到循环外。
```js
var x;

for (i = 0; i < 10; i++) {
    x = undefined;
    console.log(x);
    x = i;
}
```

如果删除初始化语句，循环语句的行为会改变：
```js
for (i = 0; i < 10; i++) {
    var x;
    console.log(x);
    x = i;
}
```

此代码等价于下面代码：
```js
var x;

for (i = 0; i < 10; i++) {
    console.log(x);
    x = i;
}
```

于在循环语句中使用 var x = undefined 相比，这样产生了一个不同结果 ，因为每次循环后 x 不在赋值为 undefined。

如果你有在循环语句中初始化变量，你应该禁用此规则。

正确 代码示例，因为它在特定的行上被禁用。
```js
/*eslint no-undef-init: "error"*/

for (i = 0; i < 10; i++) {
    var x = undefined; // eslint-disable-line no-undef-init
    console.log(x);
    x = i;
}
```

### Version
该规则在 ESLint 0.0.6 中被引入。
