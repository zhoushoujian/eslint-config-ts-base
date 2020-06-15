## 禁用特定的 import (no-restricted-imports)

import 是 ES6/ES2015 的一个标准，用来在当前模块引入其他模块。在 CommonJS 中是通过调用 require() 来实现的，使得该规则大致相当于 CommonJS 对应的 no-restricted-modules 规则。

为什么要限制 import ?

某些 import 在特定的环境下毫无意义。比如，Node.js 中的 fs 模块在不包含文件系统的环境下，毫无意义。
有些模块提供相似或相同的功能，比如 lodash 和 underscore。你的项目可能已经模块化了。你想确保其他的替代方案不会被使用，因为会造成不必要的项目体积膨胀，也会使明明一个可以满足需求，却要维护两个依赖，造成维护成本过高。

### Rule Details
该规则允许你指定你不想在你的应用中使用的 import。

### Options
像这样指定受限制的 import：
```js
"no-restricted-imports": ["error", "import1", "import2"]
```
或像这样：
```js
"no-restricted-imports": ["error", { "paths": ["import1", "import2"] }]
```
当使用对象格式时，还可以指定一组 gitignore 风格的模式：
```js
"no-restricted-imports": ["error", {
    "paths": ["import1", "import2"],
    "patterns": ["import1/private/*", "import2/*", "!import2/good"]
}]
```
你也可以为你想要限制的路径指定一个自定义消息：
```js
"no-restricted-imports": ["error", [{
  "name": "import-foo",
  "message": "Please use import-bar instead."
}]]
"no-restricted-imports": ["error", {
  "paths": [{
    "name": "import-foo",
    "message": "Please use import-bar instead."
  }]
}]
```
or like this if you need to restrict only certain imports from a module:
```js
"no-restricted-imports": ["error", {
  "paths": [{
    "name": "import-foo",
    "importNames": ["Bar"],
    "message": "Please use Bar from /import-bar/baz/ instead."
  }]
}]
```

The custom message will be appended to the default error message. Please note that you may not specify custom error messages for restricted patterns as a particular import may match more than one pattern.

To restrict the use of all Node.js core imports (via https://github.com/nodejs/node/tree/master/lib):
```js
    "no-restricted-imports": ["error",
         "assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","freelist","fs","http","https","module","net","os","path","punycode","querystring","readline","repl","smalloc","stream","string_decoder","sys","timers","tls","tracing","tty","url","util","vm","zlib"
    ],
```

### Examples
Examples of incorrect code for this rule:
```js
/*eslint no-restricted-imports: ["error", "fs"]*/

import fs from 'fs';
/*eslint no-restricted-imports: ["error", "fs"]*/

export { fs } from 'fs';
/*eslint no-restricted-imports: ["error", "fs"]*/

export * from 'fs';
/*eslint no-restricted-imports: ["error", { "paths": ["cluster"] }]*/

import cluster from 'cluster';
/*eslint no-restricted-imports: ["error", { "patterns": ["lodash/*"] }]*/

import pick from 'lodash/pick';
/*eslint no-restricted-imports: ["error", { paths: [{
    name: "foo",
    importNames: ["default"],
    message: "Please use the default import from '/bar/baz/' instead."
}]}]*/

import DisallowedObject from "foo";
/*eslint no-restricted-imports: ["error", { paths: [{
    name: "foo",
    importNames: ["DisallowedObject"],
    message: "Please import 'DisallowedObject' from '/bar/baz/' instead."
}]}]*/

import { DisallowedObject as AllowedObject } from "foo";
/*eslint no-restricted-imports: ["error", { paths: [{
    name: "foo",
    importNames: ["DisallowedObject"],
    message: "Please import 'DisallowedObject' from '/bar/baz/' instead."
}]}]*/

import * as Foo from "foo";
```

Examples of correct code for this rule:
```js
/*eslint no-restricted-imports: ["error", "fs"]*/

import crypto from 'crypto';
export { foo } from "bar";
/*eslint no-restricted-imports: ["error", { "paths": ["fs"], "patterns": ["eslint/*"] }]*/

import crypto from 'crypto';
import eslint from 'eslint';
export * from "path";
/*eslint no-restricted-imports: ["error", { paths: [{ name: "foo", importNames: ["DisallowedObject"] }] }]*/

import DisallowedObject from "foo"
/*eslint no-restricted-imports: ["error", { paths: [{
    name: "foo",
    importNames: ["DisallowedObject"],
    message: "Please import 'DisallowedObject' from '/bar/baz/' instead."
}]}]*/

import { AllowedObject as DisallowedObject } from "foo";
```

### When Not To Use It
Don’t use this rule or don’t include a module in the list for this rule if you want to be able to import a module in your project without an ESLint error or warning.

### Version
This rule was introduced in ESLint 2.0.0-alpha-1.

