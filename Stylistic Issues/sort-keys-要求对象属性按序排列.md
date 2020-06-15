## 要求对象属性按序排列 (sort-keys)

当声明多个属性是，一些开发人员倾向于属性按字母顺序进行排列，可以在以后更容易地找到必要的属性。其他人则认为对属性进行排序增加了复杂性，并成为维护的负担。

Rule Details
该规则检查对象表达式中所有属性的定义，确认所有变量都是按字母顺序排序的。

错误 代码示例：
```js
/*eslint sort-keys: "error"*/
/*eslint-env es6*/

let obj = {a: 1, c: 3, b: 2};
let obj = {a: 1, "c": 3, b: 2};

// Case-sensitive by default.
let obj = {a: 1, b: 2, C: 3};

// Non-natural order by default.
let obj = {1: a, 2: c, 10: b};

// This rule checks computed properties which have a simple name as well.
// Simple names are names which are expressed by an Identifier node or a Literal node.
const S = Symbol("s")
let obj = {a: 1, ["c"]: 3, b: 2};
let obj = {a: 1, [S]: 3, b: 2};
```

正确 代码示例：
```js
/*eslint sort-keys: "error"*/
/*eslint-env es6*/

let obj = {a: 1, b: 2, c: 3};
let obj = {a: 1, "b": 2, c: 3};

// Case-sensitive by default.
let obj = {C: 3, a: 1, b: 2};

// Non-natural order by default.
let obj = {1: a, 10: b, 2: c};

// This rule checks computed properties which have a simple name as well.
let obj = {a: 1, ["b"]: 2, c: 3};
let obj = {a: 1, [b]: 2, c: 3};

// This rule ignores computed properties which have a non-simple name.
let obj = {a: 1, [c + d]: 3, b: 2};
let obj = {a: 1, ["c" + "d"]: 3, b: 2};
let obj = {a: 1, [`${c}`]: 3, b: 2};
let obj = {a: 1, [tag`c`]: 3, b: 2};

// This rule does not report unsorted properties that are separated by a spread property.
let obj = {b: 1, ...c, a: 2};
```

### Options
```js
{
    "sort-keys": ["error", "asc", {"caseSensitive": true, "natural": false, "minKeys": 2}]
}
```

第一个选项是 "asc" 或 "desc"。

"asc" (默认) - 强制所有属性按升序排列。
"desc" - 强制所有属性按降序排列。
第二个选项是个对象，有 3 个属性。

caseSensitive - 如果为 true，强制所有属性排序区分大小写。默认为 true。
minKeys - 指定对象的未排序键产生错误所需的最小键数。默认值为 2，这意味着在默认情况下，所有键未排序的对象都会导致检测错误。
natural - 如果为 true 强制所有属性按自然顺序排列。默认为 false。自然顺序以人的排序方式进行排序，比较包含字母和数字的字符串。它基本上上是按数字排序的，而不是按字母顺序排序。所以在自然顺序排序中数字 10 排在数字 3。
比如：

natural 为 true，排序结果为：

1
3
6
8
10
natural 为 false，排序结果为：

1
10
3
6
8
desc
选项 "desc" 的 错误 代码示例：
```js
/*eslint sort-keys: ["error", "desc"]*/
/*eslint-env es6*/

let obj = {b: 2, c: 3, a: 1};
let obj = {"b": 2, c: 3, a: 1};

// Case-sensitive by default.
let obj = {C: 1, b: 3, a: 2};

// Non-natural order by default.
let obj = {10: b, 2: c, 1: a};
```

选项 "desc" 的 正确 代码示例：
```js
/*eslint sort-keys: ["error", "desc"]*/
/*eslint-env es6*/

let obj = {c: 3, b: 2, a: 1};
let obj = {c: 3, "b": 2, a: 1};

// Case-sensitive by default.
let obj = {b: 3, a: 2, C: 1};

// Non-natural order by default.
let obj = {2: c, 10: b, 1: a};
```

```insensitive```
选项 {caseSensitive: false} 的 错误 代码示例：
```js
/*eslint sort-keys: ["error", "asc", {caseSensitive: false}]*/
/*eslint-env es6*/

let obj = {a: 1, c: 3, C: 4, b: 2};
let obj = {a: 1, C: 3, c: 4, b: 2};
```

选项 {caseSensitive: false} 的 正确 代码示例：
```js
/*eslint sort-keys: ["error", "asc", {caseSensitive: false}]*/
/*eslint-env es6*/

let obj = {a: 1, b: 2, c: 3, C: 4};
let obj = {a: 1, b: 2, C: 3, c: 4};
```

```natural```
选项 {natural: true} 的 错误 代码示例：
```js
/*eslint sort-keys: ["error", "asc", {natural: true}]*/
/*eslint-env es6*/

let obj = {1: a, 10: c, 2: b};
```

选项 {natural: true} 的 正确 代码示例：
```js
/*eslint sort-keys: ["error", "asc", {natural: true}]*/
/*eslint-env es6*/

let obj = {1: a, 2: b, 10: c};
```

```minKeys```
选项 {minKeys: 4} 的 错误 代码示例：
```js
/*eslint sort-keys: ["error", "asc", {minKeys: 4}]*/
/*eslint-env es6*/

// 4 keys
let obj = {
    b: 2,
    a: 1, // not sorted correctly (should be 1st key)
    c: 3,
    d: 4,
};

// 5 keys
let obj = {
    2: 'a',
    1: 'b', // not sorted correctly (should be 1st key)
    3: 'c',
    4: 'd',
    5: 'e',
};
```

选项 {minKeys: 4} 的 正确 代码示例：
```js
/*eslint sort-keys: ["error", "asc", {minKeys: 4}]*//
/*eslint-env es6*/

// 3 keys
let obj = {
    b: 2,
    a: 1,
    c: 3,
};

// 2 keys
let obj = {
    2: 'b',
    1: 'a',
};
```

### When Not To Use It
如果你想收到关于属性顺序的通知，可以禁用此规则。

### Version
该规则在 ESLint 3.3.0 中被引入。

