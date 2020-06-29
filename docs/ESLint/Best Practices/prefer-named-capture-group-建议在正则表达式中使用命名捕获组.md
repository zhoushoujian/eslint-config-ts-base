## 建议在正则表达式中使用命名捕获组 (prefer-named-capture-group)

随着 ECMAScript 2018 的发布，命名捕获组可以用于正则表达式中，这可以提高正则表达式的可读性。
```js
const regex = /(?<year>[0-9]{4})/;
```

### Rule Details
此规则的目的是在正则表达式中使用命名捕获组而不是编号捕获组。

错误 代码示例：
```js
/*eslint prefer-named-capture-group: "error"*/

const foo = /(ba[rz])/;
const bar = new RegExp('(ba[rz])');
const baz = RegExp('(ba[rz])');

foo.exec('bar')[1]; // Retrieve the group result.
```

正确 代码示例：
```js
/*eslint prefer-named-capture-group: "error"*/

const foo = /(?<id>ba[rz])/;
const bar = new RegExp('(?<id>ba[rz])');
const baz = RegExp('(?<id>ba[rz])');

foo.exec('bar').groups.id; // Retrieve the group result.
```

### When Not To Use It
如果您的目标是 ECMAScript 2017 和/或 更旧的环境，你可以禁用这个规则，因为这个 ECMAScript 特性只在ECMAScript 2018 和/或 更新的环境中受支持。

### Version
该规则在 ESLint 5.15.0 中被引入。

