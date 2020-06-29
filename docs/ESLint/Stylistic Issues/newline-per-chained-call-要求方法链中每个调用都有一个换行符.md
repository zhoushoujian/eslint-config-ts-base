## 要求方法链中每个调用都有一个换行符 (newline-per-chained-call)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

方法链在同一行上调用，不带换行符会使代码很难阅读，所以，一些开发者将换行符放在每个方法调用之后，使它更容易阅读和维护。

让我们看看下面这段完全有效（但在同一行）的代码。
```js
d3.select("body").selectAll("p").data([4, 8, 15, 16, 23, 42 ]).enter().append("p").text(function(d) { return "I'm number " + d + "!"; });
```

然而，如果进行适当的换行，就很容易阅读和理解。看一下同样的代码，在每个调用后带有换行符。
```js
d3
    .select("body")
    .selectAll("p")
    .data([
        4,
        8,
        15,
        16,
        23,
        42
    ])
    .enter()
    .append("p")
    .text(function (d) {
        return "I'm number " + d + "!";
    });
```

另一种赞成这种风格的观点是，当方法链发生改变，它提高了差异的清晰度。

不太清晰：
```js
-d3.select("body").selectAll("p").style("color", "white");
+d3.select("body").selectAll("p").style("color", "blue");
```

更清楚：
```js
d3
    .select("body")
    .selectAll("p")
-    .style("color", "white");
+    .style("color", "blue");
```

### Rule Details
该规则要求在方法链中的每个调用之后或或深度成员访问之后有一个换行符。计算属性访问比如 instance[something] 不适用于此规则。

### Options
该规则有一个对象选项：

"ignoreChainWithDepth" (默认为 2) 允许在同一行成链的深度。
ignoreChainWithDepth
默认选项 { "ignoreChainWithDepth": 2 } 的 错误 代码示例：
```js
/*eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 2 }]*/

_.chain({}).map(foo).filter(bar).value();

// Or
_.chain({}).map(foo).filter(bar);

// Or
_
  .chain({}).map(foo)
  .filter(bar);

// Or
obj.method().method2().method3();
```

默认选项 { "ignoreChainWithDepth": 2 } 的 正确 代码示例：
```js
/*eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 2 }]*/

_
  .chain({})
  .map(foo)
  .filter(bar)
  .value();

// Or
_
  .chain({})
  .map(foo)
  .filter(bar);

// Or
_.chain({})
  .map(foo)
  .filter(bar);

// Or
obj
  .prop
  .method().prop;

// Or
obj
  .prop.method()
  .method2()
  .method3().prop;
```

### When Not To Use It
如果你有与之冲突的规则或允许在同一行上成链调用，你可以关闭此规则。

### Version
该规则在 ESLint 2.0.0-rc.0 中被引入。

