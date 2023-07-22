module.exports = {
  extends: ['./base.js', './react.js', './vue.js', './typescript.js', './prettier.js'],
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
    // eslint-disable-next-line global-require
    project: require('path').join(__dirname, './tsconfig.json')
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  plugins: ['react', 'import', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  rules: {}
};
