module.exports = {
  rules: {
    //很可能是错误
    'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法

    //严格模式
    strict: 2, // 要求使用严格模式指令

    //这些规则与变量声明有关：
    'no-label-var': 2, //禁用与变量同名的标签
    'no-undef-init': 2, //不允许初始化变量值为 undefined
    'no-undefined': 2, //  不允许使用undefined变量

    //关于Node.js 或 在浏览器中使用CommonJS
    'no-buffer-constructor': 2, //禁用 Buffer() 构造函数
    'no-new-require': 2, //不允许 new require
    'no-path-concat': 2, //当使用 _dirname 和 _filename 时不允许字符串拼接

    //继承于原来ts的规则
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], //大括号风格要求
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
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
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
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false
      }
    ], //禁止不必要的括号
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ], //禁止使用魔术数字
    semi: ['error', 'always'], //要求或禁止使用分号代替
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ] //要求或禁止函数圆括号之前有一个空格
  }
};
