## 要求或禁止块内填充 (padded-blocks)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些风格指南要求块语句以空行开始并且以空行结束。目标是通过块内容和周围代码视觉上地分离来提高可读性。
```js
if (a) {

    b();

}
```

代码风格统一是非常有好处的，你应总是写填充的块或永远不这么做。

### Rule Details
该规则强制块内空行填充的一致性。

### Options
此规则有两个选项，第一个可以是字符串选项或对象选项。第二个是对象选项，它允许异常。

### First option
字符串选项：

"always" (默认) 要求块语句和类的开始或末尾有空行
"never" 禁止块语句和类的开始或末尾有空行
对象选项：

"blocks" 要求或禁止块内填充
"classes" 要求或禁止类内填充
"switches" 要求或禁止在 switch 语句中填充
Second option
"allowSingleLineBlocks": true 允许单行块
```always```
默认选项 "always" 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", "always"]*/

if (a) {
    b();
}

if (a) { b(); }

if (a)
{
    b();
}

if (a) {
    b();

}

if (a) {
    // comment
    b();

}
```

默认选项 "always" 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", "always"]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    // comment
    b();

}
```

```never```
选项 "never" 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", "never"]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    b();
}

if (a) {
    b();

}
```

选项 "never" 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", "never"]*/

if (a) {
    b();
}

if (a)
{
    b();
}
```

```blocks```
选项 { "blocks": "always" } 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", { "blocks": "always" }]*/

if (a) {
    b();
}

if (a) { b(); }

if (a)
{
    b();
}

if (a) {

    b();
}

if (a) {
    b();

}

if (a) {
    // comment
    b();

}
```

选项 { "blocks": "always" } 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", { "blocks": "always" }]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    // comment
    b();

}
```

选项 { "blocks": "never" } 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", { "blocks": "never" }]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    b();
}

if (a) {
    b();

}
```

选项 { "blocks": "never" } 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", { "blocks": "never" }]*/

if (a) {
    b();
}

if (a)
{
    b();
}
```

```classes```
选项 { "classes": "always" } 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", { "classes": "always" }]*/

class  A {
    constructor(){
    }
}
```

选项 { "classes": "always" } 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", { "classes": "always" }]*/

class  A {

    constructor(){
    }

}
```

选项 { "classes": "never" } 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", { "classes": "never" }]*/

class  A {

    constructor(){
    }

}
```

选项 { "classes": "never" } 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", { "classes": "never" }]*/

class  A {
    constructor(){
    }
}
```

```switches```
选项 { "switches": "always" } 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", { "switches": "always" }]*/

switch (a) {
    case 0: foo();
}
```

选项 { "switches": "always" } 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", { "switches": "always" }]*/

switch (a) {

    case 0: foo();

}

if (a) {
    b();
}
```

选项 { "switches": "never" } 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", { "switches": "never" }]*/

switch (a) {

    case 0: foo();

}
```

选项 { "switches": "never" } 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", { "switches": "never" }]*/

switch (a) {
    case 0: foo();
}

if (a) {

    b();

}
```

```always + allowSingleLineBlocks```
选项 "always", {"allowSingleLineBlocks": true} 的 错误 代码示例：
```js
/*eslint padded-blocks: ["error", "always", { allowSingleLineBlocks: true }]*/

if (a) {
    b();
}

if (a) {

    b();
}

if (a) {
    b();

}
```

选项 "always", {"allowSingleLineBlocks": true} 的 正确 代码示例：
```js
/*eslint padded-blocks: ["error", "always", { allowSingleLineBlocks: true }]*/

if (a) { b(); }

if (a) {

    b();

}
```

### When Not To Use It
如果你并不关心块内填充的一致性，你可以关闭此规则。

### Version
该规则在 ESLint 0.9.0 中被引入。

