## 强制每个文件中包含的的类的最大数量 (max-classes-per-file)

包含多个类的文件通常会导致导航性较差以及结构不良的代码库。最佳实践是保持每个文件限制于单一的责任。

### Rule Details
这个规则强制每个文件只能包含一个特定数量的类，没有更多。

错误 代码示例：
```js
/*eslint max-classes-per-file: "error"*/

class Foo {}
class Bar {}
```

正确 代码示例：
```js
/*eslint max-classes-per-file: "error"*/

class Foo {}
```

### Options
此规则有一个数值选项（默认为1）来指定类的最大数量。

例如:
```js
{
    "max-classes-per-file": ["error", 1]
}
```

数值选项设置为 2 的 正确 代码示例：
```js
/* eslint max-classes-per-file: ["error", 2] */

class Foo {}
class Bar {}
```

### Version
该规则在 ESLint 5.0.0-alpha.3 中被引入。

