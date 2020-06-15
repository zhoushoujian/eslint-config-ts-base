## 禁用不必要的转义 (no-useless-escape)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

对字符串、模板字面量和正则表达式中的常规字符进行转义，不会对结果产生任何影响，例如：
```js
let foo = "hol\a"; // > foo = "hola"
let bar = `${foo}\!`; // > bar = "hola!"
let baz = /\:/ // same functionality with /:/
```

### Rule Details
该规则标记在不改变代码行为的情况下可以安全移除的转义。

错误 代码示例：
```js
/*eslint no-useless-escape: "error"*/

"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;
```

正确 代码示例：
```js
/*eslint no-useless-escape: "error"*/

"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
`\``;
`\${${foo}}`;
`$\{${foo}}`;
/\\/g;
/\t/g;
/\w\$\*\^\./;
```

### When Not To Use It
如果你不想收到关于不必要的转义字符的通知，可以关闭此规则。

### Version
该规则在 ESLint 2.5.0 中被引入。

