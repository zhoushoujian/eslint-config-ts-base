## 禁止对原生对象或只读的全局对象进行赋值 (no-global-assign)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

JavaScript 环境包含很多内置的全局变量，比如浏览器环境的 window 和 Node.js 中的 process。在几乎所有情况下，你都不希望给全局变量赋值，因为这样做可能会到导致无法访问到重要的功能。例如，你可能不想在浏览器代码中这样做：
```js
window = {};
```

虽然像 window 这样的例子很明显，但是 JavaScript 环境还提供了数百个内置全局对象。很难知道你是否对一个去全局变量进行了赋值。

### Rule Details
该规则禁止修改只读的全局变量。

ESLint 可以配置全局变量为只读。

Specifying Environments
Specifying Globals
错误 代码示例：
```js
/*eslint no-global-assign: "error"*/

Object = null
undefined = 1
/*eslint no-global-assign: "error"*/
/*eslint-env browser*/

window = {}
length = 1
top = 1
/*eslint no-global-assign: "error"*/
/*globals a:false*/

a = 1
```

正确 示例：
```js
/*eslint no-global-assign: "error"*/

a = 1
var b = 1
b = 2
/*eslint no-global-assign: "error"*/
/*eslint-env browser*/

onload = function() {}
/*eslint no-global-assign: "error"*/
/*globals a:true*/

a = 1
```

### Options
该规则接受一个 exceptions 选项，可以用来指定允许进行赋值的内置对象列表：
```js
{
    "rules": {
        "no-global-assign": ["error", {"exceptions": ["Object"]}]
    }
}
```

### When Not To Use It
如果你打算覆盖一个原生对象，你可以不使用此规则。

### Version
该规则在 ESLint 3.3.0 中被引入。
