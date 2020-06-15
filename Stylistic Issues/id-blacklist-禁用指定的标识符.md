## 禁止使用指定的标识符 (id-blacklist)

“There are only two hard things in Computer Science: cache invalidation and naming things.” — Phil Karlton

糟糕的名字会导致代码很难理解。通用的名字，比如 data，并不能推断出关于代码和接收到的值的更多信息。该规则允许你配置一个标识符名称的黑名单，也就是包含那些你不想在代码中看到的名字。

### Rule Details
该规则禁止在赋值语句和 function 定义中使用指定的标识符。

该规则对以下情况，将捕捉黑名单里的标识符：

变量声明
函数声明
在对象创建过程中的属性赋值
该规则对以下情况，不会捕捉黑名单里的标识符：

函数调用 (所以你仍然可以使用不受限制函数)
对象属性 (所以你仍然可以使用不受限制的对象)

### Options
该规则有一个或多个字符串选项：受限制的标识符的名称：

例如，限制通用标识符的使用：
```js
{
    "id-blacklist": ["error", "data", "err", "e", "cb", "callback"]
}
```

受限制的 "data", "callback" 标识符的 错误 代码示例：
```js
/*eslint id-blacklist: ["error", "data", "callback"] */

var data = {...};

function callback() {
    // ...
}

element.callback = function() {
    // ...
};

var itemSet = {
    data: [...]
};
```

受限制的 "data", "callback" 标识符的 正确 代码示例：
```js
/*eslint id-blacklist: ["error", "data", "callback"] */

var encodingOptions = {...};

function processFileResult() {
    // ...
}

element.successHandler = function() {
    // ...
};

var itemSet = {
    entities: [...]
};

callback(); // all function calls are ignored

foo.callback(); // all function calls are ignored

foo.data; // all property names that are not assignments are ignored
```

### When Not To Use It
如果对标识符命名没什么要求，可以关闭此规则。

### Version
该规则在 ESLint 2.0.0-beta.2 中被引入。
