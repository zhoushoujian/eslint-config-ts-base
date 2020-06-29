## 不允许修改类声明的变量 (no-class-assign)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

ClassDeclaration 创建一个变量，我们可以修改这个变量。
```js
/*eslint-env es6*/

class A { }
A = 0;
```

但是在大多数情况下，这样的修改是个错误。

### Rule Details
该规则旨在标记类声明中变量的修改情况。

错误 代码示例：
```js
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

class A { }
A = 0;
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

A = 0;
class A { }
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

class A {
    b() {
        A = 0;
    }
}
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

let A = class A {
    b() {
        A = 0;
        // `let A` is shadowed by the class name.
    }
}
```

正确 代码示例：
```js
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

let A = class A { }
A = 0; // A is a variable.
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

let A = class {
    b() {
        A = 0; // A is a variable.
    }
}
/*eslint no-class-assign: 2*/
/*eslint-env es6*/

class A {
    b(A) {
        A = 0; // A is a parameter.
    }
}
```

### When Not To Use It
如果你不想收到类声明中变量的修改的通知，你可以禁用此规则。

### Version
该规则在 ESLint 1.0.0-rc-1 中被引入。
