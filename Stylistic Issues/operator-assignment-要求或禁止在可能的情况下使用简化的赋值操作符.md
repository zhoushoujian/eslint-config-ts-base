## 要求或禁止尽可能地简化赋值操作 (operator-assignment)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

JavaScript 为变量赋值和一些简单的数学运算提供了速记运算符。例如，x = x + 4 可以简化为 x += 4。支持的简化形式如下：

 Shorthand | Separate
-----------|------------
 x += y    | x = x + y
 x -= y    | x = x - y
 x *= y    | x = x * y
 x /= y    | x = x / y
 x %= y    | x = x % y
 x <<= y   | x = x << y
 x >>= y   | x = x >> y
 x >>>= y  | x = x >>> y
 x &= y    | x = x & y
 x ^= y    | x = x ^ y
 x |= y    | x = x | y

### Rule Details
该规则要求或禁止尽可能地简化赋值操作

### Options
该规则有一个字符串选项：

"always" (默认) 要求尽可能地简化赋值操作
"never" 禁止简化赋值操作
```always```
默认选项 "always" 的 错误 代码示例：
```js
/*eslint operator-assignment: ["error", "always"]*/

x = x + y;
x = y * x;
x[0] = x[0] / y;
x.y = x.y << z;
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint operator-assignment: ["error", "always"]*/

x = y;
x += y;
x = y * z;
x = (x * y) * z;
x[0] /= y;
x[foo()] = x[foo()] % 2;
x = y + x; // `+` is not always commutative (e.g. x = "abc")
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint operator-assignment: ["error", "never"]*/

x *= y;
x ^= (y + z) / foo();
```

选项 "never" 的 正确 代码示例：
```js
/*eslint operator-assignment: ["error", "never"]*/

x = x + y;
x.y = x.y / a.b;
```

### When Not To Use It
使用简化的赋值操作符是一个格式上的选择。关闭此规则将允许开发者在个案的基础上选择哪种风格更具可读性。

### Version
该规则在 ESLint 0.10.0 中被引入。

