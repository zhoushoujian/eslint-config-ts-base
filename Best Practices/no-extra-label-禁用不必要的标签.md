## 禁用不必要的标签 (no-extra-label)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

如果一个循环中不包含嵌套循环或 switch 语句，对这样的循环使用标签是不必要的。

```js
A: while (a) {
    break A;
}
```

你可以通过移除标签，只使用 break 或 continue实现同样的结果。这些标签可能会使开发者感到困惑，因为他们可能希望使用标签跳转到更远的地方。

### Rule Details
该规则旨在消除不必要的标签。

错误 代码示例：
```js
/*eslint no-extra-label: "error"*/

A: while (a) {
    break A;
}

B: for (let i = 0; i < 10; ++i) {
    break B;
}

C: switch (a) {
    case 0:
        break C;
}
```

正确 代码示例：
```js
/*eslint no-extra-label: "error"*/

while (a) {
    break;
}

for (let i = 0; i < 10; ++i) {
    break;
}

switch (a) {
    case 0:
        break;
}

A: {
    break A;
}

B: while (a) {
    while (b) {
        break B;
    }
}

C: switch (a) {
    case 0:
        while (b) {
            break C;
        }
        break;
}
```

### When Not To Use It
如果你不想收到有关标签的使用情况的通知，关闭此规则即可。

### Version
该规则在 ESLint 2.0.0-rc.0 中被引入。
