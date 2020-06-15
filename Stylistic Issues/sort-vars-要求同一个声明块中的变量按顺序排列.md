## 变量排序 (sort-vars)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

当在同一个语句块中定义多个变量时，一些开发者比较喜欢将变量按字母顺序排序，以便在以后的时间更容易地找到需要的变量。其他人觉得，这样变得更复杂，甚至成了维护的负担。

### Rule Details
该规则检查所有的变量声明块，并验证所有的变量都是按字母顺序排序的。

该规则的默认配置是区分大小写的。

错误 代码示例：
```js
/*eslint sort-vars: "error"*/

var b, a;

var a, B, c;

var a, A;
```

正确 代码示例：
```js
/*eslint sort-vars: "error"*/

var a, b, c, d;

var _a = 10;
var _b = 20;

var A, a;

var B, a, c;
```

按字母顺序排序是指从第一个变量开始，排除任何被认为有问题的变量。所以下面的代码会产生两个问题：
```js
/*eslint sort-vars: "error"*/

var c, d, a, b;
```

但这个，只会产生一个问题：
```js
/*eslint sort-vars: "error"*/

var c, d, a, e;
```

### Options
ignoreCase
Examples of correct code for this rule with the { "ignoreCase": true } option:
```js
/*eslint sort-vars: ["error", { "ignoreCase": true }]*/

var a, A;

var a, B, c;
```

### When Not To Use It
该规则是一个格式化偏好，不遵循它，也不会对你的代码质量产生负面影响。如果按字母顺序排序的变量不是你编码标准的一部分，那么你可以关闭此规则。

### Version
该规则在 ESLint 0.2.0 被引入。
