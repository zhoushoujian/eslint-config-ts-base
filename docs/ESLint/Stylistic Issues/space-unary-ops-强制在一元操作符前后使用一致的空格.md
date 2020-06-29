## 要求或禁止在一元操作符之前或之后存在空格 (space-unary-ops)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

一些风格指南要求或禁止在一元操作符之前或之后存在空格。这主要是一个风格问题，然而，一些 JavaScript 表达式如果不写空格将会使其难以阅读和维护。

### Rule Details
该规则强制 words 一元操作符后空格和 nonwords 一元操作符之前或之后的空格的一致性。

一元 words 操作符的例子：
```js
// new
var joe = new Person();

// delete
var obj = {
    foo: 'bar'
};
delete obj.foo;

// typeof
typeof {} // object

// void
void 0 // undefined
```

一元 nonwords 操作符的例子：
```js
if ([1,2,3].indexOf(1) !== -1) {};
foo = --foo;
bar = bar++;
baz = !foo;
qux = !!baz;
```

### Options
该规则有三个可选项：

words - 适用于单词类一元操作符，例如：new、delete、typeof、void、yield
nonwords - 适用于这些一元操作符: -、+、--、++、!、!!
overrides - 覆盖操作符周围空格的用法。默认为空，但可用来强制或禁止操作符周围有空格。例如：
    "space-unary-ops": [
        2, {
          "words": true,
          "nonwords": false,
          "overrides": {
            "new": false,
            "++": true
          }
    }]
在这个例子中，new 操作符之后禁用空格，++ 操作左右要求有空格。

默认选项 {"words": true, "nonwords": false} 的 错误 代码示例：
```js
/*eslint space-unary-ops: "error"*/

typeof!foo;

void{foo:0};

new[foo][0];

delete(foo.bar);

++ foo;

foo --;

- foo;

+ "3";
/*eslint space-unary-ops: "error"*/
/*eslint-env es6*/

function *foo() {
    yield(0)
}
/*eslint space-unary-ops: "error"*/

async function foo() {
    await(bar);
}
```

选项 {"words": true, "nonwords": false} 的 正确 代码示例：
```js
/*eslint space-unary-ops: "error"*/

// Word unary operator "delete" is followed by a whitespace.
delete foo.bar;

// Word unary operator "new" is followed by a whitespace.
new Foo;

// Word unary operator "void" is followed by a whitespace.
void 0;

// Unary operator "++" is not followed by whitespace.
++foo;

// Unary operator "--" is not preceded by whitespace.
foo--;

// Unary operator "-" is not followed by whitespace.
-foo;

// Unary operator "+" is not followed by whitespace.
+"3";
/*eslint space-unary-ops: "error"*/
/*eslint-env es6*/

function *foo() {
    yield (0)
}
/*eslint space-unary-ops: "error"*/

async function foo() {
    await (bar);
}
```

### Version
该规则在 ESLint 0.10.0 中被引入。
