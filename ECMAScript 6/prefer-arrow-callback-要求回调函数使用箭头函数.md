## 要求使用箭头函数作为回调 (prefer-arrow-callback)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

对于回调函数和函数参数，箭头函数是一个很有吸引力的替代。

例如，箭头函数自动绑定到其周围作用域/上下文。这为 ES6 之前的标准的显式绑定函数表达式提供了一个替代，来实现类似的行为。

另外，箭头函数：

简洁，易推理。
无论何时何地调用它，都是作用域绑定的。

### Rule Details
该规则定位用于回调函数或函数参数的函数表达式。任何可以被不改变结果的箭头函数替代的函数表达式都将报出错误。

下面的示例将被标记为：
```js
/* eslint prefer-arrow-callback: "error" */

foo(function(a) { return a; }); // ERROR
// prefer: foo(a => a)

foo(function() { return this.a; }.bind(this)); // ERROR
// prefer: foo(() => this.a)
```

如果一个箭头函数不能产生相同的结果，将被忽略。

下面的示例不会被标记：
```js
/* eslint prefer-arrow-callback: "error" */
/* eslint-env es6 */

// arrow function callback
foo(a => a); // OK

// generator as callback
foo(function*() { yield; }); // OK

// function expression not used as callback or function argument
var foo = function foo(a) { return a; }; // OK

// unbound function expression callback
foo(function() { return this.a; }); // OK

// recursive named function callback
foo(function bar(n) { return n && n + bar(n - 1); }); // OK
```

### Options
通过一个对象选项来进一步控制该规则的行为。

默认：{ allowNamedFunctions: false, allowUnboundThis: true }

```allowNamedFunctions```
默认 { "allowNamedFunctions": false }，该 boolean 选项禁止使用命名的函数作为回调函数或函数参数。

将此值改为 true，将反转此选项的行为，允许使用命名的函数作为回调函数或函数参数。

{ "allowNamedFunctions": true } 将不会标记以下示例：
```js
/* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */

foo(function bar() {});
```

```allowUnboundThis```
默认 { "allowUnboundThis": true }，该 boolean 选项允许包含 this 的函数表达式被用作回调函数，只要问题函数没有被显式绑定。

当设置为 false 时，该选项完全禁止函数表达式作为回调函数或函数参数，无一例外。

{ "allowUnboundThis": false } 将标记以下示例：
```js
/* eslint prefer-arrow-callback: [ "error", { "allowUnboundThis": false } ] */
/* eslint-env es6 */

foo(function() { this.a; });

foo(function() { (() => this); });

someArray.map(function(itm) { return this.doSomething(itm); }, someObject);
```

### When Not To Use It
在未采用 ES6 语言特性的环境(ES3/5)中。
在允许使用函数表达式描述回调函数或函数参数的 ES6+ 环境中。

### Version
该规则在 ESLint 1.2.0 中被引入。

