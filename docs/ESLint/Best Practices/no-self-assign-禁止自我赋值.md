## 禁止自身赋值 (no-self-assign)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

自身赋值不起任何作用，可能是由于不完整的重构造成的错误。也表明你的工作还没做完。
```js
foo = foo;
[bar, baz] = [bar, qiz];
```

### Rule Details
该规则旨在消除自身赋值的情况。

错误 代码示例：
```js
/*eslint no-self-assign: "error"*/

foo = foo;

[a, b] = [a, b];

[a, ...b] = [x, ...b];

({a, b} = {a, x});
```

正确 代码示例：

/*eslint no-self-assign: "error"*/
```js
foo = bar;
[a, b] = [b, a];

// This pattern is warned by the `no-use-before-define` rule.
let foo = foo;

// The default values have an effect.
[foo = 1] = [foo];

// non-self-assignments with properties.
obj.a = obj.b;
obj.a.b = obj.c.b;
obj.a.b = obj.a.c;
obj[a] = obj["a"];

// This ignores if there is a function call.
obj.a().b = obj.a().b;
a().b = a().b;

// Known limitation: this does not support computed properties except single literal or single identifier.
obj[a + b] = obj[a + b];
obj["a" + "b"] = obj["a" + "b"];
```

### Options
该规则也有可以检查属性的选项。
```js
{
    "no-self-assign": ["error", {"props": true}]
}
```

props - 如果为 true，no-self-assign 规则将对属性的自我赋值发出警告。默认为 true.
```props```
选项 { "props": false } 的 正确 代码示例：
```js
/*eslint no-self-assign: ["error", {"props": false}]*/

// self-assignments with properties.
obj.a = obj.a;
obj.a.b = obj.a.b;
obj["a"] = obj["a"];
obj[a] = obj[a];
```

### When Not To Use It
如果你不想收到关于自身赋值的通知，关闭此规则即可。

### Version
该规则在 ESLint 2.0.0-rc.0 被引入。
