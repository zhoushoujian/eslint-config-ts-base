module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'echo "代码格式化" && lint-staged'
    // 'pre-push': 'lint-staged'
  }
};
