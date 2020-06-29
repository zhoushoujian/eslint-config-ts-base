## 在构造函数中禁止在调用super()之前使用this或super。 (no-this-before-super)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

在派生类的构造函数中，如果在调用 super() 之前使用 this 或 super，它将会引发一个引用错误。

该规则检测构造函数中的 this 或 super 关键字，然后报告那些在 super() 之前使用 this 或 super 的情况。

### Rule Details
该规则旨在标记出在调用 super() 之前使用 this 或 super 的情况。

### Examples
错误 代码示例：
```js
/*eslint no-this-before-super: "error"*/
/*eslint-env es6*/

class A extends B {
    constructor() {
        this.a = 0;
        super();
    }
}

class A extends B {
    constructor() {
        this.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super(this.foo());
    }
}
```

正确 代码示例：
```js
/*eslint no-this-before-super: "error"*/
/*eslint-env es6*/

class A {
    constructor() {
        this.a = 0; // OK, this class doesn't have an `extends` clause.
    }
}

class A extends B {
    constructor() {
        super();
        this.a = 0; // OK, this is after `super()`.
    }
}

class A extends B {
    foo() {
        this.a = 0; // OK. this is not in a constructor.
    }
}
```

### When Not To Use It
如果你不想收到关于构造函数中调用 super() 之前使用 this 或 super 情况的通知，关闭此规则即可。

### Version
该规则在 ESLint 0.24.0 中被引入。

