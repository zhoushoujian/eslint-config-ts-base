## 强制将对象的属性放在不同的行上 (object-property-newline)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

该规则允许你限制对象字面量中属性的位置。你可以禁止属性规范的任意部分出现在与其他属性规范的任意部分的同一行上。你可以绝对禁止或通过调用一个对象选项来允许一个例外，允许对象的所有属性在同一行上。

### Rule Details
Motivations: 该规则可以确保，正如某些风格指南所要求的那样，属性分散在不同的行中可以获得更好的可读性。例如，你可以禁止所有这些：
```js
const newObject = {a: 1, b: [2, {a: 3, b: 4}]};
const newObject = {
    a: 1, b: [2, {a: 3, b: 4}]
};
const newObject = {
    a: 1,
    b: [2, {a: 3, b: 4}]
};
const newObject = {
    a: 1,
    b: [
        2,
        {a: 3, b: 4}
    ]
};
```

相反，你可以遵守该规则，这样写：
```js
const newObject = {
    a: 1,
    b: [2, {
        a: 3,
        b: 4
    }]
};
```
或
```js
const newObject = {
    a: 1,
    b: [
        2,
        {
            a: 3,
            b: 4
        }
    ]
};
```

该规则的另一个好处是，当一个属性改变时，可以显示出特异性的差别：
```js
// More specific
 var obj = {
     foo: "foo",
-    bar: "bar",
+    bar: "bazz",
     baz: "baz"
 };
// Less specific
-var obj = { foo: "foo", bar: "bar", baz: "baz" };
+var obj = { foo: "foo", bar: "bazz", baz: "baz" };
```

### Optional Exception
该规则有一个对象选项， allowAllPropertiesOnSameLine (一个弃用的同义词是 allowMultiplePropertiesPerLine)。如果你设置此选项为 true，像上面前两个对象字面量，即所有属性都在同一行上，将被允许，但除了下面这个
```js
const newObject = {
    a: 'a.m.', b: 'p.m.',
    c: 'daylight saving time'
};
```

将被禁止，因为两个属性，不是全部的属性出现在同一行上。

### Notations
该规则适用于所有的属性规范，不管是什么符号，包括：

a: 1 (ES5)
a (ES2015 简写属性)
[`prop${a}`] (ES2015 计算的属性名)
因此，该规则（没有对象选项）禁止下面这两个：
```js
const newObject = {
    a: 1, [
        process.argv[4]
    ]: '01'
};
const newObject = {
    a: 1, [process.argv[4]]: '01'
};
```

（此行为与下面引用的 JSCS 规则不同，它不将以 [ 开头的计算属性作为属性规范的一部分。JSCS 规则禁止第二种格式，但允许第一种格式。）

### Multiline Properties
该规则禁止至少一个字符的属性与至少一个字符的其他属性出现在同一行。例如，该规则禁止：
```js
const newObject = {a: [
    'Officiële website van de Europese Unie',
    'Официален уебсайт на Европейския съюз'
], b: 2};
```

因为一个字符的属性 a 与属性 b 在同一行上。

可选的例外不允许这种情况出现，因为整个属性跨了4行，而不是1行。

Inter-property Delimiters
分隔属性的逗号和任意空白不被认为是属性的一部分。因此，giant规则允许下面这种格式：
```js
const newFunction = multiplier => ({
    a: 2 * multiplier,
    b: 4 * multiplier,
    c: 8 * multiplier
});
const newFunction = multiplier => ({
    a: 2 * multiplier
    , b: 4 * multiplier
    , c: 8 * multiplier
});
```
（这种行为与下面引用的 JSCS 规则不同，JSCS 规则允许第一种，禁止第二种。）

–fix
如果使用命令行 --fix 选项调用此规则，通常会修改违反此规则的对象字面量。每种情况的修改都是将一个属性移动下一行，无论是否与前一个属性的一部分还是全部在同一行上。例如，
```js
const newObject = {
    a: 'a.m.', b: 'p.m.',
    c: 'daylight saving time'
};
```
被转换为：
```js
const newObject = {
    a: 'a.m.',
b: 'p.m.',
    c: 'daylight saving time'
};
```
修改不取决于对象选项是否被设为 true。换句话说，ESLint 不会将所有的属性放置到一行，即使对象选项允许那么做。

如果注释在同一行的第二个或后续的属性之前，ESLint 不会纠正违反此规则的行为，因为 ESLint 不能决定要把注释放到哪一行。

综上所述，应用于此规则的 --fix 选项，不会符合其他规则，比如 indent 规则，但是，如果其他规则也有效，该选项也适用。

### Examples
选项 allowAllPropertiesOnSameLine 设为 false 的 错误 代码示例：
```js
/*eslint object-property-newline: "error"*/

const obj0 = { foo: "foo", bar: "bar", baz: "baz" };

const obj1 = {
    foo: "foo", bar: "bar", baz: "baz"
};

const obj2 = {
    foo: "foo", bar: "bar",
    baz: "baz"
};

const obj3 = {
    [process.argv[3] ? "foo" : "bar"]: 0, baz: [
        1,
        2,
        4,
        8
    ]
};

const a = "antidisestablishmentarianistically";
const b = "yugoslavyalılaştırabildiklerimizdenmişsiniz";
const obj4 = {a, b};

const domain = process.argv[4];
const obj5 = {
    foo: "foo", [
    domain.includes(":") ? "complexdomain" : "simpledomain"
]: true};
```

选项 allowAllPropertiesOnSameLine 设为 false 的 正确 代码示例：
```js
/*eslint object-property-newline: "error"*/

const obj1 = {
    foo: "foo",
    bar: "bar",
    baz: "baz"
};

const obj2 = {
    foo: "foo"
    , bar: "bar"
    , baz: "baz"
};

const user = process.argv[2];
const obj3 = {
    user,
    [process.argv[3] ? "foo" : "bar"]: 0,
    baz: [
        1,
        2,
        4,
        8
    ]
};
```

选项 { "allowAllPropertiesOnSameLine": true } 的 正确 代码示例：
```js
/*eslint object-property-newline: ["error", { "allowAllPropertiesOnSameLine": true }]*/

const obj = { foo: "foo", bar: "bar", baz: "baz" };

const obj2 = {
    foo: "foo", bar: "bar", baz: "baz"
};
const user = process.argv[2];
const obj3 = {
    user, [process.argv[3] ? "foo" : "bar"]: 0, baz: [1, 2, 4, 8]
};
```

### When Not To Use It
如果你想要决定是否要将属性放在单独的行上，你可以关闭此规则。

### Version
该规则在 ESLint 2.10.0 中被引入。

