module.exports = {
  rules: {
    'for-direction': 2, //强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'getter-return': 2, //强制在 getter 属性中出现一个 return 语句
    'no-async-promise-executor': 2, //禁止使用异步函数作为 Promise executor
    'no-compare-neg-zero': 2, //禁止与 -0 进行比较
    'no-cond-assign': 2, //禁止在条件语句中出现赋值操作符
    'no-constant-condition': 2, //禁止在条件中使用常量表达式
    'no-control-regex': 2, //禁止在正则表达式中使用控制字符
    'no-debugger': 2, //禁用 debugger
    'no-dupe-args': 2, // 禁止在 function 定义中出现重复的参数
    'no-dupe-keys': 2, //禁止在对象字面量中出现重复的键
    'no-duplicate-case': 2, //禁止重复 case 标签
    'no-empty': 2, //禁止空块语句
    'no-empty-character-class': 2, //禁止在正则表达式中出现空字符集
    'no-ex-assign': 2, // 禁止对 catch 子句中的异常重新赋值
    'no-extra-boolean-cast': 2, //禁止不必要的布尔类型转换
    'no-extra-semi': 2, //禁用不必要的分号
    'no-func-assign': 2, //禁止对 function 声明重新赋值
    'no-inner-declarations': 2, //禁止在嵌套的语句块中出现变量或 function 声明
    'no-invalid-regexp': 2, //禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-irregular-whitespace': 2, //禁止不规则的空白
    'no-misleading-character-class': 2, //不允许在字符类语法中出现由多个代码点组成的字符
    'no-obj-calls': 2, //禁止将全局对象当作函数进行调用
    'no-prototype-builtins': 2, //禁止直接使用 Object.prototypes 的内置属性
    'no-regex-spaces': 2, //禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': 2, //禁用稀疏数组
    'no-unexpected-multiline': 2, //禁止使用令人困惑的多行表达式
    'no-unreachable': 2, //禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unsafe-finally': 2, //禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': 2, //禁止对关系运算符的左操作数使用否定操作符
    'require-atomic-updates': 2, //禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'use-isnan': 2, //要求调用 isNaN()检查 NaN
    'valid-typeof': 2, //强制 typeof 表达式与有效的字符串进行比较
    'no-case-declarations': 2, //禁止在 case 或 default 子句中出现词法声明
    'no-empty-pattern': 2, //禁止使用空解构模式
    'no-fallthrough': 2, //禁止 case 语句落空
    'no-global-assign': 2, //禁止对原生对象或只读的全局对象进行赋值
    'no-octal': 2, //禁用八进制字面量
    'no-redeclare': 2, //禁止重新声明变量
    'no-self-assign': 2, // 禁止自身赋值
    'no-unused-labels': 2, //禁用未使用过的标签
    'no-useless-catch': 2, //禁止不必要的 catch 子句
    'no-useless-escape': 2, // 禁用不必要的转义
    'no-with': 2, //禁用 with 语句
    'no-delete-var': 2, //禁止删除变量
    'no-shadow-restricted-names': 2, // 禁止变量声明覆盖外层作用域的变量
    'no-undef': 2, //不允许使用undefined变量
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], //禁止未使用过的变量
    'no-mixed-spaces-and-tabs': 2, //禁止使用 空格 和 tab 混合缩进
    'constructor-super': 2, // 验证构造函数中 super() 的调用
    'no-class-assign': 2, //不允许修改类声明的变量
    'no-const-assign': 2, //不允许改变用const声明的变量
    'no-dupe-class-members': 2, //不允许类成员中有重复的名称
    'no-new-symbol': 2, //禁止 Symbolnew 操作符和 new 一起使用
    'no-this-before-super': 2, //在构造函数中禁止在调用super()之前使用this或super
    'require-yield': 2 //禁用函数内没有yield的 generator 函数
  }
};
