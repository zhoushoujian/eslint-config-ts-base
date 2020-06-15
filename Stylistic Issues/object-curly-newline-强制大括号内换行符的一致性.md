## 强制在花括号内使用一致的换行符 (object-curly-newline)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些风格指南要求或禁止对象的花括号和其它符号之间出现换行符。

### Rule Details
该规则强制花括号内使用换行符的一致性。该规则同时适用于对象字面量和解构赋值。

### Options
该规则有一个字符串选项

"always" 要求花括号内有换行符
"never" 禁止花括号内有换行符
或一个对象选项：

"multiline": true 如果在属性内部或属性之间有换行符，就要求有换行符
"minProperties" 如果属性的数量至少为给定的数值，要求有换行符。默认情况下，如果一个对象包含换行符并且属性的数量少于给定的数量，该规则也会报错误。然而，如果设置 consistent 选项为 true，则该选项将不起作用。
"consistent": true (默认)要求使用花括号，或者不使用或括号直接使用换行。注意启用该选项将改变 minProperties 选项的行为。(查看上面的 minProperties，获取更多信息)
你可以为字面量、解构赋值和命名的导入导出指定不同的选项：
```js
{
    "object-curly-newline": ["error", {
        "ObjectExpression": "always",
        "ObjectPattern": { "multiline": true },
        "ImportDeclaration": "never",
        "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }]
}
```

"ObjectExpression" 对象字面量的配置。
"ObjectPattern" 对象的解构赋值模式的配置。
"ImportDeclaration" 配置命名的导入
"ExportDeclaration" 配置命名的导出


```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint object-curly-newline: ["error", "always"]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {foo: 1,
    bar: 2};
let e = {foo() {
    dosomething();
}};

let {} = obj;
let {f} = obj;
let {g, h} = obj;
let {i,
    j} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

选项 "always" 的 正确 代码示例：
```js
/*eslint object-curly-newline: ["error", "always"]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {
    foo: 1, bar: 2
};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        dosomething();
    }
};

let {
} = obj;
let {
    f
} = obj;
let {
    g, h
} = obj;
let {
    i,
    j
} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint object-curly-newline: ["error", "never"]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {
    foo: 1, bar: 2
};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        dosomething();
    }
};

let {
} = obj;
let {
    f
} = obj;
let {
    g, h
} = obj;
let {
    i,
    j
} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

选项 "never" 的 正确 代码示例：
```js
/*eslint object-curly-newline: ["error", "never"]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {foo: 1,
    bar: 2};
let e = {foo: function() {
    dosomething();
}};

let {} = obj;
let {f} = obj;
let {g, h} = obj;
let {i,
    j} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

multiline
选项 { "multiline": true } 的 错误 代码示例：
```js
/*eslint object-curly-newline: ["error", { "multiline": true }]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {
    foo: 1, bar: 2
};
let d = {foo: 1,
    bar: 2};
let e = {foo: function() {
    dosomething();
}};

let {
} = obj;
let {
    f
} = obj;
let {
    g, h
} = obj;
let {i,
    j} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

选项 { "multiline": true } 的 正确 代码示例：
```js
/*eslint object-curly-newline: ["error", { "multiline": true }]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        dosomething();
    }
};

let {} = obj;
let {f} = obj;
let {g, h} = obj;
let {
    i,
    j
} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

```minProperties```
选项 { "minProperties": 2 } 的 错误 代码示例：
```js
/*eslint object-curly-newline: ["error", { "minProperties": 2 }]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {foo: 1, bar: 2};
let d = {foo: 1,
    bar: 2};
let e = {
    foo: function() {
        dosomething();
    }
};

let {
} = obj;
let {
    f
} = obj;
let {g, h} = obj;
let {i,
    j} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

选项 { "minProperties": 2 } 的 正确 代码示例：
```js
/*eslint object-curly-newline: ["error", { "minProperties": 2 }]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {
    foo: 1, bar: 2
};
let d = {
    foo: 1,
    bar: 2
};
let e = {foo: function() {
    dosomething();
}};

let {} = obj;
let {f} = obj;
let {
    g, h
} = obj;
let {
    i,
    j
} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

```consistent```
默认选项 { "consistent": true } 的 错误 代码示例：
```js
/*eslint object-curly-newline: ["error", { "consistent": true }]*/
/*eslint-env es6*/

