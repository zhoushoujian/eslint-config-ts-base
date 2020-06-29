## 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字 (no-useless-rename)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

ES2015允许在 import ，export 和结构赋值时对引用进行重命名。这给了开发者简洁的语法来执行这些操作同时对引用进行重命名
```js
import { foo as bar } from "baz";
export { foo as bar };
let { foo: bar } = baz;
```
有了这个语法，引用有可能被重命名成相同的名字。因为这和没有重命名是等价的，因此这种操作完全冗余。例如：
```js
import { foo as foo } from "bar";
export { foo as foo };
let { foo: foo } = bar;
```

等价于：
```js
import { foo } from "bar";
export { foo };
let { foo } = bar;
```

### Rule Details
这条规则进行在 import 和 export 和解构赋值时将引用重命名为相同的名字

查看：

object-shorthand 可以对对象的属性强制执行此行为。
Options
这条规则支持用下面的选项进行更细粒度的配置：

ignoreImport: 当设置为 true，这条规则不会检查 imports

ignoreExport: 当设置为 true，这条规则不会检查 exports

ignoreDestructuring: 当设置为 true, 这条规则不会检查解构赋值

这些选项默认都被设置为 false：
```js
"no-useless-rename": ["error", {
    "ignoreDestructuring": false,
    "ignoreImport": false,
    "ignoreExport": false
}]
```

默认配置时 错误 代码示例：
```js
/*eslint no-useless-rename: "error"*/

import { foo as foo } from "bar";
export { foo as foo };
export { foo as foo } from "bar";
let { foo: foo } = bar;
let { 'foo': foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
```

默认配置时 正确 代码示例：
```js
/*eslint no-useless-rename: "error"*/

import * as foo from "foo";
import { foo } from "bar";
import { foo as bar } from "baz";

export { foo };
export { foo as bar };
export { foo as bar } from "foo";

let { foo } = bar;
let { foo: bar } = baz;
let { [foo]: foo } = bar;

function foo({ bar }) {}
function foo({ bar: baz }) {}

({ foo }) => {}
({ foo: bar }) => {}
```

选项 { ignoreImport: true } 的 正确 代码示例：
```js
/*eslint no-useless-rename: ["error", { ignoreImport: true }]*/

import { foo as foo } from "bar";
```

选项 { ignoreExport: true } 时 正确 代码示例：
```js
/*eslint no-useless-rename: ["error", { ignoreExport: true }]*/

export { foo as foo };
export { foo as foo } from "bar";
```

选项 { ignoreDestructuring: true } 时 正确 代码示例：
```js
/*eslint no-useless-rename: ["error", { ignoreDestructuring: true }]*/

let { foo: foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
```

### When Not To Use It
如果你不关心在 import , export 和解构赋值时冗余的重命名，关闭此规则即可。

### Version
该规则在 ESLint 2.11.0 中被引入。

