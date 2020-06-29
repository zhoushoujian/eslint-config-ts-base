## 要求函数名与赋值给它们的变量名或属性名相匹配 (func-name-matching)

### Rule Details
该规则要求函数名与赋值给它们的变量名或属性名相匹配。该规则将忽略属性名不是 ECMAScript 版本指定的有效标识符（默认 ES5）的属性赋值。

### Options
该规则有一个字符串选项，值为 "always" 或 "never"（当省略时，默认为 "always"）和一个对象选项，其只有一个 includeCommonJSModuleExports 属性，值为布尔类型，默认为 false，表示该规则会忽略 module.exports 和 module["exports"] 。如果 includeCommonJSModuleExports 设置为 true，该规则将会检查module.exports 和 module["exports"]。

错误 代码示例：
```js
/*eslint func-name-matching: "error"*/

var foo = function bar() {};
foo = function bar() {};
obj.foo = function bar() {};
obj['foo'] = function bar() {};
var obj = {foo: function bar() {}};
({['foo']: function bar() {}});
/*eslint func-name-matching: ["error", { "includeCommonJSModuleExports": true }]*/
/*eslint func-name-matching: ["error", "always", { "includeCommonJSModuleExports": true }]*/ // these are equivalent

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
/*eslint func-name-matching: ["error", "never"] */

var foo = function foo() {};
foo = function foo() {};
obj.foo = function foo() {};
obj['foo'] = function foo() {};
var obj = {foo: function foo() {}};
({['foo']: function foo() {}});
```

正确 代码示例：
```js
/*eslint func-name-matching: "error"*/
/*eslint func-name-matching: ["error", "always"]*/ // these are equivalent
/*eslint-env es6*/

var foo = function foo() {};
var foo = function() {};
var foo = () => {};
foo = function foo() {};

obj.foo = function foo() {};
obj['foo'] = function foo() {};
obj['foo//bar'] = function foo() {};
obj[foo] = function bar() {};

var obj = {foo: function foo() {}};
var obj = {[foo]: function bar() {}};
var obj = {'foo//bar': function foo() {}};
var obj = {foo: function() {}};

obj['x' + 2] = function bar(){};
var [ bar ] = [ function bar(){} ];
({[foo]: function bar() {}})

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
/*eslint func-name-matching: ["error", "never"] */
/*eslint-env es6*/

var foo = function bar() {};
var foo = function() {};
var foo = () => {};
foo = function bar() {};

obj.foo = function bar() {};
obj['foo'] = function bar() {};
obj['foo//bar'] = function foo() {};
obj[foo] = function foo() {};

var obj = {foo: function bar() {}};
var obj = {[foo]: function foo() {}};
var obj = {'foo//bar': function foo() {}};
var obj = {foo: function() {}};

obj['x' + 2] = function bar(){};
var [ bar ] = [ function bar(){} ];
({[foo]: function bar() {}})

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
```

### Options
该规则接受一个可选字符串 always 或 never (省略时默认为 always)，以及一个可选选项对象，该对象具有两个属性considerPropertyDescriptor 和 includeCommonJSModuleExports。

```considerPropertyDescriptor```
是个布尔值，默认为 false。如果 considerPropertyDescriptor 设置为 true，那么该规则将检测 Object.create、Object.defineProperty、Object.defineProperties 和 Reflect.defineProperty 的使用。

选项 { considerPropertyDescriptor: true } 的 正确 代码示例：
```js
/*eslint func-name-matching: ["error", { "considerPropertyDescriptor": true }]*/
/*eslint func-name-matching: ["error", "always", { "considerPropertyDescriptor": true }]*/ // these are equivalent
var obj = {};
Object.create(obj, {foo:{value: function foo() {}}});
Object.defineProperty(obj, 'bar', {value: function bar() {}});
Object.defineProperties(obj, {baz:{value: function baz() {} }});
Reflect.defineProperty(obj, 'foo', {value: function foo() {}});
```

选项 { considerPropertyDescriptor: true } 的 错误 代码示例：
```js
/*eslint func-name-matching: ["error", { "considerPropertyDescriptor": true }]*/
/*eslint func-name-matching: ["error", "always", { "considerPropertyDescriptor": true }]*/ // these are equivalent
var obj = {};
Object.create(obj, {foo:{value: function bar() {}}});
Object.defineProperty(obj, 'bar', {value: function baz() {}});
Object.defineProperties(obj, {baz:{value: function foo() {} }});
Reflect.defineProperty(obj, 'foo', {value: function value() {}});
```

```includeCommonJSModuleExports```
是个布尔值，默认为 false。如果 includeCommonJSModuleExports 设置为 true，那么该规则将检测 module.exports 、module["exports"]。

选项 { includeCommonJSModuleExports: true } 的 错误 代码示例：
```js
/*eslint func-name-matching: ["error", { "includeCommonJSModuleExports": true }]*/
/*eslint func-name-matching: ["error", "always", { "includeCommonJSModuleExports": true }]*/ // these are equivalent

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
```

### When Not To Use It
如果你允许被命名的函数与赋值给它的变量或属性名不同，就不要使用此规则。

### Version
该规则在 ESLint 3.8.0 中被引入。
