## 禁止使用对象的某些属性 (no-restricted-properties)

在代码库中，对象的某些属性可能被禁止使用。在对弃用一个 API 或严格显示一个模块的方法很有用。比如，当你使用 Mocha ，你可能不允许使用 describe.only，或告诉人们使用 Object.assign 而不是 _.extend。

### Rule Details
该规则在给定的对象名上寻找给定的属性键，无论是读取属性值或是作为函数调用它。你可以指定一个可选的 message 字段，来表明一个替代的 API 或进行限制的原因。

### Options
该规则接受一个对象列表，用来指定对象名和属性名：
```js
{
    "rules": {
        "no-restricted-properties": [2, {
            "object": "disallowedObjectName",
            "property": "disallowedPropertyName"
        }]
    }
}
```

可以禁止多个 object/property，而且你可以指定一个可选的 message 字段：
```js
{
    "rules": {
        "no-restricted-properties": [2, {
            "object": "disallowedObjectName",
            "property": "disallowedPropertyName"
        }, {
            "object": "disallowedObjectName",
            "property": "anotherDisallowedPropertyName",
            "message": "Please use allowedObjectName.allowedPropertyName."
        }]
    }
}
```

如果省略了对象名，将禁止使用所有对象的这个属性：
```js
{
    "rules": {
        "no-restricted-properties": [2, {
            "property": "__defineGetter__",
            "message": "Please use Object.defineProperty instead."
        }]
    }
}
```

如果省略的属性名，不允许访问给定对象的任何属性：
```js
{
    "rules": {
        "no-restricted-properties": [2, {
            "object": "require",
            "message": "Please call require() directly."
        }]
    }
}
```

错误 代码示例：
```js
/* eslint no-restricted-properties: [2, {
    "object": "disallowedObjectName",
    "property": "disallowedPropertyName"
}] */

var example = disallowedObjectName.disallowedPropertyName; /*error Disallowed object property: disallowedObjectName.disallowedPropertyName.*/

disallowedObjectName.disallowedPropertyName(); /*error Disallowed object property: disallowedObjectName.disallowedPropertyName.*/
/* eslint no-restricted-properties: [2, {
    "property": "__defineGetter__"
}] */

foo.__defineGetter__(bar, baz);
/* eslint no-restricted-properties: [2, {
    "object": "require"
}] */

require.resolve('foo');
```

正确 代码示例：
```js
/* eslint no-restricted-properties: [2, {
    "object": "disallowedObjectName",
    "property": "disallowedPropertyName"
}] */

var example = disallowedObjectName.somePropertyName;

allowedObjectName.disallowedPropertyName();
/* eslint no-restricted-properties: [2, {
    "object": "require"
}] */

require('foo');
```

### When Not To Use It
如果你没有任何对象或属性组合来限制，你就不应该使用此规则。

### Version
该规则在 ESLint 3.5.0 中被引入。

