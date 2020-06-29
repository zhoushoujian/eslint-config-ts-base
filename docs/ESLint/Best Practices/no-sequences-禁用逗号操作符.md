## 不允许使用逗号操作符 (no-sequences)

逗号操作符包含多个表达式，其中只有一个是可使用的。它从左到右计算每一个操作数并且返回最后一个操作数的值。然而，这往往掩盖了它的副作用，它的使用经常会发生事故。例如：
```js
var a = (3, 5); // a = 5

a = b += 5, a + b;

while (a = next(), a && a.length);

(0, eval)("doSomething();");
```

### Rule Details
此规则禁止逗号操作符的使用，以下情况除外：

在初始化或者更新部分 for 语句时。
如果表达式序列被明确包裹在括号中。

错误 代码示例：
```js
/*eslint no-sequences: "error"*/

foo = doSomething(), val;

0, eval("doSomething();");

do {} while (doSomething(), !!test);

for (; doSomething(), !!test; );

if (doSomething(), !!test);

switch (val = foo(), val) {}

while (val = foo(), val < 42);

with (doSomething(), val) {}
```

正确 代码示例：
```js
/*eslint no-sequences: "error"*/

foo = (doSomething(), val);

(0, eval)("doSomething();");

do {} while ((doSomething(), !!test));

for (i = 0, j = 10; i < j; i++, j--);

if ((doSomething(), !!test));

switch ((val = foo(), val)) {}

while ((val = foo(), val < 42));

// with ((doSomething(), val)) {}
```

### When Not To Use It
如果逗号操作符在有序的表达式中使用是可接受的，禁用此规则。另一种情况是，你可能希望报告逗号操作符的所有用法，即使它们是用在括号或for 循环中。你可以使用 no-restricted-syntax 规则实现此功能：
```js
{
    "rules": {
        "no-restricted-syntax": ["error", "SequenceExpression"]
    }
}
```

Version
该规则在 ESLint 0.5.1 中被引入。

