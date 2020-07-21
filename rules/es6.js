module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  rules: {
    'arrow-spacing': ['error', { before: true, after: true }], //要求箭头函数的箭头之前或之后有空格用
    'generator-star-spacing': 2, //强制 generator 函数中 * 号周围有空格
    'no-duplicate-imports': ['error', { includeExports: true }], //  禁止重复导入
    'no-useless-computed-key': 2, //禁止在对象中使用不必要的计算属性
    'no-useless-rename': 2, //禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-var': 2, //要求使用 let 或 const 而不是 var
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ], //要求对象字面量简写语法
    'prefer-const': ['error', { destructuring: 'all' }], //只有解构的值都没有被赋值才用const
    'prefer-numeric-literals': 2, //禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-rest-params': 2, //建议使用剩余参数代替 arguments
    'prefer-spread': 2, //建议使用扩展语法而非.apply()
    'rest-spread-spacing': 2, //强制剩余和扩展运算符及其表达式之间有空格
    'symbol-description': 2 //要求 symbol 描述
    // 'arrow-parens': ['error', 'as-needed'] //要求箭头函数的参数使用圆括号
  }
};