let a = {foo: 1
};
let b = {
    foo: 1};
let c = {foo: 1, bar: 2
};
let d = {
    foo: 1, bar: 2};
let e = {foo: function() {
    dosomething();
}};

let {f
} = obj;
let {
    g} = obj;
let {h, i
} = obj;
let {
    j, k} = obj;
let {l = function() {
    dosomething();
}} = obj;
```

默认选项 { "consistent": true } 的 正确 代码示例：
```js
/*eslint object-curly-newline: ["error", { "consistent": true }]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {
    foo: 1
};
let d = {
    foo: 1, bar: 2
};
let e = {
    foo: 1,
    bar: 2
};
let f = {foo: function() {dosomething();}};
let g = {
    foo: function() {
        dosomething();
    }
};

let {} = obj;
let {h} = obj;
let {i, j} = obj;
let {
    k, l
} = obj;
let {m,
    n} = obj;
let {
    o,
    p
} = obj;
let {q = function() {dosomething();}} = obj;
let {
    r = function() {
        dosomething();
    }
} = obj;
```

```ObjectExpression and ObjectPattern```
选项 { "ObjectExpression": "always", "ObjectPattern": "never" } 的 错误 代码示例：
```js
/*eslint object-curly-newline: ["error", { "ObjectExpression": "always", "ObjectPattern": "never" }]*/
/*eslint-env es6*/

let a = {};
let b = {foo: 1};
let c = {foo: 1, bar: 2};
let d = {foo: 1,
    bar: 2};
let e = {foo: function() {
    dosomething();
}};

let {
} = obj;
let {
    f
} = obj;
let {
    g, h
} = obj;
let {
    i,
    j
} = obj;
let {
    k = function() {
        dosomething();
    }
} = obj;
```

选项 { "ObjectExpression": "always", "ObjectPattern": "never" } 的 正确 代码示例：
```js
/*eslint object-curly-newline: ["error", { "ObjectExpression": "always", "ObjectPattern": "never" }]*/
/*eslint-env es6*/

let a = {
};
let b = {
    foo: 1
};
let c = {
    foo: 1, bar: 2
};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        dosomething();
    }
};

let {} = obj;
let {f} = obj;
let {g, h} = obj;
let {i,
    j} = obj;
let {k = function() {
    dosomething();
}} = obj;
```

```ImportDeclaration and ExportDeclaration```
选项 { "ImportDeclaration": "always", "ExportDeclaration": "never" } 的 错误 代码示例：
```js
/*eslint object-curly-newline: ["error", { "ImportDeclaration": "always", "ExportDeclaration": "never" }]*/
/*eslint-env es6*/

import {foo, bar} from 'foo-bar';
import {foo as f, bar} from 'foo-bar';
import {foo,
    bar} from 'foo-bar';

export {
   foo,
   bar
};
export {
   foo as f,
   bar
} from 'foo-bar';
```

选项 { "ImportDeclaration": "always", "ExportDeclaration": "never" } 的 正确 代码示例：
```js
/*eslint object-curly-newline: ["error", { "ImportDeclaration": "always", "ExportDeclaration": "never" }]*/
/*eslint-env es6*/

import {
    foo,
    bar
} from 'foo-bar';
import {
    foo as f,
    bar
} from 'foo-bar';

export { foo, bar } from 'foo-bar';
export { foo as f, bar } from 'foo-bar';
```

### When Not To Use It
如果你不想强制花括号内换行符的一致性，可以关闭此规则。

### Version
该规则在 ESLint 2.12.0 中被引入。

