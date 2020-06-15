## 禁用 continue (no-continue)

continue 语句终止当前的循环的此次迭代或带标签的循环，执行循环中的下一个迭代。不正确的使用会降低代码可测性、可读性以及可维护性。应使用结构化的控制语句如 if 来代替。
```js
var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue;
    }

    a += i;
}
```

### Rule Details
该规则禁止使用 continue 语句。

错误 代码示例：
```js
/*eslint no-continue: "error"*/

var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue;
    }

    a += i;
}
/*eslint no-continue: "error"*/

var sum = 0,
    i;

labeledLoop: for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue labeledLoop;
    }

    a += i;
}
```

正确 代码示例：
```js
/*eslint no-continue: "error"*/

var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i < 5) {
       a += i;
    }
}
```

### Version
该规则在 ESLint 0.19.0 被引入。
