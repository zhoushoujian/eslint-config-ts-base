## 强制隐式返回的箭头函数体的位置 (implicit-arrow-linebreak)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一个箭头函数体可以包含隐式的返回表达式而不是一个块。对于隐式返回的表达式强制执行一致的位置是很有用的。

### Rule Details
该规则旨在为包含隐式返回表达式的箭头函数强制执行一致的位置。

查看：

brace-style 规则
Options
该规则接收一个字符串选项：

"beside" (默认) 禁止在箭头函数体之前出现换行。
"below" 要求在箭头函数体之前出现换行。
默认选项 "beside" 的 错误 代码示例：
```js
/* eslint implicit-arrow-linebreak: ["error", "beside"] */

(foo) =>
  bar;

(foo) =>
  (bar);

(foo) =>
  bar =>
    baz;

(foo) =>
(
  bar()
);
```

默认选项 "beside" 的 正确 代码示例：
```js
/* eslint implicit-arrow-linebreak: ["error", "beside"] */

(foo) => bar;

(foo) => (bar);

(foo) => bar => baz;

(foo) => (
  bar()
);

// functions with block bodies allowed with this rule using any style
// to enforce a consistent location for this case, see the rule: `brace-style`
(foo) => {
  return bar();
}

(foo) =>
{
  return bar();
}
```

选项 "below" 的 错误 代码示例：
```js
/* eslint implicit-arrow-linebreak: ["error", "below"] */

(foo) => bar;

(foo) => (bar);

(foo) => bar => baz;
选项 "below" 的 正确 代码示例：

/* eslint implicit-arrow-linebreak: ["error", "below"] */


(foo) =>
  bar;

(foo) =>
  (bar);

(foo) =>
  bar =>
    baz;
```

### When Not To Use It
如果你不关心箭头函数中的隐式返回表达式的一致的位置，可以不启用此规则。

如果你在 arrow-body-style 规则中使用了 "always" 选项，该选项禁止在箭头函数中使用隐式返回，你也可以不启用此规则。

### Version
该规则在 ESLint 4.12.0 中被引入。
