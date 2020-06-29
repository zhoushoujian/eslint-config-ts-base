## 禁止或强制圆括号内的空格 (space-in-parens)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些风格指南禁止或强制圆括号内有空格：
```js
foo( 'bar' );
var x = ( 1 + 2 ) * 3;

foo('bar');
var x = (1 + 2) * 3;
```

### Rule Details
该规则将通过禁止或要求 ( 右边或 ) 左边有一个或多个空格来强制圆括号内空格的一致性。在任一情况下，仍将允许 ()。

### Options
该规则有两个选项：

"never" (默认) 强制圆括号内没有空格
"always" 强制圆括号内有一个空格
根据您的编码约定，您可以在您的配置中选择使用任一选项：

"space-in-parens": ["error", "always"]
“never”
选项 "never" 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "never"]*/

foo( 'bar');
foo('bar' );
foo( 'bar' );

var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );
```

选项 "never" 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "never"]*/

foo();

foo('bar');

var foo = (1 + 2) * 3;
(function () { return 'bar'; }());
```

```“always”```
选项 "always" 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "always"]*/

foo( 'bar');
foo('bar' );
foo('bar');

var foo = (1 + 2) * 3;
(function () { return 'bar'; }());
```

选项 "always" 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "always"]*/

foo();

foo( 'bar' );

var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );
```

```Exceptions```
一个对象文本可以作为规则数组的第三个元素来制定例外情况，使用 "exceptions" 做主键，对应的值是一个数组。这些例外作用在第一个选项的基础上。如果 "always" 设置为强制使用空格，那么任何例外情况将 不允许使用空格。同样的，如果 "never"设置为禁止使用空格那么，任何例外情况将强制使用空格。

以下例外情况是有效的：["{}", "[]", "()", "empty"].

选项 "never", { "exceptions": ["{}"] } 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["{}"] }]*/

foo({bar: 'baz'});
foo(1, {bar: 'baz'});
```

选项 "never", { "exceptions": ["{}"] } 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["{}"] }]*/

foo( {bar: 'baz'} );
foo(1, {bar: 'baz'} );
```

选项 "always", { "exceptions": ["{}"] } 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["{}"] }]*/

foo( {bar: 'baz'} );
foo( 1, {bar: 'baz'} );
```

选项 "always", { "exceptions": ["{}"] } 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["{}"] }]*/

foo({bar: 'baz'});
foo( 1, {bar: 'baz'});
```

选项 "never", { "exceptions": ["[]"] } 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["[]"] }]*/

foo([bar, baz]);
foo([bar, baz], 1);
```js

选项 "never", { "exceptions": ["[]"] } 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["[]"] }]*/

foo( [bar, baz] );
foo( [bar, baz], 1);
```

选项 "always", { "exceptions": ["[]"] } 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["[]"] }]*/

foo( [bar, baz] );
foo( [bar, baz], 1 );
```

选项 "always", { "exceptions": ["[]"] } 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["[]"] }]*/

foo([bar, baz]);
foo([bar, baz], 1 );
```

选项 "never", { "exceptions": ["()"] }] 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["()"] }]*/

foo((1 + 2));
foo((1 + 2), 1);
```

选项 "never", { "exceptions": ["()"] }] 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["()"] }]*/

foo( (1 + 2) );
foo( (1 + 2), 1);
```

选项 "always", { "exceptions": ["()"] }] 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["()"] }]*/

foo( ( 1 + 2 ) );
foo( ( 1 + 2 ), 1 );
```

选项 "always", { "exceptions": ["()"] }] 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["()"] }]*/

foo(( 1 + 2 ));
foo(( 1 + 2 ), 1 );
```

"empty" 例外关注空括号，与其他例外作用一样，与第一个选项相反。

选项 "never", { "exceptions": ["empty"] }] 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["empty"] }]*/

foo();
```

选项 "never", { "exceptions": ["empty"] }] 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "never", { "exceptions": ["empty"] }]*/

foo( );
```

选项 "always", { "exceptions": ["empty"] }] 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["empty"] }]*/

foo( );
```

选项 "always", { "exceptions": ["empty"] }] 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["empty"] }]*/

foo();
```

你可以在 "exceptions" 数组中包含多个项。

选项 "always", { "exceptions": ["{}", "[]"] }] 的 错误 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["{}", "[]"] }]*/

bar( {bar:'baz'} );
baz( 1, [1,2] );
foo( {bar: 'baz'}, [1, 2] );
```

选项 "always", { "exceptions": ["{}", "[]"] }] 的 正确 代码示例：
```js
/*eslint space-in-parens: ["error", "always", { "exceptions": ["{}", "[]"] }]*/

bar({bar:'baz'});
baz( 1, [1,2]);
foo({bar: 'baz'}, [1, 2]);
```

### When Not To Use It
如果你不关心圆括号直接空格的一致性，你可以关闭此规则。

### Version
该规则在 ESLint 0.8.0 中被引入。
