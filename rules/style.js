module.exports = {
  rules: {
    // 'array-bracket-newline': ['error', 'consistent'], // 对每个括号要求使用一致的换行符。如果一个括号有换行符，另一个没有，则会报错
    camelcase: ['warn', { properties: 'never', ignoreDestructuring: false }], //要求使用骆驼拼写法
    'comma-spacing': 2, //强制在逗号后面使用空格
    'computed-property-spacing': ['error', 'never'], //禁止在计算属性中使用空格
    'func-call-spacing': 2, //禁止在函数标识符和其调用之间有空格
    // 'implicit-arrow-linebreak': 2, //强制隐式返回的箭头函数体的位置
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], //禁止在对象字面量的键和冒号之间存在空格
    'max-nested-callbacks': ['error', 10], // 强制回调函数最大嵌套深度
    'max-statements-per-line': ['error', { max: 3 }], // 强制每一行中所允许的最大语句数量
    'new-cap': 2, //要求构造函数首字母大写
    'new-parens': 2, //要求调用无参构造函数时带括号
    'no-array-constructor': 2, //禁止使用 Array 构造函数
    'no-bitwise': 2, //禁止使用按位操作符
    'no-multi-assign': 2, //禁止连续赋值
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }], //不允许多个空行
    'no-new-object': 2, //禁止使用 Object 构造函数
    'no-whitespace-before-property': 2, //禁止属性前有空白
    // 'nonblock-statement-body-position': 2, //强制单个语句的位置
    'semi-spacing': 2, //强制分号后有空格
    'semi-style': 2, //强制分号的位置
    'space-infix-ops': 2, //要求操作符周围有空格
    'space-unary-ops': 2, //要求在一元操作符之前或之后存在空格
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], //要求或禁止在类成员之间出现空行
    // 'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], //禁止使用一元操作符 ++ 和 --
    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ], //强制行的最大长度
    // 'operator-linebreak': 'off', //强制操作符使用一致的换行符风格
    // 'object-curly-newline': 'off' //强制在花括号内使用一致的换行符
  },
};
