## 禁止使用一元操作符 ++ 和 -- (no-plusplus)

因为一元操作符 ++ 和 -- 会自动添加分号，不同的空白可能会改变源代码的语义。
```js
var i = 10;
var j = 20;

i ++
j
// i = 11, j = 20
var i = 10;
var j = 20;

i
++
j
// i = 10, j = 21
```

### Rule Details
该规则禁止使用一元操作符 ++ 和 --。

错误 代码示例：
```js
/*eslint no-plusplus: "error"*/

var foo = 0;
foo++;

var bar = 42;
bar--;

for (i = 0; i < l; i++) {
    return;
}
```

正确 代码示例：
```js
/*eslint no-plusplus: "error"*/

var foo = 0;
foo += 1;

var bar = 42;
bar -= 1;

for (i = 0; i < l; i += 1) {
    return;
}
```

### Options
该规则有一个对象选项。

"allowForLoopAfterthoughts": true 允许在 for 循环的最后一个表达式中使用 ++ 和 -- 。
allowForLoopAfterthoughts
选项 { "allowForLoopAfterthoughts": true } 的 正确 代码示例：
```js
/*eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }]*/

for (i = 0; i < l; i++) {
    return;
}

for (i = 0; i < l; i--) {
    return;
}
```
### Version
该规则在 ESLint 0.0.9 中被引入。
