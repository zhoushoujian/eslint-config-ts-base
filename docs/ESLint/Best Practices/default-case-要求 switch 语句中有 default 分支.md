## 要求 Switch 语句中有 Default 分支 (default-case)

一些编码规范中，要求所有的 switch 语句中必须包含 default 分支，即使默认分支中没有任何代码，如下所示：
```js
switch (foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
        break;

    default:
        // do nothing
}
```

考虑到开发人员可能会忘记定义默认分支而导致程序发生错误，所以明确规定定义默认分支是很好的选择。

有些代码规范中允许省略掉 default 分支，但是要写明注释以说明是故意为之。如下：
```js
switch (foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
        break;

    // no default
}
```

再次指出，以上示例的前提是开发者并没有默认分支的情况需要处理。

### Rule Details
此规则的目的是在 switch 语句中强制声明 default 分支。或者也可以在最后一个 case 分支下，使用 // no default 来表明此处不需要 default 分支。注释可以任何形式出现，比如 // No Default。

错误 代码示例：
```js
/*eslint default-case: "error"*/

switch (a) {
    case 1:
        /* code */
        break;
}
```

正确 代码示例：
```js
/*eslint default-case: "error"*/

switch (a) {
    case 1:
        /* code */
        break;

    default:
        /* code */
        break;
}


switch (a) {
    case 1:
        /* code */
        break;

    // no default
}

switch (a) {
    case 1:
        /* code */
        break;

    // No Default
}
```

### Options
该规则接受单个选项参数：

设置 commentPattern 为一个正则表达式字符串，来改变默认的 /^no default$/i 注释匹配模式
commentPattern
选项 { "commentPattern": "^skip\\sdefault" } 的 正确 代码示例：
```js
/*eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }]*/

switch(a) {
    case 1:
        /* code */
        break;

    // skip default
}

switch(a) {
    case 1:
        /* code */
        break;

    // skip default case
}
```

### When Not To Use It
如果你不想要求 switch 中必须要有 default 分支，禁用此规则即可。

### Version
该规则在 ESLint 0.6.0 中被引入。
