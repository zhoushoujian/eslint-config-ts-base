module.exports = {
  rules: {
    'brace-style': ['error'], //大括号风格要求
    'comma-spacing': 'error', // 强制在逗号后面使用空格
    'dot-notation': 'error', // 强制尽可能地使用点号
    'func-call-spacing': 'error', //禁止在函数标识符和其调用之间有空格
    indent: [
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
    'lines-between-class-members': 'error', //要求或禁止在类成员之间出现空行
    'no-array-constructor': 'error', //禁止使用 Array 构造函数
    'no-dupe-class-members': 'error', //不允许类成员中有重复的名称
    'no-empty-interface': 'error', //Disallow the declaration of empty interfaces
    'no-extra-semi': 'error', //禁用不必要的分号
    'no-throw-literal': 'error', //限制可以被抛出的异常
    'no-useless-constructor': 'error', //限制可以被抛出的异常
    semi: 'error' // 要求或禁止使用分号代替 ASI
  }
};
