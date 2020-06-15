## 禁止 Node.js 模块 (no-restricted-modules)

Node.js 中的模块是一个在 JavaScript 文件中组织的简单或复杂的功能，可以在 Node.js 中复用的应用。Node.js/CommonJS 中的关键字 require 用来导入模块到应用中。这样，你就可以有动态加载，其中加载的模块名称不是预定义的/静态的，或者只有在真正需要的情况下才有条件地加载模块。

为什么想要限制一个模块？

如果你想限制开发人员可以使用的方法，禁用特定的 Node.js 模块的使用可能非常有用。例如，如果你想禁止文件系统访问，你可以阻塞 fs 模块的使用。

### Rule Details
这个规则允许你指定在应用程序中不希望使用的模块。

### Options
该规则有一个或多个字符串作为选项：受限制的模块名称。
```js
"no-restricted-modules": ["error", "foo-module", "bar-module"]
```
它还可以有一个对象，带有 paths 和 gitignore 风格的 patterns 字符串列表。
```js
"no-restricted-modules": ["error", { "paths": ["foo-module", "bar-module"] }]
"no-restricted-modules": ["error", {
    "paths": ["foo-module", "bar-module"],
    "patterns": ["foo-module/private/*", "bar-module/*","!baz-module/good"]
}]
```

你还可以为您想要限制的路径指定一个自定义消息:
```js
"no-restricted-modules": ["error", {
  "name": "foo-module",
  "message": "Please use bar-module instead."
  }
]
```
或像这样：
```js
"no-restricted-modules": ["error",{
"paths":[{
  "name": "foo-module",
  "message": "Please use bar-module instead."
  }]
}]
```
自定义消息将附加到默认的错误消息。请注意，你可能没有为受限模式指定自定义错误消息，因为特定模块可能匹配多个模式。

限制所有 Node.js 核心模块(通过 https://github.com/nodejs/node/tree/master/lib) 的使用：
```js
{
    "no-restricted-modules": ["error",
        "assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","freelist","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","smalloc","stream","string_decoder","sys","timers","tls","tracing","tty","url","util","vm","zlib"
    ]
}
```
Examples
限制 "fs", "cluster", "lodash" 模块的 错误 代码示例：
```js
/*eslint no-restricted-modules: ["error", "fs", "cluster"]*/

var fs = require('fs');
var cluster = require('cluster');
/*eslint no-restricted-modules: ["error", {"paths": ["cluster"] }]*/

var cluster = require('cluster');
/*eslint no-restricted-modules: ["error", { "patterns": ["lodash/*"] }]*/

var pick = require('lodash/pick');
```

限制 "fs", "cluster", "lodash" 模块的 正确 代码示例：
```js
/*eslint no-restricted-modules: ["error", "fs", "cluster"]*/

var crypto = require('crypto');
/*eslint no-restricted-modules: ["error", {
    "paths": ["fs", "cluster"],
    "patterns": ["lodash/*", "!lodash/pick"]
}]*/

var crypto = require('crypto');
var pick = require('lodash/pick');
```

### Version
该规则在 ESLint 0.6.0 中被引入。
