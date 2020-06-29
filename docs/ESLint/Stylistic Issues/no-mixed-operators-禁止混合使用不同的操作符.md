## 禁止混合使用不同的操作符 (no-mixed-operators)

封闭的复杂表达式使用括号括起来明确了开发者的意图，使代码更具可读性。当表达式中连续的不同的操作符没有使用括号括起来，该规则将发出警告。

```js
var foo = (a && b) || c || d; /*BAD: Unexpected mix of '&&' and '||'.*/
var foo = (a && b) || c || d; /*GOOD*/
var foo = a && (b || c || d); /*GOOD*/
```

注意：

该规则期望对一对混合操作符发出一个错误。因此，对于使用的每两个连续混合操作符，将显示一个明显的错误，指向特定的破坏该规则的操作符:

```js
var foo = (a && b) || c || d;
```

将生成：
1:13 Unexpected mix of '&&' and '||'. (no-mixed-operators)
1:18 Unexpected mix of '&&' and '||'. (no-mixed-operators)

### Rule Details

该规则检查 BinaryExpression 和 LogicalExpression。

该规则可能与 no-extra-parens 规则。如果你同时使用该规则和 no-extra-parens 规则，你需要使用 no-extra-parens 规则的 nestedBinaryExpressions 的选项。

错误 代码示例：

/_eslint no-mixed-operators: "error"_/

var foo = a && b < 0 || c > 0 || d + 1 === 0;
var foo = a + b \* c;
正确 代码示例：

````js
/*eslint no-mixed-operators: "error"*/
```js
var foo = a || b || c;
var foo = a && b && c;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a && (b < 0 || c > 0 || d + 1 === 0);
var foo = a + (b * c);
var foo = (a + b) * c;
````

### Options

```js
{
    "no-mixed-operators": [
        "error",
        {
            "groups": [
                ["+", "-", "*", "/", "%", "**"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": true
        }
    ]
}
```

该规则有两个选项。

groups (string[][]) - 指定要检查的操作符分组。groups 选项是分组的列表，分组是二进制运算符的列表。默认操作符分组定义为算术、位、比较、逻辑和关系运算符。
allowSamePrecedence (boolean) - 指定是否允许混合运算符具有相同的优先级。默认为 true。
groups
下面的操作符可以在 groups 选项中使用：

算数操作符："+"、"-"、"\*"、"/"、"%"、"\*\*"
位操作符："&"、"|"、"^"、"~"、"<<"、">>"、">>>"
比较操作符："=="、"!="、"==="、"!=="、">"、">="、"<"、"<="
逻辑操作符："&&"、"||"
关系操作符："in"、"instanceof"
现在，考虑以下分组配置：{"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}。 在这个配置中指定了两个组: 位操作符和逻辑运算符。 该规则检查操作符是否仅属于同一组。 在这种情况下，该规则检查是否混合了位操作符和逻辑运算符，但忽略了所有其他操作符。

选项 {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]} 的 错误 代码示例：

/_eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}]_/

var foo = a && b < 0 || c > 0 || d + 1 === 0;
var foo = a & b | c;
选项 {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]} 的 正确 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}]*/

var foo = a || b > 0 || c + 1 === 0;
var foo = a && b > 0 && c + 1 === 0;
var foo = (a && b < 0) || c > 0 || d + 1 === 0;
var foo = a && (b < 0 || c > 0 || d + 1 === 0);
var foo = (a & b) | c;
var foo = a & (b | c);
var foo = a + b * c;
var foo = a + b * c;
var foo = (a + b) * c;
```

`allowSamePrecedence`
选项 {"allowSamePrecedence": true} 的 正确 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"allowSamePrecedence": true}]*/

// + and - have the same precedence.
var foo = a + b - c;
```

选项 {"allowSamePrecedence": false} 的 错误 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"allowSamePrecedence": false}]*/

// + and - have the same precedence.
var foo = a + b - c;
```

选项 {"allowSamePrecedence": false} 的 正确 代码示例：

```js
/*eslint no-mixed-operators: ["error", {"allowSamePrecedence": false}]*/

// + and - have the same precedence.
var foo = a + b - c;
```

### When Not To Use It

如果你不想收到关于混合操作的通知，你可以关闭此规则。

### Version

该规则在 ESLint 2.12.0 中被引入。
