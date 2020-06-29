## 强制返回callback函数 (callback-return)

在 JavaScript 中，回调模式是大多数 I/O 和事件驱动编程的核心。
```js
function doSomething(err, callback) {
    if (err) {
        return callback(err);
    }
    callback();
}
```

为了防止多次调用回调函数，在主函数体外，任何时候触发回调函数使用 return 语句是很重要的。忽视这个技巧，常常会导致问题出现。比如：在 HTTP 请求中，你可能试图多次发送 HTTP 请求导致 Node.js 抛出 Can't render headers after they are sent to the client.错误。

### Rule Details
该规则只在保证在主函数外使用的回调函数是 return 语句的一部分或紧随 return 语句。该规则决定回调函数的名称。

### Options
该规则只有一个选项，是个数组，包含可能的回调函数名称，可能包含对象方法。默认的回调函数名称是 callback，cb，next。

Default callback names
默认选项["callback", "cb", "next"]的 错误 代码示例：
```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        callback(err);
    }
    callback();
}
```

默认选项["callback", "cb", "next"]的 正确 代码示例：
```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        return callback(err);
    }
    callback();
}
```

Supplied callback names
选项["done", "send.error", "send.success"]的 错误 代码示例：
```js
/*eslint callback-return: ["error", ["done", "send.error", "send.success"]]*/

function foo(err, done) {
    if (err) {
        done(err);
    }
    done();
}

function bar(err, send) {
    if (err) {
        send.error(err);
    }
    send.success();
}
```

选项["done", "send.error", "send.success"]的 正确 代码示例：
```js
/*eslint callback-return: ["error", ["done", "send.error", "send.success"]]*/

function foo(err, done) {
    if (err) {
        return done(err);
    }
    done();
}

function bar(err, send) {
    if (err) {
        return send.error(err);
    }
    send.success();
}
```

### Known Limitations
由于很难通过静态分析理解程序的意思，该规则也有它的局限性：

false negatives 该规则报告了正确的代码，但程序多次调用了回调函数（不正确的行为）
false positives 该规则报告了错误的代码，但程序只调用了一次回调函数（正确的行为）
Passing the callback by reference
该规则的静态分析没有检测回调函数的参数如果是个函数的情况（例如，setTimeout）。

当该规则报告了正确的代码时，false negative的示例：
```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        setTimeout(callback, 0); // this is bad, but WILL NOT warn
    }
    callback();
}
```

Triggering the callback within a nested function
该规则的静态分析没有检测回调函数来自嵌套函数或是个立即执行函数（IIFE）。

当该规则报告了正确的代码时，漏报的示例：
```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        process.nextTick(function() {
            return callback(); // this is bad, but WILL NOT warn
        });
    }
    callback();
}
```

If/else statements
该规则的静态分析没有检测回调函数在 if 语句的每个分支只调用一次的情况。

当该规则报告了正确的代码时，漏报的示例：
```js
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        callback(err); // this is fine, but WILL warn
    } else {
        callback();    // this is fine, but WILL warn
    }
}
```

### When Not To Use It
在某些情况下你可能需要多次调用回调函数。在这些情况下，此规则可能会导致错误的行为。在这些情况下，你可能想给那些回调保留一个特别的名字，并且不包含在触发警告的回调函数列表里。

### Version
此规则在 ESLint 1.0.0-rc-1 被引入。
