## 强制在逗号周围使用空格 (comma-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

逗号前后的空格可以提高列表项的可读性。对于大多数语言的代码风格来说一般是在逗号之后而不是之前添加一个空格，当然你也可以在项目中按照自己的偏好决定在哪里添加空格。
```js
var foo = 1, bar = 2;
var foo = 1 ,bar = 2;
```

### Rule Details
该规则强制在变量声明、数组字面量、对象字面量、函数参数 和 序列中的逗号左右的空格的一致性。

该规则在 ArrayExpression 或 ArrayPattern 中以下两种情况下不适用：

相邻的空元素
初始化的空元素，以避免与 array-bracket-spacing 规则冲突

### Options
该规则有一个对象选项：

"before": false (默认) 禁止在逗号前使用空格
"before": true 要求在逗号前使用一个或多个空格
"after": true (默认) 要求在逗号后使用一个或多个空格
"after": false 禁止在逗号后使用空格

```after```
默认选项 { "before": false, "after": true } 的 错误 代码示例：
```js
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/

var foo = 1 ,bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b
```

默认选项 { "before": false, "after": true } 的 正确 代码示例：
```js
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/

var foo = 1, bar = 2
    , baz = 3;
var arr = [1, 2];
var arr = [1,, 3]
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}
a, b
```

当用空元素进行初始化时，默认选项 { "before": false, "after": true } 的 正确 代码示例：
```js
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/
/*eslint array-bracket-spacing: ["error", "always"]*/

var arr = [ , 2, 3 ]
```

```before```
选项 { "before": true, "after": false } 的 错误 代码示例：
```js
/*eslint comma-spacing: ["error", { "before": true, "after": false }]*/

var foo = 1, bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar", "baz": "qur"};
new Foo(a,b);
function foo(a,b){}
a, b
```

选项 { "before": true, "after": false } 的 正确 代码示例：
```js
/*eslint comma-spacing: ["error", { "before": true, "after": false }]*/

var foo = 1 ,bar = 2 ,
    baz = true;
var arr = [1 ,2];
var arr = [1 ,,3]
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b
```

当用空元素进行初始化时，选项 { "before": true, "after": false } 的 正确 代码示例：
```js
/*eslint comma-spacing: ["error", { "before": true, "after": false }]*/
/*eslint array-bracket-spacing: ["error", "never"]*/

var arr = [,2 ,3]
```

### When Not To Use It
如果你的项目不追求一致逗号间距，关闭此规则即可。

### Version
该规则在 ESLint 0.9.0 被引入。

