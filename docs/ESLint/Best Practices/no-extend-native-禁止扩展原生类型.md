## 禁止扩展原生对象 (no-extend-native)

在 JavaScript 中，你可以扩展任何对象，包括内置或者”原生”对象。有时人们改变这些原生对象的行为，会影响到代码中的其它部分。

例如我们重写了一个内建的方法，将会影响到所有对象，甚至是其它内建对象。
```js
// seems harmless
Object.prototype.extra = 55;

// loop through some userIds
var users = {
    "123": "Stan",
    "456": "David"
};

// not what you'd expect
for (var id in users) {
    console.log(id); // "123", "456", "extra"
}
```

建议在 for 循环里使用 Object.hasOwnProperty(id)来避免此问题出现。然而，如果你的代码库强制执行此规则，你会需要这么做。

### Rule Details
禁止直接修改内建对象的属性。

错误 代码示例：
```js
/*eslint no-extend-native: "error"*/

Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });
```

### Options
此规则接受一个 exceptions 选项，可以用来指定允许扩展的内建列表。

### exceptions
选项 { "exceptions": ["Object"] } 的 正确 代码示例：
```js
/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/

Object.prototype.a = "a";
```

### Known Limitations
该规则不会报告对内建对象不太明显的修改情况：
```js
var x = Object;
x.prototype.thing = a;

eval("Array.prototype.forEach = 'muhahaha'");

with(Array) {
    prototype.thing = 'thing';
};

window.Function.prototype.bind = 'tight';
```

### When Not To Use It
当你要兼容旧版 JavaScript 时，比如使用在未来会得到友好支持的 Function.prototype.bind 或 Array.prototype.forEach，你可以禁用此规则。

### Version
该规则在 ESLint 0.1.4 中被引入。

