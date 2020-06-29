## 禁止使用void操作符 (no-void)

void 操作符需要一个运算对象并且返回 undefined：void expression 会计算 expression 并返回 undefined。它可以用来忽略 expression 产生的任何副作用。

使用 void 操作符的通常情况是要得到一个单纯的 undefined 值，因为之前的 ES5 undefined 值是可变的:
```js
// will always return undefined
(function(){
    return void 0;
})();

// will return 1 in ES3 and undefined in ES5+
(function(){
    undefined = 1;
    return undefined;
})();

// will throw TypeError in ES5+
(function(){
    'use strict';
    undefined = 1;
})();
```

另外一种情况是缩减代码量因为 void 0 比 undefined 要简短:
```js
foo = void 0;
foo = undefined;
```

当在 IIFE (立即调用函数表达式)时被使用时,void 可以用来强制 function 关键字被当作成表达式而不是声明:
```js
var foo = 1;
void function(){ foo = 1; }() // will assign foo a value of 1
+function(){ foo = 1; }() // same as above
function(){ foo = 1; }() // will throw SyntaxError
```

一些代码风格禁止使用 void 操作符，把它标记为不明显的，难以阅读的。

### Rule Details
此规则目的在于排除使用 void 操作符。

错误 代码示例：
```js
/*eslint no-void: "error"*/

void foo

var foo = void bar();
```

### When Not To Use It
如果你有意使用 void 操作符，可以禁用此规则。

### Version
该规则在 ESLint 0.8.0 中被引入。
