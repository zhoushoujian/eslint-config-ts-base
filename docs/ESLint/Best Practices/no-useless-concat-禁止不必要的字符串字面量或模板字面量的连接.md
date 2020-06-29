## 禁止没有必要的字符拼接 (no-useless-concat)

把两个字符拼接在一起是没有必要的，比如：
```js
var foo = "a" + "b";
```

这段代码像是在拼接中移除了某个变量的重构造成的（比如 "a" + b + "b"）。在这种情况下，拼接不是重要的，代码可以被写成如下形式:
```js
var foo = "ab";
```

### Rule Details
此规则目的在于标记可以组合成单个字面量的两个字面量的拼接。字面量可以是字符串或者模板字面量。

错误 代码示例：
```js
/*eslint no-useless-concat: "error"*/
/*eslint-env es6*/

var a = `some` + `string`;

// these are the same as "10"
var a = '1' + '0';
var a = '1' + `0`;
var a = `1` + '0';
var a = `1` + `0`;
```

正确 代码示例：
```js
/*eslint no-useless-concat: "error"*/

// when a non string is included
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
var c = 1 - 2;
// when the string concatenation is multiline
var c = "foo" +
    "bar";
```

### When Not To Use It
如果不想收到关于不必要的字符拼接的通知，你可以禁用此规则。

### Version
该规则在 ESLint 1.3.0 中被引入。
