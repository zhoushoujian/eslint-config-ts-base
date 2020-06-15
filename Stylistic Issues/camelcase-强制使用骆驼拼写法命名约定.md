## 要求使用骆驼拼写法 (camelcase)

当命名变量时，风格指南一般会分为骆驼拼写法 (variableName) 和下划线拼写法 (variable_name) 两大阵营。该规则主要关注骆驼拼写法的用法。如果你的风格指南要求变量名称以驼峰的形式书写，此规则正适合于你。

### Rule Details
此规则在源码中查找下划线 (_)。它忽略前导和尾部的下划线，只检查在变量名称中间的下划线。如果 ESLint 判断定某个变量是个常量（全部大写），将不会发出警告。否则会发出警告。该规则仅仅标记定义和赋值，不适用于方法调用。在 ES6 import 语句中，该规则只针对将引入到本地模块作用域的变量名。

### Options
该规则有一个对象选项：

"properties": "always" (默认) 强制属性名称为驼峰风格
"properties": "never" 不检查属性名称
"ignoreDestructuring": false (默认) 对解构标识符强制使用驼峰风格
"ignoreDestructuring": true 不检查解构标识符
allow (string[]) 接受的属性列表。运行正则表达式。
properties: “always”
默认选项 { "properties": "always" } 的 错误 代码示例：
```js
/*eslint camelcase: "error"*/

import { no_camelcased } from "external-module"

var my_favorite_color = "#112C85";

function do_something() {
    // ...
}

obj.do_something = function() {
    // ...
};

function foo({ no_camelcased }) {
    // ...
};

function foo({ isCamelcased: no_camelcased }) {
    // ...
}

function foo({ no_camelcased = 'default value' }) {
    // ...
};

var obj = {
    my_pref: 1
};

var { category_id = 1 } = query;

var { foo: no_camelcased } = bar;

var { foo: bar_baz = 1 } = quz;
```

默认选项 { "properties": "always" } 的 正确 代码示例：
```js
/*eslint camelcase: "error"*/

import { no_camelcased as camelCased } from "external-module";

var myFavoriteColor   = "#112C85";
var _myFavoriteColor  = "#112C85";
var myFavoriteColor_  = "#112C85";
var MY_FAVORITE_COLOR = "#112C85";
var foo = bar.baz_boom;
var foo = { qux: bar.baz_boom };

obj.do_something();
do_something();
new do_something();

var { category_id: category } = query;

function foo({ isCamelCased }) {
    // ...
};

function foo({ isCamelCased: isAlsoCamelCased }) {
    // ...
}

function foo({ isCamelCased = 'default value' }) {
    // ...
};

var { categoryId = 1 } = query;

var { foo: isCamelCased } = bar;

var { foo: isCamelCased = 1 } = quz;
```

properties: “never”
选项 { "properties": "never" } 的 正确 代码示例：
```js
/*eslint camelcase: ["error", {properties: "never"}]*/

var obj = {
    my_pref: 1
};
```

ignoreDestructuring: false
选项 { "ignoreDestructuring": false } 的 错误 代码示例：
```js
/*eslint camelcase: "error"*/

var { category_id } = query;

var { category_id = 1 } = query;

var { category_id: category_id } = query;

var { category_id: category_alias } = query;

var { category_id: categoryId, ...other_props } = query;
```

ignoreDestructuring: true
选项 { "ignoreDestructuring": true } 的 错误 代码示例：
```js
/*eslint camelcase: ["error", {ignoreDestructuring: true}]*/

var { category_id: category_alias } = query;

var { category_id, ...other_props } = query;
```

选项 { "ignoreDestructuring": true } 的 正确 代码示例：
```js
/*eslint camelcase: ["error", {ignoreDestructuring: true}]*/

var { category_id } = query;

var { category_id = 1 } = query;

var { category_id: category_id } = query;
```

```allow```
选项 allow 的 正确 代码示例：
```js
/*eslint camelcase: ["error", {allow: ["UNSAFE_componentWillMount"]}]*/

function UNSAFE_componentWillMount() {
    // ...
}
/*eslint camelcase: ["error", {allow: ["^UNSAFE_"]}]*/

function UNSAFE_componentWillMount() {
    // ...
}

function UNSAFE_componentWillMount() {
    // ...
}
```

### When Not To Use It
如果你已经建立了编码标准，使用了不同的命名约定(用下划线分隔单词)，关闭此规则即可。

### Version
该规则在 ESLint 0.0.2 被引入。

