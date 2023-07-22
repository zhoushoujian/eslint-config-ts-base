/* eslint-disable max-len */
module.exports = {
  rules: {
    // 来源于airbnb的基础规则
    // 'class-methods-use-this': [
    //   'error',
    //   {
    //     exceptMethods: []
    //   }
    // ], //强制类方法使用 this
    // 'dot-location': ['error', 'property'], //强制在点号之前或之后换行
    'guard-for-in': 'error', ////需要约束 for-in
    'max-classes-per-file': 0, //强制每个文件中包含的的类的最大数量
    'no-alert': 'warn', //禁用 Alert
    'no-new-func': 'error', //禁止使用 new 以避免产生副作用
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],
    'no-lone-blocks': 'error', //禁用不必要的嵌套块
    'no-loop-func': 'error', //禁止循环中存在函数
    'no-return-assign': ['error', 'always'], //禁止在返回语句中赋值
    'no-void': 'error', //禁止使用void操作符
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }], // 要求使用 Error 对象作为 Promise 拒绝的原因
    'no-await-in-loop': 'error', //禁止在循环中 出现 await
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ], //禁止在可能与比较操作符相混淆的地方使用箭头函数
    // 'prefer-template': 'error', //建议使用模板字面量而非字符串连接
    'template-curly-spacing': 'error', //强制模板字符串中空格的使用
    // 'yield-star-spacing': ['error', 'after'], //强制在 yield* 表达式中 * 周围使用空格
    'import/named': 'error', //Verifies that all named imports are part of the set of named exports in the referenced module.
    'import/export': 'error', //Reports funny business with exports, like repeated exports of names or defaults.
    // 'import/no-named-as-default': 'error', //Reports use of an exported name as the locally imported name of a default export.
    'import/no-named-as-default-member': 'error', //Reports use of an exported name as a property on the default export.
    'import/no-mutable-exports': 'error', //Forbids the use of mutable exports with `var` or `let`.
    'import/no-amd': 'error', //Intended for temporary use when migrating to pure ES6 modules.
    'import/first': 'error', //This rule reports any imports that come after non-import statements.
    'import/no-duplicates': 'error', //Reports if a resolved path is imported more than once.
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }], //Enforce a convention in module import order
    'import/newline-after-import': 'error', //Enforces having one or more empty lines after the last top-level import statement or require call.
    'import/no-absolute-path': 'error', //Forbid import of modules using absolute paths
    'import/no-dynamic-require': 'error', //Forbid `require()` calls with expressions
    'import/no-webpack-loader-syntax': 'error', //Forbid Webpack loader syntax in imports.
    'import/no-named-default': 'error', //Reports use of a default export as a locally named import.
    'import/no-self-import': 'error', //Forbid a module from importing itself
    'import/no-useless-path-segments': ['error', { commonjs: true }], //use this rule to prevent unnecessary path segments in import and require statements.
    'global-require': 'error', //use this rule to prevent unnecessary path segments in import and require statements.
    'eol-last': ['error', 'always'], //要求或禁止文件末尾保留一行空行
    // 'function-paren-newline': ['error', 'consistent'], //强制在函数括号内使用一致的换行
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always'
      }
    ], //?
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ], //禁止使用特定的语法
    'no-spaced-func': 'error', //?
    'no-tabs': 'error', // 禁用 tab
    'switch-colon-spacing': ['error', { after: true, before: false }], //强制在 switch 的冒号左右有空格
    'template-tag-spacing': ['error', 'never'] //要求或禁止在模板标记和它们的字面量之间有空格
  }
};
