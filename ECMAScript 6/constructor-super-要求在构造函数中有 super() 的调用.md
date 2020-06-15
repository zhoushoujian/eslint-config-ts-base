## 验证构造函数中 super() 的调用 (constructor-super)

```配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。```

派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()
JavaScript 引擎将引发一个运行时错误

该规则检查是否有一个有效的 super() 调用。

### Rule Details
该规则旨在标记无效或缺失的 super() 调用。

错误 代码示例：
```js
/*eslint constructor-super: "error"*/
/*eslint-env es6*/

class A {
    constructor() {
        super();  // This is a SyntaxError.
    }
}

class A extends B {
    constructor() { }  // Would throw a ReferenceError.
}

// Classes which inherits from a non constructor are always problems.
class A extends null {
    constructor() {
        super();  // Would throw a TypeError.
    }
}

class A extends null {
    constructor() { }  // Would throw a ReferenceError.
}
```

正确 代码示例：
```js
/*eslint constructor-super: "error"*/
/*eslint-env es6*/

class A {
    constructor() { }
}

class A extends B {
    constructor() {
        super();
    }
}
```

### When Not To Use It
如果你不想收到构造函数中无效或缺失的 super() 调用，你可以关闭此规则。

### Version
该规则在 ESLint 0.24.0 中被引入。
