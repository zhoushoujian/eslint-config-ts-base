module.exports = {
  extends: [
    './base.js',
    './react.js',
    './typescript',
    'prettier',
    './rules/prettier'
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
    },
    project: './tsconfig.json'
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
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx']
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  plugins: ['react', 'import', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  rules: {}
};
