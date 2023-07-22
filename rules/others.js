module.exports = {
  rules: {
    //很可能是错误
    'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法

    //建议
    'no-console': 1, //禁用 console
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }], //要求使用一致的 return 语句

    //严格模式
    strict: 2, // 要求使用严格模式指令

    //这些规则与变量声明有关：
    'no-label-var': 2, //禁用与变量同名的标签
    'no-undef-init': 2, //不允许初始化变量值为 undefined
    // 'no-undefined': 2, //  不允许使用undefined变量

    //关于Node.js 或 在浏览器中使用CommonJS
    'no-buffer-constructor': 2, //禁用 Buffer() 构造函数
    'no-new-require': 2, //不允许 new require
    'no-path-concat': 2 //当使用 _dirname 和 _filename 时不允许字符串拼接
  }
};
