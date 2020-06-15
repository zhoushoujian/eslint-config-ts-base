## 禁止 require 调用与普通变量声明混合使用 (no-mixed-requires)

在 Node.js 社区，通常习惯把调用 require 模块的初始化和其它变量声明分开，有时也根据模块类型对它们进行分组。该规则帮助你强制执行这种约定。

### Rule Details
当启用该规则时，每个 var 语句必须满足以下条件：

所有的变量要么全是 require 声明（默认），要么全不是 require 声明
所有的 require 声明必须是同一类型（grouping)
该规则区分六种类型的变量声明：

core: require 核心模块的声明
file: require 文件模块的声明
module: 从node_modules 文件夹 require 一个模块的声明
computed: require 一个不能确定类型的模块的声明 (要么是因为它是推算出来的，要么是因为调用了无参的 require)
uninitialized: 未初始化的声明
other: 其它类型的声明
在本文中，前四个类型属于 require declaration。
```js
var fs = require('fs'),        // "core"     \
    async = require('async'),  // "module"   |- these are "require declaration"s
    foo = require('./foo'),    // "file"     |
    bar = require(getName()),  // "computed" /
    baz = 42,                  // "other"
    bam;                       // "uninitialized"
```

### Options
该规则有一个选项，是个对象，它的两个属性值默认为 false。

使用一个布尔类型的选项 true 配置此规则已被弃用。

默认选项 { "grouping": false, "allowCall": false } 的 错误 代码示例：
```js
/*eslint no-mixed-requires: "error"*/

var fs = require('fs'),
    i = 0;

var async = require('async'),
    debug = require('diagnostics').someFunction('my-module'),
    eslint = require('eslint');
```

默认选项 { "grouping": false, "allowCall": false } 的 正确 代码示例：
```js
/*eslint no-mixed-requires: "error"*/

// only require declarations (grouping off)
var eventEmitter = require('events').EventEmitter,
    myUtils = require('./utils'),
    util = require('util'),
    bar = require(getBarModuleName());

// only non-require declarations
var foo = 42,
    bar = 'baz';

// always valid regardless of grouping because all declarations are of the same type
var foo = require('foo' + VERSION),
    bar = require(getBarModuleName()),
    baz = require();
```

```grouping```
选项 { "grouping": true } 的 错误 代码示例：
```js
/*eslint no-mixed-requires: ["error", { "grouping": true }]*/

// invalid because of mixed types "core" and "module"
var fs = require('fs'),
    async = require('async');

// invalid because of mixed types "file" and "unknown"
var foo = require('foo'),
    bar = require(getBarModuleName());
```

```allowCall```
选项 { "allowCall": true } 的 错误 代码示例：
```js
/*eslint no-mixed-requires: ["error", { "allowCall": true }]*/

var async = require('async'),
    debug = require('diagnostics').someFunction('my-module'), /* allowCall doesn't allow calling any function */
    eslint = require('eslint');
```

选项 { "allowCall": true } 的 正确 代码示例：
```js
/*eslint no-mixed-requires: ["error", { "allowCall": true }]*/

var async = require('async'),
    debug = require('diagnostics')('my-module'),
    eslint = require('eslint');
```

### Known Limitations
该规则的实现不考虑本地名为 require 的函数可能会遮蔽 Node.js 的全局的 require。
在内部，核心模块列表是通过 require("repl")._builtinLibs检索的。如果你在 ESLint 和你的应用中使用不同的 Node.js 版本，每个版本的核心模块列表可能会不一样。上面提到的 _builtinLibs 在 0.8 版本中有效，在更早的版本中，将模块名一一列出作为一种回退机制。如果你的 Node.js 版本低于 0.6，则那个模块列表可能是不准确的。

### When Not To Use It
如果你使用了类似 UMD 的模式，其 require 的模块在变量声明时不会被加载，该规则明显对你没什么用。

### Version
该规则在 ESLint 0.0.9 中被引入。

