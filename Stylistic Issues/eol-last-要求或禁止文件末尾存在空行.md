## 要求或禁止文件末尾保留一行空行 (eol-last)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

在非空文件中存在拖尾换行是一个常见的 UNIX 风格。它的好处同输出文件到终端一样，方便在串联和追加文件时不会打断 shell 的提示。

### Rule Details
该规则要求在非空文件末尾至少存在一行空行（或缺少换行）。

在 v0.16.0 之前此规则还强制在文件末尾只有一行空行。如果你仍然想要这样，可以考虑开启 no-multiple-empty-lines 使用 maxEOF 和/或 no-trailing-spaces。

错误 代码示例：
```js
/*eslint eol-last: ["error", "always"]*/

function doSmth() {
  var foo = 2;
}
```

正确 代码示例：
```js
/*eslint eol-last: ["error", "always"]*/

function doSmth() {
  var foo = 2;
}\n
```

### Options
该规则有一个字符串选项：

"always" (默认) 强制使用换行 (LF)
"never" 强制文件末尾不要有换行符
"unix" (弃用) 等效于 “always”
"windows" (弃用) 等效于 “always”，但是自动修复时将使用回车换行 (CRLF)
弃用："unix" 和 "windows" 选项已被弃用。 如果你需要强制一种指定的换行风格，结合 linebreak-style 规则一起使用。

### Version
该规则在 ESLint 0.7.1 被引入。
