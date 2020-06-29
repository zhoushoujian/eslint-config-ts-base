## 强制操作符使用一致的换行符风格 (operator-linebreak)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

当一条语句太长不能放在一行时，换行符一般插入到分离表达式的操作符后面。第一种想到的风格是把操作符放在行末，紧跟在英文标点符号规则之后。
```js
var fullHeight = borderTop +
                 innerHeight +
                 borderBottom;
```
一些开发者发现，将操作符放在行首位置使代码更具可读性。
```js
var fullHeight = borderTop
               + innerHeight
               + borderBottom;
```

### Rule Details
该规则旨在强制一个特定的换行符风格。

### Options
该规则有一个可选项，可以是字符串或对象：

字符串选项：

"after" 要求把换行符放在操作符后面
"before" 要求把换行符放在操作符前面
"none" 禁止在操作前后有换行符
对象选项：

"overrides" 覆盖对指定的操作的全局设置
默认配置为 "after", { "overrides": { "?": "before", ":": "before" } }

```after```
默认选项 "after" 的 错误 代码示例：
```js
/*eslint operator-linebreak: ["error", "after"]*/

foo = 1
+
2;

foo = 1
    + 2;

foo
    = 5;

if (someCondition
    || otherCondition) {
}

answer = everything
  ? 42
  : foo;
```

默认选项 "after" 的 正确 代码示例：
```js
/*eslint operator-linebreak: ["error", "after"]*/

foo = 1 + 2;

foo = 1 +
      2;

foo =
    5;

if (someCondition ||
    otherCondition) {
}

answer = everything ?
  42 :
  foo;
```

```before```
选项 "before" 的 错误 代码示例：
```js
/*eslint operator-linebreak: ["error", "before"]*/

foo = 1 +
      2;

foo =
    5;

if (someCondition ||
    otherCondition) {
}

answer = everything ?
  42 :
  foo;
```

选项 "before" 的 正确 代码示例：
```js
/*eslint operator-linebreak: ["error", "before"]*/

foo = 1 + 2;

foo = 1
    + 2;

foo
    = 5;

if (someCondition
    || otherCondition) {
}

answer = everything
  ? 42
  : foo;
```

```none```
选项 "none" 的 错误 代码示例：
```js
/*eslint operator-linebreak: ["error", "none"]*/

foo = 1 +
      2;

foo = 1
    + 2;

if (someCondition ||
    otherCondition) {
}

if (someCondition
    || otherCondition) {
}

answer = everything
  ? 42
  : foo;

answer = everything ?
  42 :
  foo;
```

选项 "none" 的 正确 代码示例：
```js
/*eslint operator-linebreak: ["error", "none"]*/

foo = 1 + 2;

foo = 5;

if (someCondition || otherCondition) {
}

answer = everything ? 42 : foo;
```

```overrides```
选项 { "overrides": { "+=": "before" } } 的 正确 代码示例：
```js
/*eslint operator-linebreak: ["error", "after", { "overrides": { "+=": "before" } }]*/

var thing = 'thing';
thing
  += 's';
```

选项 { "overrides": { "?": "ignore", ":": "ignore" } } 的 正确 代码示例：
```js
/*eslint operator-linebreak: ["error", "after", { "overrides": { "?": "ignore", ":": "ignore" } }]*/

answer = everything ?
  42
  : foo;

answer = everything
  ?
  42
  :
  foo;
```

### When Not To Use It
如果你的项目不使用一种通用的换行符风格，可以关闭此规则。

### Version
该规则在 ESLint 0.19.0 中被引入。
