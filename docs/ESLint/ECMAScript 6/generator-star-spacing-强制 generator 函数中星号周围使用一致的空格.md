## 强制 generator 函数中 * 号周围有空格 (generator-star-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在 ECMAScript 6 中，Generators 是一个新的函数类型，随着时间的推移可以返回多个值。这些特殊的函数是在 function 关键字后放置一个 *。

以下是个 generator 函数的示例：
```js
/*eslint-env es6*/

function* generator() {
    yield "44";
    yield "55";
}
```

这个同样有效：
```js
/*eslint-env es6*/

function *generator() {
    yield "44";
    yield "55";
}
```
这个也是有效的：
```js
/*eslint-env es6*/

function * generator() {
    yield "44";
    yield "55";
}
```

为了保持使用 generators 函数的一致性，该规则对 * 强制设置一个单独的位置。

### Rule Details
该规则旨在约束 generator 函数的 * 周围的空格。

### Options
该规则只有一个可选项，是个对象，有两个键before 和 after对应的值可以为true或false。

before 强制在 * 和 function 关键字之间有空格。如果设置为 true ，要求有空格，否则不允许有空格。在对象文本的缩写方法中，*之前的空格不会被检查，因为它们缺少 function 关键字。

after 强制在 * 和函数名之间有空格 (或匿名 generator 函数的左括号)。如果设置为 true，要求有空格，否则不允许有空格。

默认为 {"before": true, "after": false}。

一个示例配置：

"generator-star-spacing": ["error", {"before": true, "after": false}]
这些选项可缩写为一个字符串关键字：
```js
{"before": true, "after": false} → "before"
{"before": false, "after": true} → "after"
{"before": true, "after": true} → "both"
{"before": false, "after": false} → "neither"
```

一个简写配置示例：
```js
"generator-star-spacing": ["error", "after"]
```

另外，该规则允许通过覆盖每个函数类型进行进一步配置。

named 覆盖命名的函数
anonymous 覆盖匿名函数
method 覆盖类方法或简写属性函数
一个覆盖的配置示例：
```js
"generator-star-spacing": ["error", {
    "before": false,
    "after": true,
    "anonymous": "neither",
    "method": {"before": true, "after": true}
}]
```

在上面的配置示例中，顶层 “before” 和 “after” 选项定义该规则的默认行为，而 “anonymous” 和 “method” 选项覆盖默认行为。覆盖可以是带有 “before” 和 “after” 属性的对象，也可以是上面的简写字符串。

### Examples
```before```
选项 "before" 的 正确 代码示例：
```js
/*eslint generator-star-spacing: ["error", {"before": true, "after": false}]*/
/*eslint-env es6*/

function *generator() {}

var anonymous = function *() {};

var shorthand = { *generator() {} };
```

```after```
选项 "after" 的 正确 代码示例：
```js
/*eslint generator-star-spacing: ["error", {"before": false, "after": true}]*/
/*eslint-env es6*/

function* generator() {}

var anonymous = function* () {};

var shorthand = { * generator() {} };
```

```both```
选项 "both" 的 正确 代码示例：
```js
/*eslint generator-star-spacing: ["error", {"before": true, "after": true}]*/
/*eslint-env es6*/

function * generator() {}

var anonymous = function * () {};

var shorthand = { * generator() {} };
```

```neither```
选项 "neither" 的 正确 代码示例：
```js
/*eslint generator-star-spacing: ["error", {"before": false, "after": false}]*/
/*eslint-env es6*/

function*generator() {}

var anonymous = function*() {};

var shorthand = { *generator() {} };
```

带有覆盖的 错误 代码示例：
```js
/*eslint generator-star-spacing: ["error", {
    "before": false,
    "after": true,
    "anonymous": "neither",
    "method": {"before": true, "after": true}
}]*/
/*eslint-env es6*/

function * generator() {}

var anonymous = function* () {};

var shorthand = { *generator() {} };

class Class { static* method() {} }
```

带有覆盖的 正确 代码示例：
```js
/*eslint generator-star-spacing: ["error", {
    "before": false,
    "after": true,
    "anonymous": "neither",
    "method": {"before": true, "after": true}
}]*/
/*eslint-env es6*/

function* generator() {}

var anonymous = function*() {};

var shorthand = { * generator() {} };

class Class { static * method() {} }
```

### When Not To Use It
如果你的项目不使用 generators 或者你不关心空格的一致性，可以关闭此规则。

### Version
该规则在 ESLint 0.17.0 中被引入。

