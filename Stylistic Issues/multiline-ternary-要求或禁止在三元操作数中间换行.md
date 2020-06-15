## 求或禁止在三元操作数中间换行 (multiline-ternary)

JavaScript 允许三元操作数之间有换行，可以提高程序的可读性。

例如：
```js
var foo = bar > baz ? value1 : value2;
```

上面的代码可以重写为以下形式，来提高可读性，更加清晰的描述三元操作数。
```js
var foo = bar > baz ?
    value1 :
    value2;
```

### Rule Details
该规则强制或禁止在三元操作数之间有换行。注意：操作符的位置不是该规则强制的。如果你对操作符的位置感兴趣，可以查看operator-linebreak。

### Options
该规则有一个字符串选项：

"always" (默认) 强制三元操作数之间有换行。
"always-multiline" 如果表达式跨越多个行，则在三元表达式的操作数之间强制换行。
"never" 禁止三元操作数之间有换行 (强制整个三元表达式在同一行).
```always```
这是默认选项：

默认选项 "always" 的 错误 代码示例：
```js
/*eslint multiline-ternary: ["error", "always"]*/

foo > bar ? value1 : value2;

foo > bar ? value :
    value2;

foo > bar ?
    value : value2;
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint multiline-ternary: ["error", "always"]*/

foo > bar ?
    value1 :
    value2;

foo > bar ?
    (baz > qux ?
        value1 :
        value2) :
    value3;
```

```always-multiline```
```js
/*eslint multiline-ternary: ["error", "always-multiline"]*/

foo > bar ? value1 :
    value2;

foo > bar ?
    value1 : value2;

foo > bar &&
    bar > baz ? value1 : value2;
```

Examples of correct code for this rule with the "always-multiline" option:
```js
/*eslint multiline-ternary: ["error", "always-multiline"]*/

foo > bar ? value1 : value2;

foo > bar ?
    value1 :
    value2;

foo > bar ?
    (baz > qux ? value1 : value2) :
    value3;

foo > bar ?
    (baz > qux ?
        value1 :
        value2) :
    value3;

foo > bar &&
    bar > baz ?
        value1 :
        value2;
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint multiline-ternary: ["error", "never"]*/

foo > bar ? value :
    value2;

foo > bar ?
    value : value2;

foo >
    bar ?
    value1 :
    value2;
```

选项 "never" 的 正确 代码示例：
```js
/*eslint multiline-ternary: ["error", "never"]*/

foo > bar ? value1 : value2;

foo > bar ? (baz > qux ? value1 : value2) : value3;
```

### When Not To Use It
如果你对三元操作数是否有换行没有严格约定，你可以禁用此规则。

### Version
该规则在 ESLint 3.1.0 中被引入。
