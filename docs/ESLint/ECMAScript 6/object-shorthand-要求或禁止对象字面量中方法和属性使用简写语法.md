## 要求对象字面量简写语法 (object-shorthand)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

ECMAScript 6 提供了简写的形式去定义对象中的方法和属性。这个语法可以更清洁地定义复杂对象字面量。

以下几个常见的例子，使用 ES5 语法：
```js
// properties
var foo = {
    x: x,
    y: y,
    z: z,
};

// methods
var foo = {
    a: function() {},
    b: function() {}
};
```

下面是等效的 ES6 语法：
```js
/*eslint-env es6*/

// properties
var foo = {x, y, z};

// methods
var foo = {
    a() {},
    b() {}
};
```

### Rule Details
该规则强制简写语法的使用。这适用于对象字面量中的所有方法（包括 generators ）以及键名与已赋值的变量名相匹配的任何属性。

以下的每个属性都将发出警告：
```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    w: function() {},
    x: function *() {},
    [y]: function() {},
    z: z
};
```

这种情况下，期望的语法应该是这样：
```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    w() {},
    *x() {},
    [y]() {},
    z
};
```

该规则不标记对象字面量中的箭头函数。下面的示例将 不发出警告：
```js
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    x: (y) => y
};
```

参见：

no-useless-rename 它不允许将导入、导出和销毁后的赋值重命名为相同的名称。

### Options
该规则有一个选项。可以设置为下列值之一：

"always" (默认) 只要有可能，简写就应该被使用。
"methods" 保证方法简写被使用（同样适用于 generators ）。
"properties" 保证属性简写被使用 (键和变量名称相匹配的情况).
"never" 保证对象字面量中的任何属性和方法都不使用简写。
"consistent" 保证对象字面量的简写或非简写一致性。
"consistent-as-needed" 保证对象字面量的简写或非简写一致性，但尽可能的全部使用简写。
你可以在配置中这样设置：
```js
{
    "object-shorthand": ["error", "always"]
}
```

另外，该规则有个可选配置对象：

"avoidQuotes": true 表示对象的键是字符串时，倾向于长格式的语法。(默认: false)。注意该选项只在 "always"、"methods" 或 "properties" 选项下才有效。
"ignoreConstructors": true 可以用来阻止报告构造函数出现的错误。 (默认情况下，该规则把构造函数当成普通的函数。) 注意该选项只在 "always" 或 "methods" 选项下才有效。
"avoidExplicitReturnArrows": true 表示函数属性相对于显式返回的箭头函数更倾向于方法。 (默认情况下，两者皆可)注意该选项只在 "always" 或 "methods" 选项下才有效。

```avoidQuotes```
```js
{
    "object-shorthand": ["error", "always", { "avoidQuotes": true }]
}
```

选项 "always", { "avoidQuotes": true } 的 错误 代码示例：
```js
/*eslint object-shorthand: ["error", "always", { "avoidQuotes": true }]*/
/*eslint-env es6*/

var foo = {
    "bar-baz"() {}
};
```

选项 "always", { "avoidQuotes": true } 的 正确 代码示例：
```js
/*eslint object-shorthand: ["error", "always", { "avoidQuotes": true }]*/
/*eslint-env es6*/

var foo = {
    "bar-baz": function() {},
    "qux": qux
};
```

```ignoreConstructors```
```js
{
    "object-shorthand": ["error", "always", { "ignoreConstructors": true }]
}
```

选项 "always", { "ignoreConstructors": true } 的 正确 代码示例：
```js
/*eslint object-shorthand: ["error", "always", { "ignoreConstructors": true }]*/
/*eslint-env es6*/

var foo = {
    ConstructorFunction: function() {}
};
```

```avoidExplicitReturnArrows```
```js
{
    "object-shorthand": ["error", "always", { "avoidExplicitReturnArrows": true }]
}
```

选项 "always", { "avoidExplicitReturnArrows": true } 的 错误 代码示例：
```js
/*eslint object-shorthand: ["error", "always", { "avoidExplicitReturnArrows": true }]*/
/*eslint-env es6*/

var foo = {
  foo: (bar, baz) => {
    return bar + baz;
  },

  qux: (foobar) => {
    return foobar * 2;
  }
};
```

选项 "always", { "avoidExplicitReturnArrows": true } 的 正确 代码示例：
```js
/*eslint object-shorthand: ["error", "always", { "avoidExplicitReturnArrows": true }]*/
/*eslint-env es6*/

var foo = {
  foo(bar, baz) {
    return bar + baz;
  },

  qux: foobar => foobar * 2
};
```

选项 "consistent" 的 错误 代码示例：
```js
/*eslint object-shorthand: [2, "consistent"]*/
/*eslint-env es6*/

var foo = {
    a,
    b: "foo",
};
```

选项 "consistent" 的 正确 代码示例：
```js
/*eslint object-shorthand: [2, "consistent"]*/
/*eslint-env es6*/

var foo = {
    a: a,
    b: "foo"
};

var bar = {
    a,
    b,
};
```

选项 "consistent-as-needed"（ 类似于 "consistent"） 的 错误 代码示例：
```js
/*eslint object-shorthand: [2, "consistent-as-needed"]*/
/*eslint-env es6*/

var foo = {
    a: a,
    b: b,
};
```

### When Not To Use It
非 ES6 环境不适用于此规则。其他人发现简洁的简写语法更难阅读，可能不鼓励使用此规则。

### This rule was introduced in ESLint 0.20.0.
