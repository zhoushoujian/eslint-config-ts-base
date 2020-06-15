## 要求或禁止在类成员之间出现空行 (lines-between-class-members)

命令行中的 --fix 选项可以自动修复一些该规则报告的问题。

该规则通过强制类成员间的空行来提高可读性。该规则不会检查第一个成员和最后一个成员，因为这已经由填充的块进行了处理。

## Rule Details
错误 代码示例：
```js
/* eslint lines-between-class-members: ["error", "always"]*/
class MyClass {
  foo() {
    //...
  }
  bar() {
    //...
  }
}
```

正确 代码示例：
```js
/* eslint lines-between-class-members: ["error", "always"]*/
class MyClass {
  foo() {
    //...
  }

  bar() {
    //...
  }
}
```

### Options
该规则有一个字符串选项和一个对象选项：

字符串选项：

"always"(默认) 要求在类成员之后有一行空行
"never" 禁止在类成员之后有一行空行
对象选项：

"exceptAfterSingleLine": false(默认) 不要 跳过对单行类成员之后的空行的检查
"exceptAfterSingleLine": true 跳过对单行类成员之后的空行的检查
字符串选项的 错误 代码示例：
```js
/* eslint lines-between-class-members: ["error", "always"]*/
class Foo{
  bar(){}
  baz(){}
}

/* eslint lines-between-class-members: ["error", "never"]*/
class Foo{
  bar(){}

  baz(){}
}
```

字符串选项的 正确 代码示例：
```js
/* eslint lines-between-class-members: ["error", "always"]*/
class Foo{
  bar(){}

  baz(){}
}

/* eslint lines-between-class-members: ["error", "never"]*/
class Foo{
  bar(){}
  baz(){}
}
```

对象选项的 正确 代码示例：
```js
/* eslint lines-between-class-members: ["error", "always", { exceptAfterSingleLine: true }]*/
class Foo{
  bar(){} // single line class member
  baz(){
    // multi line class member
  }

  qux(){}
}
```

### When Not To Use It
如果你不想强制类成员间的空行，你可以禁用此规则。

### Version
该规则在 ESLint 4.9.0 中被引入。
