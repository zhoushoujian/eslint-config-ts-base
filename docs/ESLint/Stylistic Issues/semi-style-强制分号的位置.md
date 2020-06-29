## 强制分号的位置 (semi-style)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

通常，分号出现在行尾。然而，在 semicolon-less 风格中，分号出现行首。该规则强制分号出现在配置的位置。

### Rule Details
该规则报告分号周围的行终止符。

该规则有一个选项。
```js
{
    "semi-style": ["error", "last"],
}
```
"last" (默认) 强制分号出现在句子末尾。
"first" 强制分号出现在句子开头。for 循环中的分号 (for(a;b;c){}) 即使使用了该选项，也要出现在 行尾。
选项 "last" 的 错误 代码示例：
```js
/*eslint semi-style: ["error", "last"]*/

foo()
;[1, 2, 3].forEach(bar)

for (
    var i = 0
    ; i < 10
    ; ++i
) {
    foo()
}
```

选项 "last" 的 正确 代码示例：
```js
/*eslint semi-style: ["error", "last"]*/

foo();
[1, 2, 3].forEach(bar)

for (
    var i = 0;
    i < 10;
    ++i
) {
    foo()
}
```

选项 "first" 的 错误 代码示例：
```js
/*eslint semi-style: ["error", "first"]*/

foo();
[1, 2, 3].forEach(bar)

for (
    var i = 0
    ; i < 10
    ; ++i
) {
    foo()
}
```

选项 "first" 的 正确 代码示例：
```js
/*eslint semi-style: ["error", "first"]*/

foo()
;[1, 2, 3].forEach(bar)

for (
    var i = 0;
    i < 10;
    ++i
) {
    foo()
}
```

### When Not To Use It
如果你不想被通知分号的位置，你可以关闭此规则。

### Version
该规则在 ESLint 4.0.0-beta.0 中被引入。

