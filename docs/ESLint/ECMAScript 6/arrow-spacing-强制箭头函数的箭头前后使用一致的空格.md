## 要求箭头函数的箭头之前或之后有空格 (arrow-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

该该规则规范化箭头函数的箭头(=>)之前或之后的空格风格。
```js
/*eslint-env es6*/

// { "before": true, "after": true }
(a) => {}

// { "before": false, "after": false }
(a)=>{}
```

### Rule Details
该规则有一个对象参数，属性为before 和 after，对应的值为布尔类型的值。

默认配置为 { "before": true, "after": true }。

true 意味着应该有 一个或多个空格，false意味着 没有空格。

默认选项 { "before": true, "after": true } 的 错误 代码示例：
```js
/*eslint arrow-spacing: "error"*/
/*eslint-env es6*/

()=> {};
() =>{};
(a)=> {};
(a) =>{};
a =>a;
a=> a;
()=> {'\n'};
() =>{'\n'};
```

默认选项 { "before": true, "after": true } 的 正确 代码示例：
```js
/*eslint arrow-spacing: "error"*/
/*eslint-env es6*/

() => {};
(a) => {};
a => a;
() => {'\n'};
```

选项 { "before": false, "after": false } 的 错误 代码示例：
```js
/*eslint arrow-spacing: ["error", { "before": false, "after": false }]*/
/*eslint-env es6*/

() =>{};
(a) => {};
()=> {'\n'};
```

选项 { "before": false, "after": false } 的 正确 代码示例：
```js
/*eslint arrow-spacing: ["error", { "before": false, "after": false }]*/
/*eslint-env es6*/

()=>{};
(a)=>{};
()=>{'\n'};
```

选项 { "before": false, "after": true } 的 错误 代码示例：
```js
/*eslint arrow-spacing: ["error", { "before": false, "after": true }]*/
/*eslint-env es6*/

() =>{};
(a) => {};
()=>{'\n'};
```

选项 { "before": false, "after": true } 的 正确 代码示例：
```js
/*eslint arrow-spacing: ["error", { "before": false, "after": true }]*/
/*eslint-env es6*/

()=> {};
(a)=> {};
()=> {'\n'};
```

### Version
该规则在 ESLint 1.0.0-rc-1 中被引入。

