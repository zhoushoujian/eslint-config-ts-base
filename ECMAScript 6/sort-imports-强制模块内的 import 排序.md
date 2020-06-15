## import 排序 (sort-imports)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

import 语句用来引入外部模块输出的成员 (函数、对象或原语)。使用一个特定的成员的语法：
```js
// single - Import single member.
import myMember from "my-module.js";

// multiple - Import multiple members.
import {foo, bar} from "my-module.js";

// all - Import all members, where myModule contains all the exported bindings.
import * as myModule from "my-module.js";
```

import 语句也可以引入不经输出绑定的模块。用于模块不作任何输入，就可运行或改变全局上下文对象。
```js
// none - Import module without exported bindings.
import "my-module.js"
```
当什么多个 import ，一个排好序的 import 声明列表让开发者更容易阅读代码和找到必要的 import。该规则纯粹是一种风格。

### Rule Details
该规则检查所有的 import 声明，验证所有的 import 都是首先按照使用的成员语法排序，其次是按照第一个成员或别名的字母顺序排序。

命令行中的 --fix 选项可以自动修复一些该规则报告的问题：在同一行的多个元素会自动被排序（如， import { b, a } from 'foo.js' 会更正为 import { a, b } from 'foo.js'），但跨行的情况下不会重新排序。

### Options
该规则有一个对象选项：

ignoreCase (默认：false)
ignoreDeclarationSort (默认: false)
ignoreMemberSort (默认：false)
memberSyntaxSortOrder (默认：["none", "all", "multiple", "single"])；洗个选项都必须在数组中，但你可以改变它们的顺序：
none = import 没有输出绑定的模块。
all = import 所有经输出绑定的成员。
multiple = import 多个成员。
single = import 单个成员。
```默认选项设置：```
```js
{
    "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }]
}
```

### Examples
Default settings
默认选项 正确 代码示例：
```js
/*eslint sort-imports: "error"*/
import 'module-without-export.js';
import * as bar from 'bar.js';
import * as foo from 'foo.js';
import * as bar from 'bar.js';
import {alpha, beta} from 'alpha.js';
import {delta, gamma} from 'delta.js';
import a from 'baz.js';
import b from 'qux.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import b from 'bar.js';
import c from 'baz.js';

/*eslint sort-imports: "error"*/
import 'foo.js'
import * as bar from 'bar.js';
import {a, b} from 'baz.js';
import c from 'qux.js';

/*eslint sort-imports: "error"*/
import {a, b, c} from 'foo.js'
```

默认选项 错误 代码示例：
```js
/*eslint sort-imports: "error"*/
import b from 'foo.js';
import a from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import A from 'bar.js';

/*eslint sort-imports: "error"*/
import {b, c} from 'foo.js';
import {a, b} from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import {b, c} from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import * as b from 'bar.js';

/*eslint sort-imports: "error"*/
import {b, a, c} from 'foo.js'
```

```ignoreCase```
当为 true 时，该规则忽略 import 语句本地名称的大小写。

选项 { "ignoreCase": true } 的 错误 代码示例：
```js
/*eslint sort-imports: ["error", { "ignoreCase": true }]*/

import B from 'foo.js';
import a from 'bar.js';
```

选项 { "ignoreCase": true } 的 正确 代码示例：
```js
/*eslint sort-imports: ["error", { "ignoreCase": true }]*/

import a from 'foo.js';
import B from 'bar.js';
import c from 'baz.js';
```
默认为 false。

```ignoreDeclarationSort```
忽略 import 声明语句的排序。

默认选项 { "ignoreDeclarationSort": false } 的 错误 代码示例：
```js
/*eslint sort-imports: ["error", { "ignoreDeclarationSort": false }]*/
import b from 'foo.js'
import a from 'bar.js'
```

选项 { "ignoreDeclarationSort": true } 的 正确 代码示例：
```js
/*eslint sort-imports: ["error", { "ignoreDeclarationSort": true }]*/
import a from 'foo.js'
import b from 'bar.js'
/*eslint sort-imports: ["error", { "ignoreDeclarationSort": true }]*/
import b from 'foo.js'
import a from 'bar.js'
```
默认为 false。

```ignoreMemberSort```
忽略有多个成员的 import 声明的排序。

默认选项 { "ignoreMemberSort": false } 的 错误 代码示例：
```js
/*eslint sort-imports: ["error", { "ignoreMemberSort": false }]*/
import {b, a, c} from 'foo.js'
```

选项 { "ignoreMemberSort": true } 的 正确 代码示例：
```js
/*eslint sort-imports: ["error", { "ignoreMemberSort": true }]*/
import {b, a, c} from 'foo.js'
```
默认为 false。

```memberSyntaxSortOrder```
有四种不同的风格，默认的成员语法排列顺序是：

none - import 没有输出绑定的模块。
all - import 所有经输出绑定的成员。
multiple - import 多个成员。
single - import 单个成员。
所有四个选项必须指定在数组中，但是你可以自定义它们的顺序。

默认选项 { "memberSyntaxSortOrder": ["none", "all", "multiple", "single"] } 的 错误 代码示例：
```js
/*eslint sort-imports: "error"*/
import a from 'foo.js';
import * as b from 'bar.js';
```

选项 { "memberSyntaxSortOrder": ['single', 'all', 'multiple', 'none'] } 的 正确 代码示例：
```js
/*eslint sort-imports: ["error", { "memberSyntaxSortOrder": ['single', 'all', 'multiple', 'none'] }]*/

import a from 'foo.js';
import * as b from 'bar.js';
```

选项 { "memberSyntaxSortOrder": ['all', 'single', 'multiple', 'none'] } 的 正确 代码示例：
```js
/*eslint sort-imports: ["error", { "memberSyntaxSortOrder": ['all', 'single', 'multiple', 'none'] }]*/

import * as foo from 'foo.js';
import z from 'zoo.js';
import {a, b} from 'foo.js';
```
默认为 ["none", "all", "multiple", "single"]。

### When Not To Use It
该规则是个格式化偏好，不遵循它不会影响你的代码质量。如果按字母顺序排序的 import 不是你编码标准一部分，你可以关闭此规则。

### Version
该规则在 ESLint 2.0.0-beta.1 中被引入。

