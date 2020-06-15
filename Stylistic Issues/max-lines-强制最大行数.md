## 强制函数最大行数 (max-lines-per-function)

有些人认为大型函数是一种代码气味。大型函数往往会做很多事情，并且会使跟踪发生的事情变得困难。许多编码风格指南规定了一个函数可以包含的行数的限制。这条规则可以帮助加强这种风格。

### Rule Details
此规则为每个函数强制执行最大行数，以帮助提高可维护性并降低复杂性。

Why not use max-statements or other complexity measurement rules instead?
嵌套的长方法链，如下面的例子，为了提高可读性，经常被分割成单独的行:
```js
function() {
    return m("div", [
        m("table", {className: "table table-striped latest-data"}, [
            m("tbody",
                data.map(function(db) {
                    return m("tr", {key: db.dbname}, [
                        m("td", {className: "dbname"}, db.dbname),
                        m("td", {className: "query-count"},  [
                            m("span", {className: db.lastSample.countClassName}, db.lastSample.nbQueries)
                        ])
                    ])
                })
            )
        ])
    ])
}
```

max-statements 将只报告一个语句，尽管有 16 行代码。
complexity 只会报告复杂度为 1
max-nested-callbacks 将只报告 1
max-depth 将报告深度为 0

### Options
此规则有以下选项，可以使用对象指定:

"max" (默认 50) 强制在函数中的最大行数。
"skipBlankLines" (默认 false) 忽略纯粹由空格组成的行。
"skipComments" (默认 false) 忽略只包含注释的行。
"IIFEs" (默认 false) 包括 IIFE 中包含的任何代码。
此外，你也可以为 max 选项指定一个整数：
```js
"max-lines-per-function": ["error", 20]
```
相当于
```js
"max-lines-per-function": ["error", { "max": 20 }]
```

### code
最大行数为 2 的 错误 代码示例：
```js
/*eslint max-lines-per-function: ["error", 2]*/
function foo() {
    var x = 0;
}
/*eslint max-lines-per-function: ["error", 2]*/
function foo() {
    // a comment
    var x = 0;
}
/*eslint max-lines-per-function: ["error", 2]*/
function foo() {
    // a comment followed by a blank line

    var x = 0;
}
```

最大行数为 3 的 正确 代码示例：
```js
/*eslint max-lines-per-function: ["error", 3]*/
function foo() {
    var x = 0;
}
/*eslint max-lines-per-function: ["error", 3]*/
function foo() {
    // a comment
    var x = 0;
}
/*eslint max-lines-per-function: ["error", 3]*/
function foo() {
    // a comment followed by a blank line

    var x = 0;
}
```

```skipBlankLines```
选项 { "skipBlankLines": true } 的 错误 代码示例：
```js
/*eslint max-lines-per-function: ["error", {"max": 2, "skipBlankLines": true}]*/
function foo() {

    var x = 0;
}
{ "skipBlankLines": true } 的 正确 代码示例：

/*eslint max-lines-per-function: ["error", {"max": 3, "skipBlankLines": true}]*/
function foo() {

    var x = 0;
}
```

```skipComments```
选项 { "skipComments": true } 的 错误 代码示例：
```js
/*eslint max-lines-per-function: ["error", {"max": 2, "skipComments": true}]*/
function foo() {
    // a comment
    var x = 0;
}
```

选项 { "skipComments": true } 的 正确 代码示例：
```js
/*eslint max-lines-per-function: ["error", {"max": 3, "skipComments": true}]*/
function foo() {
    // a comment
    var x = 0;
}
```

```IIFEs```
选项 { "IIFEs": true } 的 错误 代码示例：
```js
/*eslint max-lines-per-function: ["error", {"max": 2, "IIFEs": true}]*/
(function(){
    var x = 0;
}());
```

选项 { "IIFEs": true } 的 正确 代码示例：
```js
/*eslint max-lines-per-function: ["error", {"max": 3, "IIFEs": true}]*/
(function(){
    var x = 0;
}());
```

### When Not To Use It
如果你不关心函数中的行数，可以关闭此规则。

### Version
该规则在 ESLint 5.0.0 中被引入。
