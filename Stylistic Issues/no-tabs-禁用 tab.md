## 禁用 tab (no-tabs)
一些风格指南不允许使用 tab 字符，包括在注释内。

### Rule Details
该规则查找文件中任何位置的 tab：代码，注释或其他。

错误 代码示例：
```js
var a \t= 2;

/**
* \t\t it's a test function
*/
function test(){}

var x = 1; // \t test
```

正确 代码示例：
```js
var a = 2;

/**
* it's a test function
*/
function test(){}

var x = 1; // test
```

### Options
该规则有一个可选的对象选项，具有以下属性:

allowIndentationTabs (默认: false)：如果将此设置为 true，则规则将不报告用于缩进的 tab。
allowIndentationTabs
选项 allowIndentationTabs: true 的 正确 代码示例：
```js
/* eslint no-tabs: ["error", { allowIndentationTabs: true }] */

function test() {
\tdoSomething();
}

\t// comment with leading indentation tab
```

### When Not To Use It
如果你已经建立了好的使用 tab 的标准，可以不启用此规则。

### Version
该规则在 ESLint 3.2.0 中被引入。
