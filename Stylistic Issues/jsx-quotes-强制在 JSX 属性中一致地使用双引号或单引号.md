## 强制在 JSX 属性中使用一致的单引号或双引号 (jsx-quotes)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

JSX 的属性可以包含由单引号或双引号分隔的字符串字面量。
```js
<a b='c' />
<a b="c" />
```

不同于 Javascript 中的字符串字面量，JSX 属性中字符串字面量不能包含转义的引号

如果你想在 JSX 的属性中使用双引号，你必须使用单引号作为字符串分隔符。
```js
<a b="'" />
<a b='"' />
```

### Rule Details
该规则强制在 JSX 属性中使用一致的单引号或双引号。

### Options
该规则有一个字符串选项：

"prefer-double" (默认) 强制所有不包含双引号的 JSX 属性值使用双引号。
"prefer-single" 强制所有不包含单引号的 JSX 属性值使用单引号。
```prefer-double```
默认选项 "prefer-double" 的 错误 代码示例：
```js
/*eslint jsx-quotes: ["error", "prefer-double"]*/

<a b='c' />
```

默认选项 "prefer-double" 的 正确 代码示例：
```js
/*eslint jsx-quotes: ["error", "prefer-double"]*/

<a b="c" />
<a b='"' />
```

```prefer-single```
选项 "prefer-single" 的 错误 代码示例：
```js
/*eslint jsx-quotes: ["error", "prefer-single"]*/

<a b="c" />
```

选项 "prefer-single" 的 正确 代码示例：
```js
/*eslint jsx-quotes: ["error", "prefer-single"]*/

<a b='c' />
<a b="'" />
```

### When Not To Use It
如果你不使用 JSX 或者不关心 JSX 属性中引号使用的一致性，关闭此规则即可。

### Version
该规则在 ESLint 1.4.0 中被引入。
