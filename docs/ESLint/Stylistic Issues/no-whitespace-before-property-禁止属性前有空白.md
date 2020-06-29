## 禁止属性前有空白 (no-whitespace-before-property)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

JavaScript 允许在对象和它们的属性中间存在空白。然而，不一致的空格会使代码难以阅读，而且可能导致出错。
```js
foo. bar .baz . quz
```

### Rule Details
该规则禁止在点号周围或对象属性之前的左括号前出现空白。如果对象和属性不在同一行上，这种情况，该规则允许使用空白，因为对级联的属性增加新行是一种很普遍的行为。
```js
foo
  .bar()
  .baz()
  .qux()
```
错误 代码示例：
```js
/*eslint no-whitespace-before-property: "error"*/

foo [bar]

foo. bar

foo .bar

foo. bar. baz

foo. bar()
  .baz()

foo
  .bar(). baz()
```

正确 代码示例：
```js
/*eslint no-whitespace-before-property: "error"*/

foo.bar

foo[bar]

foo[ bar ]

foo.bar.baz

foo
  .bar().baz()

foo
  .bar()
  .baz()

foo.
  bar().
  baz()
```

### When Not To Use It
如果你并不关心点号操作符周围的空白或者在与对象属性在同一行的左括号之前的空白，你可以关闭此规则。

### Version
该规则在 ESLint 2.0.0-beta.1 中被引入。
