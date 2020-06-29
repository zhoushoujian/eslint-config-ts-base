module.exports = {
  rules: {
    'accessor-pairs': 0, // 强制getter/setter成对出现在对象中
    'array-callback-return': ['error', { allowImplicit: true }], // 强制数组方法的回调函数中有 return 语句
    'block-scoped-var': 2, // 强制把变量的使用限制在其定义的作用域范围内
    'default-case': ['error', { commentPattern: '^no default$' }], // 要求 Switch 语句中有 Default 分支
    eqeqeq: 2, // 要求使用 === 和 !==
    'no-caller': 2, //禁用 caller 或 callee
    'no-eq-null': 2, // 禁止与 null 进行比较
    'no-eval': 2, //禁用 eval()
    'no-extra-bind': 2, //禁止不必要的 .bind() 调用
    'no-extra-label': 2, //禁用不必要的标签
    'no-floating-decimal': 2, //禁止浮点小数
    'no-implied-eval': 2, //禁用隐式的eval()
    'no-iterator': 2, //禁用迭代器
    'no-labels': 2, //禁用标签语句
    'no-multi-spaces': ['error', { ignoreEOLComments: true }], //除了注释，禁止出现多个空格
    'no-multi-str': 2, //禁止多行字符串
    'no-new': 2, //禁止原始包装实例
    'no-new-wrappers': 2, //禁用Function构造函数
    'no-octal': 2, //禁用八进制字面量
    'no-octal-escape': 2, //禁止在字符串字面量中使用八进制转义序列
    'no-proto': 2, //禁用__proto__被赋值
    'no-return-await': 2, //禁用不必要的 return await
    'no-script-url': 2, //禁用 Script URL
    'no-self-assign': 2, //禁止自身赋值
    'no-self-compare': 2, //禁止自身比较
    'no-sequences': 2, //不允许乱用逗号操作符
    'no-unmodified-loop-condition': 2, //禁用一成不变的循环条件
    'no-useless-call': 2, // 禁用不必要的 .call() 和 .apply()
    'no-useless-catch': 2, // 禁止不必要的 catch 子句
    'no-useless-concat': 2, //禁止没有必要的字符拼接
    'no-with': 2, //禁用 with 语句
    'vars-on-top': 2, //要求将变量声明放在它们作用域的顶部
    'wrap-iife': ['error', 'any'], //需要把立即执行的函数包裹起来
    yoda: 2, //要求或者禁止Yoda条件
    radix: ['error', 'as-needed'], //要求必须有基数,但禁止提供基数10
    curly: ['error', 'multi-line'], //要求遵循大括号约定
    'no-return-assign': ['error', 'except-parens'] // https://eslint.cn/docs/rules/no-return-assign
  }
};
