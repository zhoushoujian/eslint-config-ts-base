## 禁止原始包装实例 (no-new-wrappers)

在 JavaScript 中有3种原始类型包装对象：字符串，数字和布尔值。它们所代表的构造器分别为 String、Number 和 Boolean。当读取原始类型的值或者为它们提供如方法等类似对象的功能时，原始包装类型将被使用。在幕后，相关包装器类型的一个对象被创建，然后销毁，这就是为什么你可以在原始值上调用方法，例如：
```js
var text = "Hello world".substring(2);
```
在本例中幕后，一个 String 对象被创建。substring() 方法存在于 String.prototype中，所以可以访问字符实例。

还可以手动创建一个新的包装器实例：

var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);
虽然这么做是可行的，没有任何好的理由使用这些原始包装器作为构造函数。这会是其它开发者感到困惑，因为它们看起像是原始类型，但实际上不是这样的。例如：
```js
var stringObject = new String("Hello world");
console.log(typeof stringObject);       // "object"

var text = "Hello world";
console.log(typeof text);               // "string"

var booleanObject = new Boolean(false);
if (booleanObject) {    // all objects are truthy!
    console.log("This executes");
}
```
第一个问题是原始包装对象实际上是对象。这意味着 typeod 将返回 "object" 而不是 "string"、"number" 或者 "boolean"。第二个问题来自布尔型对象。每个对象都是真，这以为着每个 Boolean 的实例都会返回 true，即使它们实际的值是 false。

由于这些原因，最佳实践认为避免使用 new 来使用原始包装类型。

### Rule Details
此规则目的在于消除通过 new 操作符使用 String、Number 和 Boolean 。因此，每当遇到 new String、new Number 或者 new Boolean，该规则都会发出警告。

错误 代码示例：
```js
/*eslint no-new-wrappers: "error"*/

var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);

var stringObject = new String;
var numberObject = new Number;
var booleanObject = new Boolean;
```

正确 代码示例：
```js
/*eslint no-new-wrappers: "error"*/

var text = String(someValue);
var num = Number(someValue);

var object = new MyString();
```

### When Not To Use It
如果你想允许使用原始包装器对象，那么你可以关闭此规则。

### Version
该规则在 ESLint 0.0.6 中被引入。

