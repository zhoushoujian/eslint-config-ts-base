## 不允许改变用const声明的变量 (no-const-assign)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

我们不能修改使用const关键字声明的变量。 它会引发一个运行时错误。

非 ES2015 环境下，它只是可能被忽略。

### Rule Details
该规则旨在标记修改用const关键字声明的变量。

错误 代码示例：
```js
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
a = 1;
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
a += 1;
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
++a;
```

正确 代码示例：
```js
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
console.log(a);
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

for (const a in [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
    console.log(a);
}
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

for (const a of [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
    console.log(a);
}
```

### When Not To Use It
如果你不想收到有关修改用const关键字声明的变量的通知，你可以禁用此规则。

### Version
该规则在 ESLint 1.0.0-rc-1 中被引入。

