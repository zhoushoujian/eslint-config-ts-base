## 禁止 if 语句作为唯一语句出现在 else 语句块中 (no-lonely-if)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

如果 if 语句作为唯一的语句出现在 else 语句块中，往往使用 else if 形式会使代码更清晰。
```js
if (foo) {
    // ...
} else {
    if (bar) {
        // ...
    }
}
```

应该被重写为：
```js
if (foo) {
    // ...
} else if (bar) {
    // ...
}
```

### Rule Details
该规则禁止 if 语句作为唯一语句出现在 else 语句块中。

错误 代码示例：
```js
/*eslint no-lonely-if: "error"*/

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    }
}

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    } else {
        // ...
    }
}
```

正确 代码示例：
```js
/*eslint no-lonely-if: "error"*/

if (condition) {
    // ...
} else if (anotherCondition) {
    // ...
}

if (condition) {
    // ...
} else if (anotherCondition) {
    // ...
} else {
    // ...
}

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    }
    doSomething();
}
```
### When Not To Use It
如果不使用else if也能使代码比较清晰，禁用此规则即可。

### Version
该规则在 ESLint 0.6.0 中被引入。

