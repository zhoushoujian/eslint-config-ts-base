## 禁止重复导入 (no-duplicate-imports)

为每个模块使用单一的 import 语句会是代码更加清新，因为你会看到从该模块导入的所有内容都在同一行。

在下面的例子中，行 1 和 行 3 的模块导入是重复的。二者合并会使导入列表更加简洁。
```js
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
```

### Rule Details
该规则要求单个模块的所有的导入都在同一个 import 语句中。

错误 代码示例：
```js
/*eslint no-duplicate-imports: "error"*/

import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
```

正确 代码示例：
```js
/*eslint no-duplicate-imports: "error"*/

import { merge, find } from 'module';
import something from 'another-module';
```

### Options
该规则有一个对象选项，只有一个布尔属性 includeExports。默认为 false。

如果一个导入的模块又被导出，你应该把这些导入加到 import 语句中，然后直接导出，不要使用 export ... from。

选项 { "includeExports": true } 的 错误 代码示例：
```js
/*eslint no-duplicate-imports: ["error", { "includeExports": true }]*/

import { merge } from 'module';

export { find } from 'module';
```

选项 { "includeExports": true } 的 正确 代码示例：
```js
/*eslint no-duplicate-imports: ["error", { "includeExports": true }]*/

import { merge, find } from 'module';

export { find };
```

### Version
该规则在 ESLint 2.5.0 中被引入。
