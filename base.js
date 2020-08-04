module.exports = {
  parser: "babel-eslint",
  extends: [
    './rules/airbnb.js',
    './rules/best-practices.js',
    './rules/disabled-by-typescript.js',
    './rules/es6.js',
    './rules/eslint-recommend.js',
    './rules/imports.js',
    './rules/others.js',
    './rules/style.js',
  ],
  parserOptions: {
    target: 'es5',
    module: 'ESNext',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
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
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': ['.js']
  },
  plugins: ['import'],
  rules: {
    "@typescript-eslint/no-throw-literal": ["off"],
    "@typescript-eslint/dot-notation": ["off"],
    "@typescript-eslint/await-thenable": ["off"],
    "no-empty-interface": "off",
    "@typescript-eslint/no-empty-interface": ["off"]
  }
};
