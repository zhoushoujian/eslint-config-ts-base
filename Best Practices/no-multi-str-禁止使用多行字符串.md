## 禁止多行字符串 (no-multi-str)

在 JavaScript 中，可以在新行之前使用斜线创建多行字符串，例如：
```js
var x = "Line 1 \
         Line 2";
```
一些人认为这不是一个好的做法，因为它是 JavaScript 中的一个非正式的特性。

### Rule Details
该规则是为了防止多行字符串的使用。

错误 代码示例：
```js
/*eslint no-multi-str: "error"*/
var x = "Line 1 \
         Line 2";
```

正确 代码示例：
```js
/*eslint no-multi-str: "error"*/

var x = "Line 1\n" +
        "Line 2";
```

### Version
该规则在 ESLint 0.0.9 中被引入。
