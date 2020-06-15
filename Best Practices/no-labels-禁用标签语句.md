## 禁用标签语句 (no-labels)

JavaScript 中的标签语句连同 break 和 continue 一样用来控制循环流程。例如：
```js
outer:
    while (true) {

        while (true) {
            break outer;
        }
    }
```

break outer 语句确保代码不会无限循环，因为应用 outer 标签之后，将会进入下一条语句。如果这个语句变为 break，控制流程会回到外层 while 语句，并会导致无限循环。

虽然在某些情况下很方便，标签往往很少使用，很多人不赞成将标签作为一种复杂流程控制的补救措施。

### Rule Details
此规则旨在消除 JavaScript 中标签的使用。当遇到标签语句时，该规则将发出警告。

错误 代码示例：
```js
/*eslint no-labels: "error"*/

label:
    while(true) {
        // ...
    }

label:
    while(true) {
        break label;
    }

label:
    while(true) {
        continue label;
    }

label:
    switch (a) {
    case 0:
        break label;
    }

label:
    {
        break label;
    }

label:
    if (a) {
        break label;
    }
```

正确 代码示例：
```js
/*eslint no-labels: "error"*/

var f = {
    label: "foo"
};

while (true) {
    break;
}

while (true) {
    continue;
}
```

### Options
以下选项允许在循环和 switch 语句中使用标签。

"allowLoop" (boolean，默认是 false) - 如果这个选项被设置为 true，该规则忽略循环语句中的标签。
"allowSwitch" (boolean，默认是 false) - 如果这个选项被设置为 true，该规则忽略 switch 语句中的标签。
实际上，在 JavaScript 中，标签语句可以用在除循环和 switch语句之外的地方。然而，这种方式是非常罕见的，所以会令开发中感到困惑。

```allowLoop```
选项 { "allowLoop": true } 的 正确 代码示例：
```js
/*eslint no-labels: ["error", { "allowLoop": true }]*/

label:
    while (true) {
        break label;
    }
```

```allowSwitch```
选项 { "allowSwitch": true } 的 正确 代码示例：
```js
/*eslint no-labels: ["error", { "allowSwitch": true }]*/

label:
    switch (a) {
        case 0:
            break label;
    }
```

### When Not To Use It
如果你需要在任何地方都使用标签语句，你可以禁用此规则。

### Version
该规则在 ESLint 0.4.0 中被引入。
