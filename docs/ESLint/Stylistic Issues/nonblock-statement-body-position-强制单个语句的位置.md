## 强制单个语句的位置 (nonblock-statement-body-position)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

当写 if、else、while、do-while 和 for 语句时，可以是单个语句而不是一个块。为这些单语句强制一个一致的位置会很有用。

例如，一些开发者避免像下面这样写代码：
```js
if (foo)
  bar();
```
如果开发试图给 if 语句添加 baz();，他们可能会将代码错误的改为：
```js
if (foo)
  bar();
  baz(); // this line is not in the `if` statement!
```
为了避免这个问题，可能需要要求所有的单行 if 语句直接出现条件之后，不需要换行：
```js
if (foo) bar();
```

### Rule Details
该规则旨在对单行语句强制使用一致的位置。

注意，该规则不会强制使用单行语句。如果你想要禁用单行语句，使用规则 curly。

### Options
该规则接受一个字符串选项：

"beside" (默认) 禁止单行语句之前有换行。
"below" 要求单行语句之前有换行。
"any" 不强制单行语句的位置。
另外，该规则接受一个对象选项，有一个 "overrides" 属性。可以用来为特定的语句指定一个位置，以覆盖默认值。例如：

"beside", { "overrides": { "while": "below" } } 要求所有单行语句与其父节点出现在同一行，除非父节点是一个 while 语句，在这种情况下，单行语句出现必须在不同的行。
"below", { "overrides": { "do": "any" } } 禁止所有单行语句与其父节点出现在同一行，除非父节点是一个 do-while 语句，在这种情况下，单行语句的位置不是强制的。
默认选项 "beside" 的 错误 代码示例：
```js
/* eslint nonblock-statement-body-position: ["error", "beside"] */

if (foo)
  bar();
else
  baz();

while (foo)
  bar();

for (let i = 1; i < foo; i++)
  bar();

do
  bar();
while (foo)
```

默认选项 "beside" 的 正确 代码示例：
```js
/* eslint nonblock-statement-body-position: ["error", "beside"] */

if (foo) bar();
else baz();

while (foo) bar();

for (let i = 1; i < foo; i++) bar();

do bar(); while (foo)

if (foo) { // block statements are always allowed with this rule
  bar();
} else {
  baz();
}
```

默认选项 "below" 的 错误 代码示例：
```js
/* eslint nonblock-statement-body-position: ["error", "below"] */

if (foo) bar();
else baz();

while (foo) bar();

for (let i = 1; i < foo; i++) bar();

do bar(); while (foo)
```

默认选项 "below" 的 正确 代码示例：
```js
/* eslint nonblock-statement-body-position: ["error", "below"] */

if (foo)
  bar();
else
  baz();

while (foo)
  bar();

for (let i = 1; i < foo; i++)
  bar();

do
  bar();
while (foo)

if (foo) {
  // Although the second `if` statement is on the same line as the `else`, this is a very common
  // pattern, so it's not checked by this rule.
} else if (bar) {
}
```

选项 "beside", { "overrides": { "while": "below" } } 的 错误 代码示例：
```js
/* eslint nonblock-statement-body-position: ["error", "beside", { "overrides": { "while": "below" } }] */

if (foo)
  bar();

while (foo) bar();
```

选项 "beside", { "overrides": { "while": "below" } } 的 正确 代码示例：
```js
/* eslint nonblock-statement-body-position: ["error", "beside", { "overrides": { "while": "below" } }] */

if (foo) bar();

while (foo)
  bar();
```

### When Not To Use It
如果你不关心单行语句的位置的一致性，你可以关闭此规则。如果你在 curly 规则中使用了 "all" 选项，你也可以禁用此规则，因为它将会禁用所有的单行语句。

### Version
该规则在 ESLint 3.17.0 中被引入。

