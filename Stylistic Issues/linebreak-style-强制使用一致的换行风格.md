## 强制使用一致的换行符风格 (linebreak-style)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

当很多人协同开发时，会用到不同的编辑器，在 VCS 应用程序和操作系统中可能会出现不同的编辑器行结束方式也不同(尤其是同时使用 windows 和 mac 版本的源码)。

在 windows 操作系统中换行符通常是回车 (CR) 加换行分隔符 (LF)，也就是回车换行(CRLF)，然而在 Linux 和 Unix 中只使用简单的换行分隔符 (LF)。对应的控制字符为 "\n" (LF) 和 "\r\n"(CRLF)。

很多版本控制系统（如 git 和 subversion）可以自动的保证正确的结尾。然而如果要涵盖所有情况，你可以激活此规则。

### Rule Details
该规则强制在独立的开源系统、VCS 或 你使用的编辑器中使用一致的换行符。

### Options
该规则有一个字符串选项：

"unix" (默认) 强制使用 Unix 换行符： \n。
"windows" 强制使用 Windows 换行符： \r\n。
```unix```
默认选项 "unix" 的 错误 代码示例：
```js
/*eslint linebreak-style: ["error", "unix"]*/

var a = 'a'; // \r\n
```

默认选项 "unix" 的 正确 代码示例：
```js
/*eslint linebreak-style: ["error", "unix"]*/

var a = 'a', // \n
    b = 'b'; // \n
// \n
function foo(params) { // \n
    // do stuff \n
}// \n
```

```windows```
选项 "windows" 的 错误 代码示例：
```js
/*eslint linebreak-style: ["error", "windows"]*/

var a = 'a'; // \n
```

选项 "windows" 的 正确 代码示例：
```js
/*eslint linebreak-style: ["error", "windows"]*/

var a = 'a', // \r\n
    b = 'b'; // \r\n
// \r\n
function foo(params) { // \r\n
    // do stuff \r\n
} // \r\n
```

Using this rule with version control systems
版本控制系统有时对换行符有一些特殊的行为。为了让开发人员更方便的在不同的平台贡献自己的代码库，你可能需要配置你 VCS 的来适当地处理换行符。

比如，window 系统中 git 在 checkout 文件时会把换行符 LF 转换为 CRLF， 但在提交时，会把换行符保存为 LF。如果配置了了 "unix" 设置，这将导致 linebreak-style 规则报告错误，因为 ESLint 检测到的是 CRLF。如果你使用 git， 伱可能希望在你的 .gitattributes 文件 添加一行来避免 git 对 .js 文件中的换行符进行转换。

*.js text eol=lf

### When Not To Use It
如果你不关心你的代码中是否以不同的换行符结尾，你可以关闭此规则。

### Version
该规则在 ESLint 0.21.0 中被引入。

