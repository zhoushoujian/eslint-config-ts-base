module.exports = {
  rules: {
    // 禁止未使用的变量 以__开头的变量除外
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^__' }
    ]
  }
};
