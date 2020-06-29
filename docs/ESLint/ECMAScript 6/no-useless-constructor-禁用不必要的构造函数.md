## 禁用不必要的构造函数 (no-useless-constructor)

ES2015 为没有指定构造函数的类提供了默认构造函数。因此，没有必要提供一个空的构造函数或只是简单的调用父类这样的构造函数，如下面的列子所示：
```js
class A {
    constructor () {
    }
}

class A extends B {
    constructor (value) {
      super(value);
    }
}
```

### Rule Details
该规则标记可以被安全移除但又不改变类的行为的构造函数。

### Examples
错误 代码示例：
```js
/*eslint no-useless-constructor: "error"*/
/*eslint-env es6*/

class A {
    constructor () {
    }
}

class A extends B {
    constructor (...args) {
      super(...args);
    }
}
```

正确 代码示例：
```js
/*eslint no-useless-constructor: "error"*/

class A { }

class A {
    constructor () {
        doSomething();
    }
}

class A extends B {
    constructor() {
        super('foo');
    }
}

class A extends B {
    constructor() {
        super();
        doSomething();
    }
}
```

### When Not To Use It
如果你不想收到关于不必要的构造函数的通知，你也可以禁用此规则。

### Version
该规则在 ESLint 2.0.0-beta.1 中被引入。
