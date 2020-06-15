### 禁止标识符中有悬空下划线 (no-underscore-dangle)

在 JavaScript 中，就标识符命名规范而言，悬空下划线可能是最两极分化的了。悬空下划线是在标识符的开头或末尾的下划线，例如:
```js
var _foo;
```
事实上，在 JavaScript 中有很长一段历史使用悬空下划线来表示对象中的“私有”成员(虽然 JavaScript 并没有正真的私有成员，这个约定起警示作用)。这始于 SpiderMonkey 添加的非标准方法，比如 __defineGetter__()。下划线的意图是让它很明显的看出这个方法在某种程度上很特别。从那时起，使用单个下划线作为前缀来表示对象的“私有”成员变得流行起来。

是否选择允许悬空下划线出现在标识符中纯粹只是个约定，不会影响性能，可读性或复杂性。它纯粹是个人偏好。

### Rule Details
该规则旨在消除标识符中悬空下划线的使用。

错误 代码示例：
```js
/*eslint no-underscore-dangle: "error"*/

var foo_;
var __proto__ = {};
foo._bar();
```

正确 代码示例：
```js
/*eslint no-underscore-dangle: "error"*/

var _ = require('underscore');
var obj = _.contains(items, item);
obj.__proto__ = {};
var file = __filename;
```

### Options
该规则有一个对象选项：

"allow" 允许指定标识符使用悬空下划线
"allowAfterThis": false (默认) 禁止在 this 对象的成员变量上使用悬空下划线
"allowAfterSuper": false (默认) 禁止在 super 对象的成员变量上使用悬空下划线
"enforceInMethodNames": false (默认) 允许在方法名中使用悬空下划线
```allow```
选项 { "allow": ["foo_", "_bar"] } 的 正确 代码示例：
```js
/*eslint no-underscore-dangle: ["error", { "allow": ["foo_", "_bar"] }]*/

var foo_;
foo._bar();
allowAfterThis
```

选项 { "allowAfterThis": true } 的 正确 代码示例：
```js
/*eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

var a = this.foo_;
this._bar();
```

```allowAfterSuper```
选项 { "allowAfterSuper": true } 的 正确 代码示例：
```js
/*eslint no-underscore-dangle: ["error", { "allowAfterSuper": true }]*/

var a = super.foo_;
super._bar();
```

```enforceInMethodNames```
选项 { "enforceInMethodNames": true } 的 错误 代码示例：
```js
/*eslint no-underscore-dangle: ["error", { "enforceInMethodNames": true }]*/

class Foo {
  _bar() {}
}

class Foo {
  bar_() {}
}

const o = {
  _bar() {}
};

const o = {
  bar_() = {}
};
```

### When Not To Use It
如果你允许标识符中有悬空下划线，你可以关闭此规则。

### Version
该规则在 ESLint 0.0.9 中被引入。
