## 强制块语句的最大可嵌套深度 (max-depth)
很多开发者认为如果块语句嵌套深度超过某个值，代码就很难阅读。

### Rule Details
该规则强制块语句的最大可嵌套深度来降低代码的复杂性。

### Options
该规则有一个数字或对象选项：

"max" (默认 4) 强制块语句的最大可嵌套深度
已弃用： maximum 属性已弃用；请使用 max 属性。

```max```
默认选项 { "max": 4 } 的 错误 代码示例：
```js
/*eslint max-depth: ["error", 4]*/
/*eslint-env es6*/

function foo() {
    for (;;) { // Nested 1 deep
        let val = () => (param) => { // Nested 2 deep
            if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                    if (true) { // Nested 5 deep
                    }
                }
            }
        };
    }
}
```

默认选项 { "max": 4 } 的 正确 代码示例：
```js
/*eslint max-depth: ["error", 4]*/
/*eslint-env es6*/

function foo() {
    for (;;) { // Nested 1 deep
        let val = () => (param) => { // Nested 2 deep
           if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                }
            }
        };
    }
}
```

### Version
该规则在 ESLint 0.0.9 中被引入。
