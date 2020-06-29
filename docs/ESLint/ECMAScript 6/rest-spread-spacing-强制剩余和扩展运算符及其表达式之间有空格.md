## 强制剩余和扩展运算符及其表达式之间有空格 (rest-spread-spacing)

```命令行中的 --fix 选项可以自动修复一些该规则报告的问题。```

ES2015引入了rest和spread操作符，它们将可迭代结构扩展到各个部分。它们的一些用法例子如下:
```js
let numArr = [1, 2, 3];
function add(a, b, c) {
    return a + b + c;
}
add(...numArr); // -> 6

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.push(...arr2); // -> [1, 2, 3, 4, 5, 6]

let [a, b, ...arr] = [1, 2, 3, 4, 5];
a; // -> 1
b // -> 2
arr; // ->  [3, 4, 5]

function numArgs(...args) {
  return args.length;
}
numArgs(a, b, c); // -> 3
```

除上述之外，目前人们建议将对象的剩余和扩展属性添加到规范。使用如下：

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // -> 1
y; // -> 2
z; // -> { a: 3, b: 4 }

let n = { x, y, ...z };
n; // -> { x: 1, y: 2, a: 3, b: 4 }
```

和其他运算符一样，若允许在剩余和扩展运算符及其运算表达式之间有空格，可能导致同一个代码库的空格不一致。

### Rule Details
该规则旨在强制剩余和扩展运算符及其表达式之间保持一致的间距。该规则还支持 ES2018中的 对象剩余和扩展属性:
```js
{
    "parserOptions": {
        "ecmaVersion": 2018
    }
}
```

请阅读用户指南章节 configuring parser options 了解更多。

### Options
该规则有一个参数：值为 "never" 或 "always" 的字符串。默认值为 "never" 。

```“never”```
参数为默认值 "never" 时，扩展运算符及其表达式之间不允许有空格。
```js
rest-spread-spacing: ["error"]
```
或者
```js
rest-spread-spacing: ["error", "never"]
```

选项 "never" 的 错误 代码示例：
```js
/*eslint rest-spread-spacing: ["error", "never"]*/

fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };
```

选项 "never" 的 正确 代码示例：
```js
/*eslint rest-spread-spacing: ["error", "never"]*/

fn(...args)
[...arr, 4, 5, 6]
let [a, b, ...arr] = [1, 2, 3, 4, 5];
function fn(...args) { console.log(args); }
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
```

```“always”```
参数值为 "always" 时，扩展运算符及其表达式之间要求有空格。
```js
rest-spread-spacing: ["error", "always"]
```

选项 "always" 的 错误 代码示例：
```js
/*eslint rest-spread-spacing:["error", "always"]*/

fn(...args)
[...arr, 4, 5, 6]
let [a, b, ...arr] = [1, 2, 3, 4, 5];
function fn(...args) { console.log(args); }
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
```

选项 "always" 的 正确 代码示例：
```js
/*eslint rest-spread-spacing: ["error", "always"]*/

fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };
```

### When Not To Use It
另外，如果你不关心在剩余和扩展运算符及其表达式之间强制空格一致，可以安全地禁用该规则。

### Version
该规则在 ESLint 2.12.0 中被引入。
