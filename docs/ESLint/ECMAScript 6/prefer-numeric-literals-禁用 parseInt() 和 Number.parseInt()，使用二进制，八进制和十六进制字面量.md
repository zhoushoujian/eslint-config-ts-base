## 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量 (prefer-numeric-literals)

（可修复的）--fix 命令行选项可自动修复一些该规则反映的问题。

parseInt() 和 Number.parseInt() 函数可用于将二进制，八进制和十六进制的字符串转为整数。由于 ES6 支持二进制，八进制，和十六进制字面量，所以该规则鼓励使用这些数字字面量而不是 parseInt()。

0b111110111 === 503;
0o767 === 503;

### Rule Details
该规则不允许调用有两个参数的 parseInt() 或 Number.parseInt()：一个字符串和一个2（进制），8（进制），或16（进制）的基数选项。

错误 代码示例：
```js
/*eslint prefer-numeric-literals: "error"*/

parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;
parseInt("1F7", 16) === 503;
Number.parseInt("111110111", 2) === 503;
Number.parseInt("767", 8) === 503;
Number.parseInt("1F7", 16) === 503;
```

正确 代码示例：
```js
/*eslint prefer-numeric-literals: "error"*/
/*eslint-env es6*/

parseInt(1);
parseInt(1, 3);
Number.parseInt(1);
Number.parseInt(1, 3);

0b111110111 === 503;
0o767 === 503;
0x1F7 === 503;

a[parseInt](1,2);

parseInt(foo);
parseInt(foo, 2);
Number.parseInt(foo);
Number.parseInt(foo, 2);
```

### When Not To Use It
如果你想允许使用 parseInt() 或 Number.parseInt() 处理二进制，八进制，或十六进制整数。如果你不使用 ES6 （因为 ES5 及以下版本不支持二进制和八进制字面量）可以不启用该规则。

### Version
该规则在 ESLint 3.5.0 中被引入。
