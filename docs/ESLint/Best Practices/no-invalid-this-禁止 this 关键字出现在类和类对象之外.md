## 禁止 this 关键字在类或类对象之外出现 (no-invalid-this)

在严格模式下，类或者类对象之外的 this 关键字可能是 undefined 并且引发 TypeError。

### Rule Details
此规则目的在于标记类或者类对象之外的 this 关键字的使用。

基本上该规则检查一个包含 this 关键字的函数是一个构造函数还是方法。

此规则从以下条件中判断函数是否是一个构造函数：

该函数的名字以大写字母开头。
该函数被赋值给一个以大小字母开头的变量。
该函数是 ES2015 类构造函数。
此规则从以下条件中判断函数是否是一个方法：

该函数在对象字面量上。
该函数被赋值给一个属性。
该函数是一个 ES2015 类的方法、getter 或 setter。(除静态方法)
此规则允许在以下函数中出现 this 关键字：

该函数的 call/apply/bind 方法被直接调用。
如果给出 thisArg，该函数是数组方法的一个回调（比如.forEach()）。
函数在 JSDoc 注释标记中有 @this 标签。
其它情况被认为是有问题的。

该规则 只 在严格模式下生效。如果在 ESLint 配置中设置了 "parserOptions": { "sourceType": "module" }，你的代码即使没有使用 "use strict"指令，也是处于严格模式下的。

在严格模式下，错误 代码示例：
```js
/*eslint no-invalid-this: "error"*/
/*eslint-env es6*/

"use strict";

this.a = 0;
baz(() => this);

(function() {
    this.a = 0;
    baz(() => this);
})();

function foo() {
    this.a = 0;
    baz(() => this);
}

var foo = function() {
    this.a = 0;
    baz(() => this);
};

foo(function() {
    this.a = 0;
    baz(() => this);
});

obj.foo = () => {
    // `this` of arrow functions is the outer scope's.
    this.a = 0;
};

var obj = {
    aaa: function() {
        return function foo() {
            // There is in a method `aaa`, but `foo` is not a method.
            this.a = 0;
            baz(() => this);
        };
    }
};

foo.forEach(function() {
    this.a = 0;
    baz(() => this);
});
```

在严格模式下，正确 代码示例：
```js
/*eslint no-invalid-this: "error"*/
/*eslint-env es6*/

"use strict";

function Foo() {
    // OK, this is in a legacy style constructor.
    this.a = 0;
    baz(() => this);
}

class Foo {
    constructor() {
        // OK, this is in a constructor.
        this.a = 0;
        baz(() => this);
    }
}

var obj = {
    foo: function foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }
};

var obj = {
    foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }
};

var obj = {
    get foo() {
        // OK, this is in a method (this function is on object literal).
        return this.a;
    }
};

var obj = Object.create(null, {
    foo: {value: function foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }}
});

Object.defineProperty(obj, "foo", {
    value: function foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }
});

Object.defineProperties(obj, {
    foo: {value: function foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }}
});

function Foo() {
    this.foo = function foo() {
        // OK, this is in a method (this function assigns to a property).
        this.a = 0;
        baz(() => this);
    };
}

obj.foo = function foo() {
    // OK, this is in a method (this function assigns to a property).
    this.a = 0;
};

Foo.prototype.foo = function foo() {
    // OK, this is in a method (this function assigns to a property).
    this.a = 0;
};

class Foo {
    foo() {
        // OK, this is in a method.
        this.a = 0;
        baz(() => this);
    }

    static foo() {
        // OK, this is in a method (static methods also have valid this).
        this.a = 0;
        baz(() => this);
    }
}

var foo = (function foo() {
    // OK, the `bind` method of this function is called directly.
    this.a = 0;
}).bind(obj);

foo.forEach(function() {
    // OK, `thisArg` of `.forEach()` is given.
    this.a = 0;
    baz(() => this);
}, thisArg);

/** @this Foo */
function foo() {
    // OK, this function has a `@this` tag in its JSDoc comment.
    this.a = 0;
}
```

### When Not To Use It
如果你不想收到 this 关键字在类或者类对象之外使用的通知，你可以关闭此规则。

### Version
该规则在 ESLint 1.0.0-rc-2 中被引入。

