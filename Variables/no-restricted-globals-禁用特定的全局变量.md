## 禁用特定的全局变量 (no-restricted-globals)

如果你通过启用一个环境想允许使用一组全局变量，但想禁用其中的一部分，那么该规则会很有用。

例如，早期的 IE 版本暴露了当前 DOM 事件 event 作为一个全局变量，但是使用这个变量长时间内被认为不是一个好的实践。限制它的使用需要确保这个变量没有被用在浏览器端的代码中。

### Rule Details
该规则允许你指定你不想在你的应用中使用的全局变量的名称。

### Options
该规则包含一个字符串列表，每个字符串都是全局受限的。
```js
{
    "rules": {
        "no-restricted-globals": ["error", "event", "fdescribe"]
    }
}
```

另外，该规则也接收一个对象选项，指定全局变量名和可选的自定义消息：
```js
{
    "rules": {
        "no-restricted-globals": [
            "error",
            {
                "name": "event",
                "message": "Use local parameter instead."
            },
            {
                "name": "fdescribe",
                "message": "Do not commit fdescribe. Use describe instead."
            }
        ]
    }
}
```

全局变量 "event", "fdescribe" 的 错误 代码示例：
```js
/*global event, fdescribe*/
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

function onClick() {
    console.log(event);
}

fdescribe("foo", function() {
});
```

全局变量 "event" 的 正确 代码示例：
```js
/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

import event from "event-module";
/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

var event = 1;
"event" 全局变量名和一个自定义的错误消息的 错误 代码示例：

/*global event*/
/* eslint no-restricted-globals: ["error", { name: "error", message: "Use local parameter instead." }] */

function onClick() {
    console.log(event);    // Unexpected global variable 'event'. Use local parameter instead.
}
```

### Version
该规则在 ESLint 2.3.0 中被引入。

