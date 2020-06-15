## 禁止或强制在括号内使用空格 (array-bracket-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些代码风格指南要求或禁止在数组的方括号内留有空格。该规则适用于数组和数组的解构赋值 (EcmaScript 6)。
```js
/*eslint-env es6*/

var arr = [ 'foo', 'bar' ];
var [ x, y ] = z;

var arr = ['foo', 'bar'];
var [x,y] = z;
```

### Rule Details
该规则强制数组括号内的空格的一致性。

### Options
该规则有一个字符串选项：

"never" (默认) 禁止在数组括号内出现空格
"always" 要求在数组括号内使用一个或多个空格、或折行
对于"never"选项，可以有例外情况，用一个对象表示：

"singleValue": true 要求在只包含一个元素的数组的括号内使用一个或多个空格、或折行
"objectsInArrays": true 要求在数组的方括号和数组内的对象元素的大括号之间，即[ { 或 } ]，使用一个或多个空格、或折行
"arraysInArrays": true 要求在数组的方括号和数组内的数组元素的方括号之间，即[ [ 或 ] ]，使用一个或多个空格、或折行
对于"always"选项，可以有例外情况，用一个对象表示：

"singleValue": false 禁止在只包含一个元素的数组的括号内使用空格
"objectsInArrays": false 禁止在数组的方括号和数组内的对象元素的大括号之间，即 [{ 或 }]出现空格
"arraysInArrays": false 禁止在数组的方括号和数组内的数组元素的方括号之间，即 [[ 或 ]]出现空格
该规则有两个内置的例外情况：

"never" (和 "always" 选项的例外情况) 允许在数组内出现折行，因为这是一种常见的模式
"always" 在空数组中[]不要求出现空格或折行
never
默认选项"never"的 错误 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "never"]*/
/*eslint-env es6*/

var arr = [ 'foo', 'bar' ];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar'];
var arr = [[ 'foo' ], 'bar'];
var arr = [ 'foo',
  'bar'
];
var [ x, y ] = z;
var [ x,y ] = z;
var [ x, ...y ] = z;
var [ ,,x, ] = z;
```

默认选项"never"的 正确代码示例：
```js
/*eslint array-bracket-spacing: ["error", "never"]*/
/*eslint-env es6*/

var arr = [];
var arr = ['foo', 'bar', 'baz'];
var arr = [['foo'], 'bar', 'baz'];
var arr = [
  'foo',
  'bar',
  'baz'
];
var arr = ['foo',
  'bar'
];
var arr = [
  'foo',
  'bar'];

var [x, y] = z;
var [x,y] = z;
var [x, ...y] = z;
var [,,x,] = z;
```

```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "always"]*/
/*eslint-env es6*/

var arr = ['foo', 'bar'];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar' ];
var arr = ['foo',
  'bar'
];
var arr = [
  'foo',
  'bar'];

var [x, y] = z;
var [x,y] = z;
var [x, ...y] = z;
var [,,x,] = z;
```

选项 "always" 的 正确 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "always"]*/
/*eslint-env es6*/

var arr = [];
var arr = [ 'foo', 'bar', 'baz' ];
var arr = [ [ 'foo' ], 'bar', 'baz' ];
var arr = [ 'foo',
  'bar'
];
var arr = [
  'foo',
  'bar' ];
var arr = [
  'foo',
  'bar',
  'baz'
];

var [ x, y ] = z;
var [ x,y ] = z;
var [ x, ...y ] = z;
var [ ,,x, ] = z;
```

```singleValue```
选项 "always", { "singleValue": false } 的 错误 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "always", { "singleValue": false }]*/

var foo = [ 'foo' ];
var foo = [ 'foo'];
var foo = ['foo' ];
var foo = [ 1 ];
var foo = [ 1];
var foo = [1 ];
var foo = [ [ 1, 2 ] ];
var foo = [ { 'foo': 'bar' } ];
```

选项 "always", { "singleValue": false } 的 正确 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "always", { "singleValue": false }]*/

var foo = ['foo'];
var foo = [1];
var foo = [[ 1, 1 ]];
var foo = [{ 'foo': 'bar' }];
```

```objectsInArrays```
选项 "always", { "objectsInArrays": false } 的 错误 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "always", { "objectsInArrays": false }]*/

var arr = [ { 'foo': 'bar' } ];
var arr = [ {
  'foo': 'bar'
} ]
```

选项 "always", { "objectsInArrays": false } 的 正确 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "always", { "objectsInArrays": false }]*/

var arr = [{ 'foo': 'bar' }];
var arr = [{
  'foo': 'bar'
}];
```

```arraysInArrays```
选项 "always", { "arraysInArrays": false } 的 错误 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "always", { "arraysInArrays": false }]*/

var arr = [ [ 1, 2 ], 2, 3, 4 ];
var arr = [ [ 1, 2 ], 2, [ 3, 4 ] ];
```

选项 "always", { "arraysInArrays": false } 的 正确 代码示例：
```js
/*eslint array-bracket-spacing: ["error", "always", { "arraysInArrays": false }]*/

var arr = [[ 1, 2 ], 2, 3, 4 ];
var arr = [[ 1, 2 ], 2, [ 3, 4 ]];
```

### When Not To Use It
如果你并不关心数组括号内间距的一致性，可以关闭此规则。

### Version
该规则在 ESLint 0.24.0 被引入。
