## 不允许多个空行 (no-multiple-empty-lines)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些开发者喜欢删除多个空行，然而其他人认为多个空行可以提高可读性。空白对于分离代码代码段逻辑是有帮助的，但过量的空白会占用更多的屏幕。

### Rule Details
该规则目的在于，当你读代码时，减少滚动。当超过最大空行数，该规则将发出警告。

### Options
该规则有一个对象选项：

"max" (默认为 2) 强制最大连续空行数。
"maxEOF" 强制文件末尾的最大连续空行数。
"maxBOF" 强制文件开始的最大连续空行数。
```max```
默认选项 { "max": 2 } 的 错误 代码示例：
```js
/*eslint no-multiple-empty-lines: "error"*/

var foo = 5;



var bar = 3;
```

默认选项 { "max": 2 } 的 正确 代码示例：
```js
/*eslint no-multiple-empty-lines: "error"*/

var foo = 5;


var bar = 3;
```

```maxEOF```
选项 { max: 2, maxEOF: 1 } 的 错误 代码示例：
```js
/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 1 }]*/

var foo = 5;


var bar = 3;

```

选项 { max: 2, maxEOF: 1 } 的 正确 代码示例：
```js
/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 1 }]*/

var foo = 5;


var bar = 3;
```

```maxBOF```
选项 { max: 2, maxBOF: 1 } 的 错误 代码示例：
```js
/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1 }]*/


var foo = 5;


var bar = 3;
```

选项 { max: 2, maxBOF: 1 } 的 正确 代码示例：
```js
/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1}]*/

var foo = 5;


var bar = 3;
```

### When Not To Use It
如果你不关心额外的空行，关闭此规则即可。

### Version
该规则在 ESLint 0.9.0 中被引入。
