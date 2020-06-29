## 禁止使用特定的语法 (no-restricted-syntax)

JavaScript 有很多语言特征，并不是每个人都喜欢所有的特征。因此，一些项目选择完全禁用某些特定的语言特征。例如，你可以禁止 try-catch 或 class 的使用，或者你可以决定是否禁用 in 操作符。

这个规则不是为你想要关闭的每个语言特性创建单独的规则，而是允许您配置你想要限制使用的语法元素。这些元素为(ESTree)(https://github.com/estree/estree)的节点类型。例如，函数声明由 FunctionDeclaration 表示，with 语句由 WithStatement 表示。你会发现 AST 节点名称的完整列表可以使用 (GitHub)(https://github.com/eslint/espree/blob/master/lib/ast-node-types.js) 和使用(在线解析器)(https://eslint.org/parser/)，查看代码包含什么类型的节点。

你也可以指定AST 选择器来进行限制，允许对语法模式进行更精确的控制。

### Rule Details
该规则禁止使用特定的（由用户来指定）语法。

### Options
该规则有一个选项，是个字符串列表，列表中的每个字符串都是一个 AST 选择器。
```js
{
    "rules": {
        "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"]
    }
}
```
另外，该规则还接受对象作为选项，指定选择器和可选的自定义消息：
```js
{
    "rules": {
        "no-restricted-syntax": [
            "error",
            {
                "selector": "FunctionExpression",
                "message": "Function expressions are not allowed."
            },
            {
                "selector": "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
                "message": "setTimeout must always be invoked with two arguments."
            }
        ]
    }
}
```
如果使用 message 属性指定了一个自定义消息，ESLint 在报告 selector 属性中指定的语法时将使用该消息。

字符串选项和对象格式的选项可以自由的根据需要混合使用。

选项 "FunctionExpression", "WithStatement", BinaryExpression[operator='in'] 的 错误 代码示例：
```js
/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */

with (me) {
    dontMess();
}

var doSomething = function () {};

foo in bar;
```

选项 "FunctionExpression", "WithStatement" 的 正确 代码示例：
```js
/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */

me.dontMess();

function doSomething() {};

foo instanceof bar;
```

### When Not To Use It
如果你不想限制你的代码使用 JavaScript 任何的特征或语法，不应使用此规则。

### Version
该规则在 ESLint 1.4.0 中被引入。

