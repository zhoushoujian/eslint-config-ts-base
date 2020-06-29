## 禁止使用内联注释 (no-inline-comments)

一些风格指南禁止注释和代码出现在同一行。如果注释紧随代码，会使代码是变得难以阅读。另一方面，将注释放在代码后面会快更明显。

### Rule Details
该规则禁止注释和代码出现在同一行。

错误 代码示例：
```js
/*eslint no-inline-comments: "error"*/

var a = 1; // declaring a to 1

function getRandomNumber(){
    return 4; // chosen by fair dice roll.
              // guaranteed to be random.
}

/* A block comment before code */ var b = 2;

var c = 3; /* A block comment after code */
```

正确 代码示例：
```js
/*eslint no-inline-comments: "error"*/

// This is a comment above a line of code
var foo = 5;

var bar = 5;
//This is a comment below a line of code
```

### Version
该规则在 ESLint 0.10.0 中被引入。
