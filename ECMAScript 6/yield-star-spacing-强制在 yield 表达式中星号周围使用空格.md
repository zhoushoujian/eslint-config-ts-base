## 强制在 yield* 表达式中 * 周围使用空格 (yield-star-spacing)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

### Rule Details
该规则强制在 yield* 表达式中 * 左右使用空格。

使用此规则，你需要使用 es6 环境 或 在 parserOptions中设置 ecmaVersion 为 6。

### Options
该规则有一个对象选项，两个属性 before 和 after，值为 true 或 false。

before 强制在 yield 和 * 之间有空格。 如果为 true，要求有一个空格，否则禁止有空格。
after 强制在 * 和 参数之间有空格。 如果为 true，要求有一个空格，否则禁止有空格。
默认为 {"before": false, "after": true} 。

"yield-star-spacing": ["error", {"before": true, "after": false}]
该选项也有简写形式：
```js
{"before": false, "after": true} → "after"
{"before": true, "after": false} → "before"
{"before": true, "after": true} → "both"
{"before": false, "after": false} → "neither"
"yield-star-spacing": ["error", "after"]
```
### Examples
```after```
默认选项 "after" 的 正确 代码示例：
```js
/*eslint yield-star-spacing: ["error", "after"]*/
/*eslint-env es6*/

function* generator() {
  yield* other();
}
```

```before```
选项 "before" 的 正确 代码示例：
```js
/*eslint yield-star-spacing: ["error", "before"]*/
/*eslint-env es6*/

function *generator() {
  yield *other();
}
```

```both```
选项 "both" 的 正确 代码示例：
```js
/*eslint yield-star-spacing: ["error", "both"]*/
/*eslint-env es6*/

function * generator() {
  yield * other();
}
```

```neither```
选项 "neither" 的 正确 代码示例：
```js
/*eslint yield-star-spacing: ["error", "neither"]*/
/*eslint-env es6*/

function*generator() {
  yield*other();
}
```

### When Not To Use It
如果你的项目不使用 generator 函数或你不关心空格的一致性，你不需要使用此规则。

### Version
该规则在 ESLint 2.0.0-alpha-1 中被引入。

