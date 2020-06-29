## 不允许类成员中有重复的名称 (no-dupe-class-members)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

如果类成员中有同名的声明，最后一个声明将会默默地覆盖其它声明。 它可能导致意外的行为。
```js
/*eslint-env es6*/

class Foo {
  bar() { console.log("hello"); }
  bar() { console.log("goodbye"); }
}

var foo = new Foo();
foo.bar(); // goodbye
```

### Rule Details
该规则旨在标记类成员中重复名称的使用。

### Examples
错误 代码示例：
```js
/*eslint no-dupe-class-members: "error"*/
/*eslint-env es6*/

class Foo {
  bar() { }
  bar() { }
}

class Foo {
  bar() { }
  get bar() { }
}

class Foo {
  static bar() { }
  static bar() { }
}
```

正确 代码示例：
```js
/*eslint no-dupe-class-members: "error"*/
/*eslint-env es6*/

class Foo {
  bar() { }
  qux() { }
}

class Foo {
  get bar() { }
  set bar(value) { }
}

class Foo {
  static bar() { }
  bar() { }
}
```

### When Not To Use It
该规则不应在 ES3/5 环境下使用。

在ES2015 (ES6)或之后的版本，如果你不想收到关于类成员中有重复名称的通知，你可以关闭此规则。

### Version
该规则在 ESLint 1.2.0 中被引入。

