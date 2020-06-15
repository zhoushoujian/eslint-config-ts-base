## 要求箭头函数体使用大括号 (arrow-body-style)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

箭头函数的主题有两种语法格式。它们可以被定义为一个 块(用大括号)() => { ... } 或只用单一的表达式() => ...，隐式返回值。

### Rule Details
该规则可以强制或禁止箭头函数体使用大括号。

### Options
该规则有一到两个选项。第一个选项是个字符串，可以是：

"always" 强制在箭头函数体周围使用大括号
"as-needed" 当大括号是可以省略的，强制不使用它们 (默认)
"never" 禁止在函数体周围出现大括号 (将箭头函数限制为返回结果的表达式)

第二个选项是个对象，当第一个选项是 "as-needed"，可以进行更加细粒度的配置。目前，唯一有效的选项是一个布尔属性 requireReturnForObjectLiteral。默认为 false。如果设置为 true，它要求使用大括号，并且显示返回对象字面量。

"arrow-body-style": ["error", "always"]
```always```
选项 "always" 的 错误 代码示例：
```js
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/
let foo = () => 0;
```

选项 "always" 的 正确 代码示例：
```js
let foo = () => {
    return 0;
};
let foo = (retv, name) => {
    retv[name] = true;
    return retv;
};
```

```as-needed```
默认选项 "as-needed" 的 错误 代码示例：
```js
/*eslint arrow-body-style: ["error", "as-needed"]*/
/*eslint-env es6*/

let foo = () => {
    return 0;
};
let foo = () => {
    return {
       bar: {
            foo: 1,
            bar: 2,
        }
    };
};
```

默认选项 "as-needed" 的 正确 代码示例：
```js
/*eslint arrow-body-style: ["error", "as-needed"]*/
/*eslint-env es6*/

let foo = () => 0;
let foo = (retv, name) => {
    retv[name] = true;
    return retv;
};
let foo = () => ({
    bar: {
        foo: 1,
        bar: 2,
    }
});
let foo = () => { bar(); };
let foo = () => {};
let foo = () => { /* do nothing */ };
let foo = () => {
    // do nothing.
};
let foo = () => ({ bar: 0 });
```

```requireReturnForObjectLiteral```
该选项只适合与`“as-needed”配合使用。

选项 { "requireReturnForObjectLiteral": true } 的 错误 代码示例：
```js
/*eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }]*/
/*eslint-env es6*/
let foo = () => ({});
let foo = () => ({ bar: 0 });
```

选项 { "requireReturnForObjectLiteral": true } 的 正确 代码示例：
```js
/*eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }]*/
/*eslint-env es6*/

let foo = () => {};
let foo = () => { return { bar: 0 }; };
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint arrow-body-style: ["error", "never"]*/
/*eslint-env es6*/

let foo = () => {
    return 0;
};
let foo = (retv, name) => {
    retv[name] = true;
    return retv;
};
```

选项 "never" 的 正确 代码示例：
```js
/*eslint arrow-body-style: ["error", "never"]*/
/*eslint-env es6*/

let foo = () => 0;
let foo = () => ({ foo: 0 });
```

### Version
该规则在 ESLint 1.8.0 中被引入。

