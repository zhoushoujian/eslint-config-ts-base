### 强制在 RegExp 上使用 u 标志 (require-unicode-regexp)

RegExp 的 u 标志有两个效果:

使正则表达式正确处理 UTF-16 Surrogate Pair
特别是，字符范围语法获得正确的行为。

```js
/^[👍]$/.test("👍") //→ false
/^[👍]$/u.test("👍") //→ true
```
使正则表达式在禁用时尽早抛出语法错误 Annex B extensions
由于历史原因，JavaScript 正则表达式能够容忍语法错误。例如，/\w{1, 2/ 是一个语法错误，但是JavaScript不会抛出这个错误。它会匹配字符串，比如 "a{1, 2"。这种恢复逻辑在附件B中定义。

u 标志禁用在附件B中定义的恢复逻辑。因此，你可以尽早发现错误。这类似于严格模式

因此，u 标志使我们能够更好地处理正则表达式。

### Rule Details
该规则旨在强制正则表达式使用 u 标志。

错误 代码示例：
```js
/*eslint require-unicode-regexp: error */

const a = /aaa/
const b = /bbb/gi
const c = new RegExp("ccc")
const d = new RegExp("ddd", "gi")
```

正确 代码示例：
```js
/*eslint require-unicode-regexp: error */

const a = /aaa/u
const b = /bbb/giu
const c = new RegExp("ccc", "u")
const d = new RegExp("ddd", "giu")

// This rule ignores RegExp calls if the flags could not be evaluated to a static value.
function f(flags) {
    return new RegExp("eee", flags)
}
```

### When Not To Use It
如果不希望通知没有 u 标志的正则表达式，则可以禁用此规则。

### Version
该规则在 ESLint 5.3.0 中被引入。

