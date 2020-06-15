## 禁用否定表达式 (no-negated-condition)

否定表达式更难以理解。如果将条件反过来，代码会更具可读性。

### Rule Details
该规则禁止在以下情况使用否定表达式：

含有 else 分支的 if 语句
三元表达式
错误 代码示例：
```js
/*eslint no-negated-condition: "error"*/

if (!a) {
    doSomething();
} else {
    doSomethingElse();
}

if (a != b) {
    doSomething();
} else {
    doSomethingElse();
}

if (a !== b) {
    doSomething();
} else {
    doSomethingElse();
}

!a ? c : b
```

正确 代码示例：
```js
/*eslint no-negated-condition: "error"*/

if (!a) {
    doSomething();
}

if (!a) {
    doSomething();
} else if (b) {
    doSomething();
}

if (a != b) {
    doSomething();
}

a ? b : c
```

### Version
该规则在 ESLint 1.6.0 中被引入。
