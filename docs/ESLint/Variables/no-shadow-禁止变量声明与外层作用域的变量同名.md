## 关键字不能被遮蔽 (no-shadow-restricted-names)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

ES5 §15.1.1 中全局对象的属性值 (NaN、Infinity、undefined)和严格模式下被限定的标识符 eval、arguments 在 JavaScript 中被认为是受限制的名称。将它们定义为其他含义可能会产生意想不到的结果，并使阅读代码的其他人感到困惑。比如：
```js
var undefined = "foo";
```
那么，在相同范围内使用的任何代码都不会得到全局的 undefined，而是得到具有非常不同含义的本地版本。

### Rule Details
错误 代码示例：
```js
/*eslint no-shadow-restricted-names: "error"*/

function NaN(){}

!function(Infinity){};

var undefined = 5;

try {} catch(eval){}
```

正确 代码示例：
```js
/*eslint no-shadow-restricted-names: "error"*/

var Object;

function f(a, b){}

// Exception: `undefined` may be shadowed if the variable is never assigned a value.
var undefined;
```

### Version
该规则在 ESLint 0.1.4 中被引入。
