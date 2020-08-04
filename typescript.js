module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    target: 'es5',
    module: 'ESNext',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true
    },
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts']
      }
    },
    'import/extensions': ['.ts']
  },
  overrides: [
    {
      files: ['*.ts']
    }
  ],
  plugins: ['import', '@typescript-eslint'],
  rules: {
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error"], //大括号风格要求
    "@typescript-eslint/await-thenable": ["error"],  //Disallows awaiting a value that is not a Thenable
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error"],  // 强制在逗号后面使用空格
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error"],  // 强制尽可能地使用点号
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error"], //禁止在函数标识符和其调用之间有空格
    "indent": "off",
    "@typescript-eslint/indent": [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
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
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["error"],  //要求或禁止在类成员之间出现空行
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": ["error"],  //禁止使用 Array 构造函数
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],  //不允许类成员中有重复的名称
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],  //禁止出现空函数
    "no-empty-interface": "off",
    "@typescript-eslint/no-empty-interface": ["error"],  //Disallow the declaration of empty interfaces
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],  //禁用不必要的分号
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": ["error"],  // //限制可以被抛出的异常
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],  // //限制可以被抛出的异常
    "semi": "off",
    "@typescript-eslint/semi": ["error"],  // 要求或禁止使用分号代替 ASI
  }
};
