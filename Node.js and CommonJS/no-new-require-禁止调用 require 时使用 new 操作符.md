## 不允许 new require (no-new-require)

require 方法被用来引入不同文件中模块，例如：
```js
var appHeader = require('app-header');
```

某些模块返回一个构造函数，可能导致代码如：
```js
var appHeader = new require('app-header');
```

不幸的是，这引入了潜在的混乱，因为作者可能要这样：
```js
var appHeader = new (require('app-header'));
```

处于这个原因，最好禁止使用这种特殊的表达式。

### Rule Details
此规则旨在消除使用 new require 的表达方式。

错误 代码示例：
```js
/*eslint no-new-require: "error"*/

var appHeader = new require('app-header');
```

正确 代码示例：
```js
/*eslint no-new-require: "error"*/

var AppHeader = require('app-header');
var appHeader = new AppHeader();
```

### When Not To Use It
如果你使用一个自定义的 require 方法，而且代码永远不会在项目中使用标准 require (CommonJS、Node.js、AMD)，你可以关闭此规则。

### Version
该规则在 ESLint 0.6.0 被引入。
