module.exports = {
  extends: [
    './rules/airbnb.js',
    './rules/best-practices.js',
    './rules/es6.js',
    './rules/eslint-recommend.js',
    './rules/imports.js',
    './rules/others.js',
    './rules/style.js'
  ].map(require.resolve),
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
  plugins: ['import', '@typescript-eslint'],
  rules: {}
};
