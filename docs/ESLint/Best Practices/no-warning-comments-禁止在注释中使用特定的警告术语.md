## 禁用警告注释 (no-warning-comments)

开发者经常给代码添加注释，标明哪些没有完成或需要审查。在你认为代码可以发布之前，你很有可能想修复或审查代码，然后删除注释。
```js
// TODO: do something
// FIXME: this is not a good idea
```

### Rule Details
该规则报告含有配置中预定义的项的注释。

### Options
该规则有一个对象选项：

"terms": 可选的供匹配的数组。默认为 ["todo", "fixme", "xxx"]。它们是大写敏感的并且匹配整个词： fix 匹配 FIX 但不匹配 fixing。也可以由多个单词组成：really bad idea。
"location": 可选的字符串用于在注释中检测匹配。默认为 "start"。另一个值是anywhere。
默认选项 { "terms": ["todo", "fixme", "xxx"], "location": "start" } 的 错误 代码示例：
```js
/*eslint no-warning-comments: "error"*/

function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // TODO
}
```

默认选项 { "terms": ["todo", "fixme", "xxx"], "location": "start" } 的 正确 代码示例：
```js
/*eslint no-warning-comments: "error"*/

function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // NOT READY FOR PRIME TIME
  // but too bad, it is not a predefined warning term
}
```

terms and location
选项 { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" } 的 错误 代码示例：
```js
/*eslint no-warning-comments: ["error", { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }]*/

// TODO: this
// todo: this too
// Even this: TODO
/* /*
 * The same goes for this TODO comment
 * Or a fixme
 * as well as any other term
 */
```

选项 { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" } 的 正确 代码示例：
```js
/*eslint no-warning-comments: ["error", { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }]*/

// This is to do
// even not any other    term
// any other terminal
/*
 * The same goes for block comments
 * with any other interesting term
 * or fix me this
 */
```

### When Not To Use It
如果你有一个大型的代码库，没有使用这种警告条款进行开发，在非生产环境下，如果你不能修复所有这些问题，你可能会得到数以百计的警告或错误（例如，如果你没有时间去做），你可能会忽略其他警告或错误，或者习惯了，不在过多关注它们了。
正如上面说那样：你不应配置那些经常被使用的条款（例如，在你的注释中使用本地语言）。

### Version
该规则在 ESLint 0.4.4 中被引入。

