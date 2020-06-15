## 强制在花括号中使用一致的空格 (object-curly-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

虽然格式化首选项都非常个人化，大量的风格指南要求或禁止在下列情况下的花括号之间有空格：
```js
// simple object literals
var obj = { foo: "bar" };

// nested object literals
var obj = { foo: { zoo: "bar" } };

// destructuring assignment (EcmaScript 6)
var { x, y } = y;

// import/export declarations (EcmaScript 6)
import { foo } from "bar";
export { foo };
```
### Rule Details
该规则强制在对象字面量、解构赋值 和 import/export 说明符的花括号中使用一致的空格。

### Options
该规则有两个选项，一个是字符串，一个是对象。

字符串选项：

"never" (默认) 不允许花括号中有空格
"always" 要求花括号内有空格 (除了 {})
对象选项：

"arraysInObjects": true 要求以数组元素开始或结尾的对象的花括号中有空格 (当第一个选项为 never 时生效)
"arraysInObjects": false 禁止以数组元素开始或结尾的对象的花括号中有空格 (当第一个选项为 always 时生效)
"objectsInObjects": true 要求以对象元素开始或结尾的对象的花括号中有空格 (当第一个选项为 never 时生效)
"objectsInObjects": false 禁止以对象元素开始或结尾的对象的花括号中有空格 (当第一个选项为 always 时生效)

```never```
默认选项 "never" 的 错误 代码示例：
```js
/*eslint object-curly-spacing: ["error", "never"]*/

var obj = { 'foo': 'bar' };
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux'}, bar};
var {x } = y;
import { foo } from 'bar';
```

默认选项 "never" 的 正确 代码示例：
```js
/*eslint object-curly-spacing: ["error", "never"]*/

var obj = {'foo': 'bar'};
var obj = {'foo': {'bar': 'baz'}, 'qux': 'quxx'};
var obj = {
  'foo': 'bar'
};
var obj = {'foo': 'bar'
};
var obj = {
  'foo':'bar'};
var obj = {};
var {x} = y;
import {foo} from 'bar';
```

```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint object-curly-spacing: ["error", "always"]*/

var obj = {'foo': 'bar'};
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux' }, bar};
var obj = {'foo': 'bar'
};
var obj = {
  'foo':'bar'};
var {x} = y;
import {foo } from 'bar';
```

选项 "always" 的 正确 代码示例：
```js
/*eslint object-curly-spacing: ["error", "always"]*/

var obj = {};
var obj = { 'foo': 'bar' };
var obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' };
var obj = {
  'foo': 'bar'
};
var { x } = y;
import { foo } from 'bar';
```

```arraysInObjects```
选项 "never", { "arraysInObjects": true } 的 正确 代码示例：
```js
/*eslint object-curly-spacing: ["error", "never", { "arraysInObjects": true }]*/

var obj = {"foo": [ 1, 2 ] };
var obj = {"foo": [ "baz", "bar" ] };
```

选项 "always", { "arraysInObjects": false } 的 正确 代码示例：
```js
/*eslint object-curly-spacing: ["error", "always", { "arraysInObjects": false }]*/

var obj = { "foo": [ 1, 2 ]};
var obj = { "foo": [ "baz", "bar" ]};
```

```objectsInObjects```
选项 "never", { "objectsInObjects": true } 的 正确 代码示例：
```js
/*eslint object-curly-spacing: ["error", "never", { "objectsInObjects": true }]*/

var obj = {"foo": {"baz": 1, "bar": 2} };
```

选项 "always", { "objectsInObjects": false } 的 正确 代码示例：
```js
/*eslint object-curly-spacing: ["error", "always", { "objectsInObjects": false }]*/

var obj = { "foo": { "baz": 1, "bar": 2 }};
```

### When Not To Use It
如果你并不关心花括号之间空格的一致性，可以关闭此规则。

### Version
该规则在 ESLint 0.22.0 中被引入。
