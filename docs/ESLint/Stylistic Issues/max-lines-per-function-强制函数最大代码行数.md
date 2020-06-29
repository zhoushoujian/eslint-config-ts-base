## 强制文件的最大行数 (max-lines)
有些人把大文件看作是一种代码味道。大文件可以做很多事情，也很难跟踪到底发生了什么。虽然没有一个客观的被认为是可接受的最大行数，大多数人会同意文件中的行数不应该不受限制。通常建议 100 到 500 行。

## Rule Details
该规则强制文件的最大行数，以提高可维护性和降低复杂度。

## Options
该规则有一个数字或对象选项：

"max" (默认 300) 强制一个文件的最大行数
"skipBlankLines": true 忽略空白行
"skipComments": true 忽略只包含注释的行

```code```
最大行数为 2 的 错误 代码示例：
```js
/*eslint max-lines: ["error", 2]*/
var a,
    b,
    c;
/*eslint max-lines: ["error", 2]*/

var a,
    b,c;
/*eslint max-lines: ["error", 2]*/
// a comment
var a,
    b,c;
```

最大行数为 2 的 正确 代码示例：
```js
/*eslint max-lines: ["error", 2]*/
var a,
    b, c;
/*eslint max-lines: ["error", 2]*/

var a, b, c;
/*eslint max-lines: ["error", 2]*/
// a comment
var a, b, c;
```

```skipBlankLines```
选项 { "skipBlankLines": true } 的 错误 代码示例：
```js
/*eslint max-lines: ["error", {"max": 2, "skipBlankLines": true}]*/

var a,
    b,
    c;
```

选项 { "skipBlankLines": true } 的 正确 代码示例：
```js
/*eslint max-lines: ["error", {"max": 2, "skipBlankLines": true}]*/

var a,
    b, c;
```

```skipComments```
选项 { "skipComments": true } 的 错误 代码示例：
```js
/*eslint max-lines: ["error", {"max": 2, "skipComments": true}]*/
// a comment
var a,
    b,
    c;
```

选项 { "skipComments": true } 的 正确 代码示例：
```js
/*eslint max-lines: ["error", {"max": 2, "skipComments": true}]*/
// a comment
var a,
    b, c;
```

### When Not To Use It
如果你并不关心文件中的行数，你可以关闭此规则。

### Version
该规则在 ESLint 2.12.0 中被引入。

