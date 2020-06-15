## 禁止定义前使用 (no-use-before-define)

在 ES6 标准之前的 JavaScript 中，某个作用域中变量和函数的声明会被提前到作用域顶部，所以可能存在这种情况：此变量在声明前被使用。这会扰乱读者，部分人认为最好的做法是使用变量之前先声明变量。

在 ES6 中，块级绑定 (let 和 const) 引入 “temporal dead zone”，当企图使用未声明的变量会抛出 ReferenceError。

### Rule Details
当使用一个还未声明的标示符是会报警告。

错误 代码示例：
```js
/*eslint no-use-before-define: "error"*/
/*eslint-env es6*/

alert(a);
var a = 10;

f();
function f() {}

function g() {
    return b;
}
var b = 1;

{
    alert(c);
    let c = 1;
}
```

正确 代码示例：
```js
/*eslint no-use-before-define: "error"*/
/*eslint-env es6*/

var a;
a = 10;
alert(a);

function f() {}
f(1);

var b = 1;
function g() {
    return b;
}

{
    let c;
    c++;
}
```

### Options
```js
{
    "no-use-before-define": ["error", { "functions": true, "classes": true }]
}
```

functions (boolean) - 这个参数表示该规则是否要检测函数的声明。 如果参数是 true，该规则会在引用一个未提前声明的函数时发出警报。 否则，忽略这些引用。因为函数声明作用域会被提升，所以这样做是安全的。 参数默认值是 true。
classes (boolean) - 这个参数表示是否要检测上层作用域中的类声明。 如果参数是 true，该规则会在引用一个未提前声明的类时发出警报。 否则，该规则会忽略对上层作用域中的类声明的引用。 因为类声明作用域不会被提升，所以这样做可能是危险的。 参数默认是 true。
variables (boolean) - 这个参数表示是否要在上层作用域内检测变量声明。 如果参数是 true，该规则会在引用一个未提前声明的变量时发出警报。 否则，该规则会忽略在上层作用域中变量声明的引用，然而仍然会报告对同一作用域中的变量声明的引用。 参数默认是 true。
该规则接受 "nofunc" 字符串作为一个选项。 "nofunc" 和 { "functions": false, "classes": true } 的效果相同。

```functions```
选项{ "functions": false }的 正确 代码示例：
```js
/*eslint no-use-before-define: ["error", { "functions": false }]*/

f();
function f() {}
```

```classes```
选项{ "classes": false }的 错误 代码示例：
```js
/*eslint no-use-before-define: ["error", { "classes": false }]*/
/*eslint-env es6*/

new A();
class A {
}
```

选项{ "classes": false }的 正确 代码示例：
```js
/*eslint no-use-before-define: ["error", { "classes": false }]*/
/*eslint-env es6*/

function foo() {
    return new A();
}

class A {
}
```

```variables```
选项 { "variables": false } 的 错误 代码示例：
```js
/*eslint no-use-before-define: ["error", { "variables": false }]*/

console.log(foo);
var foo = 1;
```

选项 { "variables": false } 的 正确 代码示例：
```js
/*eslint no-use-before-define: ["error", { "variables": false }]*/

function baz() {
    console.log(foo);
}

var foo = 1;
```

### Version
该规则在 ESLint 0.0.9 中被引入。
