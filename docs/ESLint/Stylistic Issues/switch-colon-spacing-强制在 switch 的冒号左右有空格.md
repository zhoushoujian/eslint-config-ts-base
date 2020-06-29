## 强制在 switch 的冒号左右有空格 (switch-colon-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

冒号左右的空格可以提高 case 和 default 子句的可读性。

### Rule Details
该规则控制在 switch 语句中的 case 和 default 子句的冒号左右的空格。该规则只检查在同一行上的连续的 token。

该规则有两个选项，值为布尔类型。
```js
{
    "switch-colon-spacing": ["error", {"after": true, "before": false}]
}
```

"after": true (默认) 要求冒号之后又一个或多个空格。
"after": false 禁止冒号之后又空格。
"before": true 要求冒号之前又一个或多个空格。
"before": false (默认) 禁止冒号之前又空格。
错误 代码示例：
```js
/*eslint switch-colon-spacing: "error"*/

switch (a) {
    case 0 :break;
    default :foo();
}
```

正确 代码示例：
```js
/*eslint switch-colon-spacing: "error"*/

switch (a) {
    case 0: foo(); break;
    case 1:
        bar();
        break;
    default:
        baz();
        break;
}
```

选项 {"after": false, "before": true} 的 错误 代码示例：
```js
/*eslint switch-colon-spacing: ["error", {"after": false, "before": true}]*/

switch (a) {
    case 0: break;
    default: foo();
}
```

选项 {"after": false, "before": true} 的 正确 代码示例：
```js
/*eslint switch-colon-spacing: ["error", {"after": false, "before": true}]*/

switch (a) {
    case 0 :foo(); break;
    case 1 :
        bar();
        break;
    default :
        baz();
        break;
}
```

### When Not To Use It
如果你不想被通知 switch 语句的冒号左右的空格，可以禁用此规则。

### Version
该规则在 ESLint 4.0.0-beta.0 中被引入。

