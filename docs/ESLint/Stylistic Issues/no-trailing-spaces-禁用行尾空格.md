## 禁用行尾空白 (no-trailing-spaces)
命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

有时在编辑文件的过程中，你可以在行的末尾以额外的空格作为结束。这些空格差异可以被源码控制系统识别出并被标记为差异，给开发人员带来挫败感。虽然这种额外的空格并不会造成功能性的问题，许多编码规范要求在提交代码之前删除尾部空格。

### Rule Details
该规则禁止使用行尾空白（空格、tab 和其它 Unicode 空白字符）。

错误 代码示例：
```js
/*eslint no-trailing-spaces: "error"*/

var foo = 0;//•••••
var baz = 5;//••
//•••••
```

正确 代码示例：
```js
/*eslint no-trailing-spaces: "error"*/

var foo = 0;
var baz = 5;
```

### Options
该规则有一个对象选项：

"skipBlankLines": false (默认) 禁止在空行使用空白符
"skipBlankLines": true 允许在空行使用空白符
"ignoreComments": false (默认) 禁止在注释块中使用空白符
"ignoreComments": true 允许在注释块中使用空白符
```skipBlankLines```
选项 { "skipBlankLines": true } 的 正确 代码示例：
```js
/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/

var foo = 0;
var baz = 5;
//•••••
```

```ignoreComments```
选项 { "ignoreComments": true } 的 正确 代码示例：
```js
/*eslint no-trailing-spaces: ["error", { "ignoreComments": true }]*/

//foo•
//•••••
/**
 *•baz
 *••
 *•bar
 */
```

### Version
该规则在 ESLint 0.7.1 中被引入。
