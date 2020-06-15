## 要求或禁止使用 Unicode 字节顺序标记 (BOM) (unicode-bom)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

Unicode 字节顺序标记 (BOM) 用来指定代码单元是高字节序还是低字节序。也就是说，是高位在前还是低位在前。UTF-8 不需要 BOM 来表明字节顺序，因为单个字节并不影响字节顺序。因为 UTF-8 在网络编码中占有重要位置，我们设置 "never" 作为其默认选项。

Rule Details
如果使用了 "always" 选项，该规则要求文件始终以 Unicode BOM 字符 U+FEFF 开头。如果是 "never"，文件决不能以 U+FEFF 开始。

### Options
该规则有一个字符串选项：

"always" 文件必须以 Unicode BOM 开头
"never" (默认) 文件不能以 Unicode BOM 开头

```always```
选项 "always" 的 正确 代码示例：
```js
/*eslint unicode-bom: "error"*/

U+FEFF
var abc;
```

选项 "always" 的 错误 代码示例：
```js
/*eslint unicode-bom: "error"*/

var abc;
```

```never```
选项 "never" 的 正确 代码示例：
```js
/*eslint unicode-bom: ["error", "never"]*/

var abc;
```

选项 "never" 的 错误 代码示例：
```js
/*eslint unicode-bom: ["error", "never"]*/

U+FEFF
var abc;
```

### When Not To Use It
如果你使用 UTF-16 或 UTF-32 文件，而且你想允许文件以 Unicode BOM 开始，你应该关闭此规则。

### Version
该规则在 ESLint 2.11.0 中被引入。
