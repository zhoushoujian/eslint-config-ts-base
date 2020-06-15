## 强制数组方法的回调函数中有 return 语句 (array-callback-return)

If we forget to write return statement in a callback of those, it’s probably a mistake. If you don’t want to use a return or don’t need the returned results, consider using .forEach instead.

```js
// example: convert ['a', 'b', 'c'] --> {a: 0, b: 1, c: 2}
var indexMap = myArray.reduce(function(memo, item, index) {
  memo[item] = index;
}, {}); // Error: cannot set property 'b' of undefined
```

This rule enforces usage of return statement in callbacks of array’s methods.

### Rule Details
This rule finds callback functions of the following methods, then checks usage of return statement.

Array.from
Array.prototype.every
Array.prototype.filter
Array.prototype.find
Array.prototype.findIndex
Array.prototype.map
Array.prototype.reduce
Array.prototype.reduceRight
Array.prototype.some
Array.prototype.sort
以上类型的数据。
Examples of incorrect code for this rule:
```js
/*eslint array-callback-return: "error"*/

var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
});

var bar = foo.filter(function(x) {
    if (x) {
        return true;
    } else {
        return;
    }
});
```

Examples of correct code for this rule:
```js
/*eslint array-callback-return: "error"*/

var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
    return memo;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
    return false;
});

var bar = foo.map(node => node.getAttribute("id"));
```

### Options
This rule has an object option:

"allowImplicit": false (默认) 当设置为 true 时，允许隐式使用 return 不包含任何表达式地返回 undefined。
Examples of correct code for the { "allowImplicit": true } option:
```js
/*eslint array-callback-return: ["error", { allowImplicit: true }]*/
var undefAllTheThings = myArray.map(function(item) {
    return;
});
```

### When Not To Use It
If you don’t want to warn about usage of return statement in callbacks of array’s methods, then it’s safe to disable this rule.

### Version
This rule was introduced in ESLint 2.0.0-alpha-1.
