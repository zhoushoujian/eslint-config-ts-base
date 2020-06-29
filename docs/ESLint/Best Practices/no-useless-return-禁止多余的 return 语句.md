## 禁止多余的 return 语句 (no-useless-return)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

return; 语句是多余的，并且在函数执行过程中不会产生效果。这可能令人困惑，因此最好禁止使用这些多余的语句。

### Rule Details
该规则旨在报告多余的 return 语句。

错误 代码示例：
```js
/* eslint no-useless-return: "error" */

function foo() { return; }

function foo() {
  doSomething();
  return;
}

function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }
}

function foo() {
  switch (bar) {
    case 1:
      doSomething();
    default:
      doSomethingElse();
      return;
  }
}

```

正确 代码示例：
```js
/* eslint no-useless-return: "error" */

function foo() { return 5; }

function foo() {
  return doSomething();
}

function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }
  qux();
}

function foo() {
  switch (bar) {
    case 1:
      doSomething();
      return;
    default:
      doSomethingElse();
  }
}

function foo() {
  for (const foo of bar) {
    return;
  }
}

```

### When Not To Use It
如果你不关心禁用多余的 return 语句，那么你可以禁用此规则。

### Version
该规则在 ESLint 3.9.0 中被引入。

