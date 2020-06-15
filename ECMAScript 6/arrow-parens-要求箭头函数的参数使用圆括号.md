## 要求箭头函数的参数使用圆括号 (arrow-parens)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

箭头函数体只有一个参数时，可以省略圆括号。其它任何情况，参数都应被圆括号括起来。该规则强制箭头函数中圆括号的使用的一致性。

### Rule Details
该规则强制箭头函数的参数使用圆括号括起来，不论参数数量如何。例如：
```js
/*eslint-env es6*/

// Bad
a => {}

// Good
(a) => {}
```

这种风格将帮助你找到被错误地包含到条件语句中的箭头函数(=>)，其本意是想使用比较语句的，比如>=
```js
/*eslint-env es6*/

// Bad
if (a => 2) {
}

// Good
if (a >= 2) {
}
```

该规则可以配置在不需要使用圆括号时，阻止圆括号的使用。
```js
/*eslint-env es6*/

// Bad
(a) => {}

// Good
a => {}
```

### Options
该规则有一个字符串选项和一个对象选项。

字符串选项：

"always" (默认) 要求在所有情况下使用圆括号将参数括起来。
"as-needed" 在可以省略括号的地方强制不使用括号
"as-needed" 选项的对象属性：

"requireForBlockBody": true 修改 as-needed 规则以便如果函数体在一个指令块中（被花括号括起来）要求使用圆括号把参数括起来。
```always```
默认选项 "always" 的 错误 代码示例：
```js
/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/

a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => a);
a(foo => { if (true) {} });
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/

() => {};
(a) => {};
(a) => a;
(a) => {'\n'}
a.then((foo) => {});
a.then((foo) => { if (true) {} });
```

If Statements
该选项的一个好处是，它阻止了在条件语句中不正确地使用箭头函数。
```js
/*eslint-env es6*/

var a = 1;
var b = 2;
// ...
if (a => b) {
 console.log('bigger');
} else {
 console.log('smaller');
}
// outputs 'bigger', not smaller as expected
```

if语句的内容是个箭头函数，不是比较语句。

如果需要使用箭头函数，它需要被圆括号括起来以消除歧义。
```js
/*eslint-env es6*/

var a = 1;
var b = 0;
// ...
if ((a) => b) {
 console.log('truthy value returned');
} else {
 console.log('falsey value returned');
}
// outputs 'truthy value returned'
```

下面是另一个示例：
```js
/*eslint-env es6*/

var a = 1, b = 2, c = 3, d = 4;
var f = a => b ? c: d;
// f = ?
```

f 是个箭头函数，a 是其参数，返回的结果是 b ? c: d。

应该被重写为：
```js
/*eslint-env es6*/

var a = 1, b = 2, c = 3, d = 4;
var f = (a) => b ? c: d;
```

```as-needed```
选项 "as-needed" 的 错误 代码示例：
```js
/*eslint arrow-parens: ["error", "as-needed"]*/
/*eslint-env es6*/

(a) => {};
(a) => a;
(a) => {'\n'};
a.then((foo) => {});
a.then((foo) => a);
a((foo) => { if (true) {} });
```

选项 "as-needed" 的 正确 代码示例：
```js
/*eslint arrow-parens: ["error", "as-needed"]*/
/*eslint-env es6*/

() => {};
a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => { if (true) {} });
(a, b, c) => a;
(a = 10) => a;
([a, b]) => a;
({a, b}) => a;
```

```requireForBlockBody```
选项 { "requireForBlockBody": true } 的 错误 代码示例：
```js
/*eslint arrow-parens: [2, "as-needed", { "requireForBlockBody": true }]*/
/*eslint-env es6*/

(a) => a;
a => {};
a => {'\n'};
a.map((x) => x * x);
a.map(x => {
  return x * x;
});
a.then(foo => {});
```

选项 { "requireForBlockBody": true } 的 正确 代码示例：
```js
/*eslint arrow-parens: [2, "as-needed", { "requireForBlockBody": true }]*/
/*eslint-env es6*/

(a) => {};
(a) => {'\n'};
a => ({});
() => {};
a => a;
a.then((foo) => {});
a.then((foo) => { if (true) {} });
a((foo) => { if (true) {} });
(a, b, c) => a;
(a = 10) => a;
([a, b]) => a;
({a, b}) => a;
```

### Version
该规则在 ESLint 1.0.0-rc-1 中被引入。
