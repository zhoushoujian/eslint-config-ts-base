## 优先使用数组和对象解构 (prefer-destructuring)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

JavaScript ES6 添加了一个新语法，用于从数组索引或对象属性创建变量，称之为解构。此规则强制使用解构而不是通过成员表达式访问属性。

### Rule Details
### Options
该规则有两个配置对象。第一个对象参数决定了该规则要应用的解构类型。

该规则的两个属性， array 和 object 可以独立地开启或关闭对每种类型的解构需求。默认情况下，均为 true。

或者，你可以对不同的赋值类型分开配置。它接收另外两个属性。

一个是 VariableDeclarator 另一个是 AssignmentExpression，可以独立地控制每种类型的解构需求。每个属性接收一个对象，包含两个属性，array 和 object，可以用来控制每个 array 和 object解构需求，分别应用于变量声明和赋值表达式。默认情况下，对 VariableDeclarator 和 AssignmentExpression而言，array 和 object 被设为 true。

该规则有一个第二对象，包含一个键，enforceForRenamedProperties 用来决定 object 解构是否应用于重命名的变量。

注意：不可能在运行时确定变量是否引用对象或数组。因此，该规则通过检查被访问的键是否是整数来猜测赋值类型。这可能导致以下可能令人困惑的情况:

访问键值为整数的对象属性将属于 array 析构的类别。
通过计算索引访问数组元素属于 object 析构的类别。
错误 代码示例：
```js
// With `array` enabled
var foo = array[0];

// With `object` enabled
var foo = object.foo;
var foo = object['foo'];
```

正确 代码示例：
```js
// With `array` enabled
var [ foo ] = array;
var foo = array[someIndex];

// With `object` enabled
var { foo } = object;

var foo = object.bar;

let foo;
({ foo } = object);
```

选项 enforceForRenamedProperties 的 错误 代码示例：
```js
var foo = object.bar;
```

选项 enforceForRenamedProperties 的 正确 代码示例：
```js
var { bar: foo } = object;
```

默认值的配置示例，如下所示：
```js
{
  "rules": {
    "prefer-destructuring": ["error", {
      "array": true,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }]
  }
}
```

array 和 object 用来尅器每种类型的解构需求。默认情况下，二者均为 true。

例如，以下配置只强制对象解构，不强制数组解构：
```js
{
  "rules": {
    "prefer-destructuring": ["error", {"object": true, "array": false}]
  }
}
```

一个配置示例，默认配置 VariableDeclarator 和 AssignmentExpression ：
```js
{
  "rules": {
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": true
      }
    }, {
      "enforceForRenamedProperties": false
    }]
  }
}
```

VariableDeclarator 和 AssignmentExpression 用来开启或关闭 array 和 object 的解构需求。默认情况下，二者均为 true。

例如，以下配置强制在变量声明中的对象解构和赋值表达式的数组解构。
```js
{
  "rules": {
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": false
      }
    }, {
      "enforceForRenamedProperties": false
    }]
  }
}
```

强制 VariableDeclarator 中对象解构的 正确 代码示例：
```js
/* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
var {bar: foo} = object;
```

强制 AssignmentExpression 中数组解构的 正确 代码示例：
```js
/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
[bar] = array;
```

### When Not To Use It
如果你希望能够直接访问数组索引或对象属性，可将该规则配置为你的口味或完全禁用该规则。

另外，如果你打算直接访问大数组的索引，如：
```js
var foo = array[100];
```

那么该规则 array 部分是不推荐的，因为解构无法很好地匹配这个示例。

或，对非迭代类数组对象：
```js
var $ = require('jquery');
var foo = $('body')[0];
var [bar] = $('body'); // fails with a TypeError
```

### Version
该规则在 ESLint 3.13.0 中被引入。
