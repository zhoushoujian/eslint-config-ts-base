## 禁止 case 语句落空 (no-fallthrough)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

在 JavaScript 中，switch 语句是一种比较容易出错的结构，在某种程度上这要归功于 case 的落空能力。比如：
```js
switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomethingElse();
}
```

在这个例子中，如果 foo 值为 1，两个 case 语句都会执行。你可以使用 break 阻止这种情况，例如以下例子：
```js
switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomethingElse();
}
```

当你不想要落空时是没有问题的，但是，如果落空是有意为之呢，没有办法来表明这一点。使用匹配 /falls?\s?through/i 的正则表达式的注释来表明落空是有意为之的，，被认为是一个最佳实际。
```js
switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1:
        doSomething();
        // fall through

    case 2:
        doSomethingElse();
}

switch(foo) {
    case 1:
        doSomething();
        // fallsthrough

    case 2:
        doSomethingElse();
}
```

在这个例子中，不会再引起困惑。很明显，第一个 case 的意思是要落空到第二个 case。

### Rule Details
该规则旨在消除非故意 case 落空行为。因此，它会标记处没有使用注释标明的落空情况。

错误 代码示例：
```js
/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomething();
}
```

正确 代码示例：
```js
/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
}

function bar(foo) {
    switch(foo) {
        case 1:
            doSomething();
            return;

        case 2:
            doSomething();
    }
}

switch(foo) {
    case 1:
        doSomething();
        throw new Error("Boo!");

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomething();
}
```

注意，在上面的例子中，最后的 case 语句，不会引起警告，因为没有可落空的语句了。

### Options
该规则接受单个选项参数：

设置 commentPattern 选项为一个正则表达式字符串，来改变对有意为之的落空注释的检索
```commentPattern```
选项 { "commentPattern": "break[\\s\\w]*omitted" } 的 正确 代码示例：

/*eslint no-fallthrough: ["error", { "commentPattern": "break[\\s\\w]*omitted" }]*/
```js
switch(foo) {
    case 1:
        doSomething();
        // break omitted

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // caution: break is omitted intentionally

    default:
        doSomething();
}
```

### When Not To Use It
如果你不想强制每个 case 语句中都要以 throw、return、break或者注释作为结束，你可以关闭此规则。

### Version
该规则在 ESLint 0.0.7 中被引入。
