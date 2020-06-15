## 强制分号前后有空格 (semi-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

JavaScript 允许你在分号前后放置不必要的空格。

禁止或强制分号周围的空格可以提高你程序的可读性。
```js
var a = "b" ;

var c = "d";var e = "f";
```

### Rule Details
该该规则旨在强制分号周围的空格。该规则防止在表达式中的分号之前使用空格。

该规则在以下情况下不会检查空格：

行首分号后面的空格
开括号 (( 或 {) 之后、分号之前的空格，或分号之后、闭括号 () 或 }) 之前的空格。这个空格被 space-in-parens 或 block-spacing 规则检查。
空条件 (for(;;)) 的 for 循环语句中分号周围的空格。

### Options
该规则有一个可选项，是个对象，有两个键 before 和 after 对应的值为布尔类型的值 true 或 false。

如果设置 before 为 true，分号之前强制有空格，如果设置为 false，分号之前禁止有空格。

如果设置 after 为 true.分号之后强制有空格，如果设置为 false，分号之后禁止有空格。

after 选项只在分号不是行尾时起作用。

默认选项为 {"before": false, "after": true}。

    "semi-spacing": ["error", {"before": false, "after": true}]
{"before": false, "after": true}
这个是默认选项，它强制分号之后有空格，禁止分号之前有空格。

错误 代码示例：
```js
/*eslint semi-spacing: "error"*/

var foo ;
var foo;var bar;
throw new Error("error") ;
while (a) { break ; }
for (i = 0 ; i < 10 ; i++) {}
for (i = 0;i < 10;i++) {}
```

正确 代码示例：
```js
/*eslint semi-spacing: "error"*/

var foo;
var foo; var bar;
throw new Error("error");
while (a) { break; }
for (i = 0; i < 10; i++) {}
for (;;) {}
if (true) {;}
;foo();
{"before": true, "after": false}
```

这个选项强制分号之前有空格，禁止分号之后有空格。

选项 {"before": true, "after": false} 的 错误 代码示例：
```js
/*eslint semi-spacing: ["error", { "before": true, "after": false }]*/

var foo;
var foo ; var bar;
throw new Error("error");
while (a) { break; }
for (i = 0;i < 10;i++) {}
for (i = 0; i < 10; i++) {}
```

选项 {"before": true, "after": false} 的 正确 代码示例：
```js
/*eslint semi-spacing: ["error", { "before": true, "after": false }]*/

var foo ;
var foo ;var bar ;
throw new Error("error") ;
while (a) {break ;}
for (i = 0 ;i < 10 ;i++) {}
```

### When Not To Use It
如果你不关心分号之前或之后的空格的一致性，你可以关闭此规则。

### Version
该规则在 ESLint 0.16.0 中被引入。
