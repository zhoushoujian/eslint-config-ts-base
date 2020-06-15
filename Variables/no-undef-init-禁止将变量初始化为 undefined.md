## 禁用未声明的变量 (no-undef)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

此规则可帮助你定位由变量漏写、参数名漏写和意外的隐式全局变量声明所导致的潜在引用错误（比如，在 for 循环语句中初始化变量忘写 var 关键字）

### Rule Details
对任何未声明的变量的引用都会引起一个警告，除非显式地在 /*global ...*/ 注释中指定，或在 globals key in the configuration file 中指定。另一个常见的用例是，你有意使用定义在其他地方的全局变量(例如来自 HTML 的脚本)。

错误 代码示例：
```js
/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;
```

有 global 声明时，该规则的 正确 代码示例：
```js
/*global someFunction b:true*/
/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;
```

/*global */ 中的 b:true 表明对 b 继续赋值是正确的。

有 global 声明时，该规则的 错误 代码示例：
```js
/*global b*/
/*eslint no-undef: "error"*/

b = 10;
```

默认情况下，/*global */ 中声明的变量是只读的，因此对其进行赋值是错误的。

### Options
typeof 设置为 true，将对 typeof 中用到的变量发出警告（默认为false）。
```typeof```
默认选项 { "typeof": false } 的 正确 代码示例：
```js
/*eslint no-undef: "error"*/

if (typeof UndefinedIdentifier === "undefined") {
    // do something ...
}
```

如果想阻止在 typeof 运算中有未申明的变量导致的警告，可以用此项。

选项 { "typeof": true } 的 错误 代码示例：
```js
/*eslint no-undef: ["error", { "typeof": true }] */

if(typeof a === "string"){}
```

有 global 声明时，选项 { "typeof": true } 的 正确 代码示例：
```js
/*global a*/
/*eslint no-undef: ["error", { "typeof": true }] */

if(typeof a === "string"){}
```

### Environments
为了方便，ESlint 提供了预定义流行类库和运行时环境暴露的全局变量的快捷方式。该规则支持这些环境，如 指定 Environments 中列出的。使用如下：

```browser```
browser 环境下的 正确 代码示例：
```js
/*eslint no-undef: "error"*/
/*eslint-env browser*/

setTimeout(function() {
    alert("Hello");
});
```

```Node.js```
node 环境下的 正确 代码示例：
```js
/*eslint no-undef: "error"*/
/*eslint-env node*/

var fs = require("fs");
module.exports = function() {
    console.log(fs);
};
```

### When Not To Use It
如果你不需要明确声明全局变量，可以关闭此规则。

### Compatibility
该规则提供了合适对待全局变量的方法。 它在 JSHint 和JSLint。

### Version
该规则在 ESLint 0.0.9 被引入。
