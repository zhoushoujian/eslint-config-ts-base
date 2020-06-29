## 要求构造函数首字母大写 (new-cap)

在 JavaScript 中 new 操作符用来创建某个特定类型的对象的一个实例。该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 new 来调用。本地 JavaScript 函数以首字母大写来区分是否是构造函数。许多风格指南推荐以下模式，可以更容易的确定哪些函数被用作构造函数。
```js
var friend = new Person();
```

### Rule Details
该规则要求构造函数名首字母大写。特定内建标识符不适用于此规则。这些标识符是：

Array
Boolean
Date
Error
Function
Number
Object
RegExp
String
Symbol
正确 代码示例：
```js
/*eslint new-cap: "error"*/

function foo(arg) {
    return Boolean(arg);
}
```

### Options
该规则有一个对象选项：

"newIsCap": true (默认) 要求调用 new 操作符时有首字母大小的函数。
"newIsCap": false 允许调用 new 操作符有首字母小写或首字母大写的函数。
"capIsNew": true (默认) 要求调用首字母大写的函数时有 new 操作符。
"capIsNew": false 允许调用首字母大写的函数时没有 new 操作符。
"newIsCapExceptions" 允许调用指定的首字母小写的函数时有 new 操作符。
"newIsCapExceptionPattern" 允许调用任何的首字母小写的函数名匹配指定的正则表达式时有 new 操作符。
"capIsNewExceptions" 允许调用指定的首字母大写的函数时没有 new 操作符。
"capIsNewExceptionPattern" 允许调用任何的首字母大写的函数名匹配指定的正则表达式时没有 new 操作符。
"properties": true (默认) 检查对象属性。
"properties": false 禁止检查对象属性。
newIsCap
默认选项 { "newIsCap": true } 的 错误 代码示例：
```js
/*eslint new-cap: ["error", { "newIsCap": true }]*/

var friend = new person();
```

默认选项 { "newIsCap": true } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "newIsCap": true }]*/

var friend = new Person();
```
选项 { "newIsCap": false } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "newIsCap": false }]*/

var friend = new person();
```

```capIsNew```
默认选项 { "capIsNew": true } 的 错误 代码示例：
```js
/*eslint new-cap: ["error", { "capIsNew": true }]*/

var colleague = Person();
```

默认选项 { "capIsNew": true } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "capIsNew": true }]*/

var colleague = new Person();
```

选项 { "capIsNew": false } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "capIsNew": false }]*/

var colleague = Person();
```

```newIsCapExceptions```
选项 { "newIsCapExceptions": ["events"] } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "newIsCapExceptions": ["events"] }]*/

var events = require('events');

var emitter = new events();
```

```newIsCapExceptionPattern```
选项 { "newIsCapExceptionPattern": "^person\.." } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "newIsCapExceptionPattern": "^person\.." }]*/

var friend = new person.acquaintance();
var bestFriend = new person.friend();
```

```capIsNewExceptions```
选项 { "capIsNewExceptions": ["Person"] } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "capIsNewExceptions": ["Person"] }]*/

function foo(arg) {
    return Person(arg);
}
```

```capIsNewExceptionPattern```
选项 { "capIsNewExceptionPattern": "^Person\.." } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "capIsNewExceptionPattern": "^Person\.." }]*/

var friend = person.Acquaintance();
var bestFriend = person.Friend();
```

```properties```
默认选项 { "properties": true } 的 错误 代码示例：
```js
/*eslint new-cap: ["error", { "properties": true }]*/

var friend = new person.acquaintance();
```

默认选项 { "properties": true } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "properties": true }]*/

var friend = new person.Acquaintance();
```

选项 { "properties": false } 的 正确 代码示例：
```js
/*eslint new-cap: ["error", { "properties": false }]*/

var friend = new person.acquaintance();
```

### When Not To Use It
如果你有约定，不需要构造函数首字母大写，或不需要首字母大写的函数仅仅被用作构造函数，那么可以关闭此规则。

### Version
该规则在 ESLint 0.0.3-0 中被引入。

