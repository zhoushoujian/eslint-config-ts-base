## 禁用未使用过的标签 (no-unused-labels)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

只声明却没有使用的标签可能是由于不完全的重构造成的错误。
```js
OUTER_LOOP:
for (const student of students) {
    if (checkScores(student.scores)) {
        continue;
    }
    doSomething(student);
}
```

在这个例子中，可能是忘记了移除 OUTER_LOOP: 。这样的标签不仅占据代码空间，而且会使读者感到迷惑。

### Rule Details
该规则旨在消除未使用过的标签。

错误 代码示例：
```js
/*eslint no-unused-labels: "error"*/

A: var foo = 0;

B: {
    foo();
}

C:
for (let i = 0; i < 10; ++i) {
    foo();
}
```

正确 代码示例：
```js
/*eslint no-unused-labels: "error"*/

A: {
    if (foo()) {
        break A;
    }
    bar();
}

B:
for (let i = 0; i < 10; ++i) {
    if (foo()) {
        break B;
    }
    bar();
}
```

### When Not To Use It
如果你不想收到关于未使用的标签的通知，禁用此规则即可。

### Version
该规则在 ESLint 2.0.0-rc.0 中被引入。
