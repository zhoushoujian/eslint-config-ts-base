## 禁止正则表达式字面量中出现多个空格 (no-regex-spaces)

````配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。````

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

正则表达式可以很复杂和难以理解，这就是为什么要保持它们尽可能的简单，以避免出现错误。你在使用正则表达式时最容易出错的是使用了多个空格，例如：

```js
var re = /foo   bar/;
```
在这个正则表达式中，很难断定想要匹配多少个空格。最好是只使用一个空格，然后指定需要多少个，例如：

```js
var re = /foo {3}bar/;
```
现在非常清楚地知道需要匹配 3 个空格。

### Rule Details
该规则禁止在正则表达式字面量中出现多个空格。

错误 代码示例：
```js
/*eslint no-regex-spaces: "error"*/
var re = /foo   bar/;
var re = new RegExp("foo   bar");
```

正确 代码示例：
```js
/*eslint no-regex-spaces: "error"*/
var re = /foo {3}bar/;
var re = new RegExp("foo {3}bar");
```

### When Not To Use It
如果你允许多个空格出现在正则表达式中，你可以关闭此规则。
