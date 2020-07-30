// 添加特定的 React 设置，若不适用 React 请使用 base.js
module.exports = {
  extends: [
    './base.js',
    './rules/react.js',
    './rules/react-a11y.js',
    './rules/react-hooks.js',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    target:
      'es5' /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    module:
      'ESNext' /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
      }
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx']
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  plugins: ['react', 'import', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'function-paren-newline': 0, //强制在函数括号内使用一致的换行
    'array-bracket-newline': 0, // 对每个括号要求使用一致的换行符。如果一个括号有换行符，另一个没有，则会报错
    'newline-per-chained-call': 0, //要求方法链中每个调用都有一个换行符
    'nonblock-statement-body-position': 0, //强制单个语句的位置
    'implicit-arrow-linebreak': 0, //强制隐式返回的箭头函数体的位置
    'wrap-iife': 0, //需要把立即执行的函数包裹起来
    "react/jsx-curly-spacing": 0, // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    "react/jsx-first-prop-new-line": 0, //Configure the position of the first property
    'react/jsx-max-props-per-line': 0, // Limit maximum of props on a single line in JSX
    'react/jsx-curly-newline': 0, //Enforce linebreaks in curly braces in JSX attributes and expressions.

    // 重新启用部分prettier关闭的规则
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
    curly: ['error', 'multi-line'], //要求遵循大括号约定
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ], //禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-tabs': 'error', // 禁用 tab
    'no-unexpected-multiline': 2, //禁止使用令人困惑的多行表达式
    'arrow-spacing': ['error', { before: true, after: true }], //要求箭头函数的箭头之前或之后有空格用
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], //大括号风格要求
    'comma-spacing': 2, //强制在逗号后面使用空格
    'computed-property-spacing': ['error', 'never'], //禁止在计算属性中使用空格
    'eol-last': ['error', 'always'], //要求或禁止文件末尾保留一行空行
    'func-call-spacing': 2, //禁止在函数标识符和其调用之间有空格
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ],
        ignoreComments: false
      }
    ], //强制使用一致的缩进
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], //禁止在对象字面量的键和冒号之间存在空格
    'new-parens': 2, //要求调用无参构造函数时带括号
    'no-extra-semi': 2, //禁用不必要的分号
    'no-floating-decimal': 2, //禁止浮点小数
    'no-mixed-spaces-and-tabs': 2, //禁止使用 空格 和 tab 混合缩进
    'no-multi-spaces': ['error', { ignoreEOLComments: true }], //除了注释，禁止出现多个空格
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }], //不允许多个空行
    'no-whitespace-before-property': 2, //禁止属性前有空白
    'rest-spread-spacing': 2, //强制剩余和扩展运算符及其表达式之间有空格
    semi: ['error', 'always'], //要求或禁止使用分号代替
    'semi-spacing': 2, //强制分号后有空格
    'semi-style': 2, //强制分号的位置
    'space-infix-ops': 2, //要求操作符周围有空格
    'space-unary-ops': 2, //要求在一元操作符之前或之后存在空格
    'switch-colon-spacing': ['error', { after: true, before: false }], //强制在 switch 的冒号左右有空格
    'template-curly-spacing': 'error', //强制模板字符串中空格的使用
    'react/jsx-equals-spacing': 2, //Enforce or disallow spaces around equal signs in JSX attributes.
    'react/jsx-props-no-multi-spaces': 2, //Disallow multiple spaces between inline JSX props
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ], // Validate whitespace in and around the JSX opening and closing brackets
  }
};
