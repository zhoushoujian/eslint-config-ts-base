## 禁止使用魔术数字 (no-magic-numbers)

魔术数字是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。
```js
var now = Date.now(),
    inOneHour = now + (60 * 60 * 1000);
```

### Rule Details
该规则旨在确保将具体的数字声明为意义明确的常量，从而使代码更加可读并且易于重构。

错误 代码示例：
```js
/*eslint no-magic-numbers: "error"*/

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);
/*eslint no-magic-numbers: "error"*/

var data = ['foo', 'bar', 'baz'];

var dataLast = data[2];
/*eslint no-magic-numbers: "error"*/

var SECONDS;

SECONDS = 60;
```

正确 代码示例：
```js
/*eslint no-magic-numbers: "error"*/

var TAX = 0.25;

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);
```

### Options
```ignore```
一个数字数组，指定检测中可以忽略的数字。默认为 []。如果设置该选项，它必须是 Array。

选项 { "ignore": [1] } 的 错误 代码示例：
```js
/*eslint no-magic-numbers: ["error", { "ignore": [1] }]*/

var data = ['foo', 'bar', 'baz'];
var dataLast = data.length && data[data.length - 1];
```

```ignoreArrayIndexes```
一个布尔值，指定数字用作数组的索引是否是可以的。默认为 false。

选项 { "ignoreArrayIndexes": true } 的 正确 代码示例：
```js
/*eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }]*/

var data = ['foo', 'bar', 'baz'];
var dataLast = data[2];
```

```enforceConst```
一个布尔值，指定是否应该在数字变量的声明中检测 const 关键字。默认为false。

选项 { "enforceConst": true } 的 错误 代码示例：
```js
/*eslint no-magic-numbers: ["error", { "enforceConst": true }]*/

var TAX = 0.25;

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);
```

```detectObjects```
一个布尔值，指定是否应该在设置对象属性时检测数字。默认为 false。

选项 { "detectObjects": true } 的 错误 代码示例：
```js
/*eslint no-magic-numbers: ["error", { "detectObjects": true }]*/

var magic = {
  tax: 0.25
};

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * magic.tax);
```

选项 { "detectObjects": true } 的 正确 代码示例：
```js
/*eslint no-magic-numbers: ["error", { "detectObjects": true }]*/

var TAX = 0.25;

var magic = {
  tax: TAX
};

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * magic.tax);
```

### Version
该规则在 ESLint 1.7.0 中被引入。

