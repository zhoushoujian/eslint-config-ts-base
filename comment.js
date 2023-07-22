module.exports = {
  extends: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    target: 'es5',
    module: 'ESNext',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    // eslint-disable-next-line global-require
    project: require('path').join(__dirname, './tsconfig.json')
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['jsdoc', 'eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn', // provides a rule for validating that TypeScript doc comments
    'jsdoc/check-access': 1, // Recommended
    'jsdoc/check-alignment': 1, // Recommended
    'jsdoc/check-param-names': 1, // Recommended
    'jsdoc/check-property-names': 1, // Recommended
    'jsdoc/check-tag-names': 1, // Recommended
    'jsdoc/check-types': 1, // Recommended
    'jsdoc/check-values': 1, // Recommended
    'jsdoc/empty-tags': 1, // Recommended
    'jsdoc/implements-on-classes': 1, // Recommended
    'jsdoc/newline-after-description': 1, // Recommended
    'jsdoc/no-undefined-types': 1, // Recommended
    'jsdoc/require-jsdoc': 1, // Recommended
    'jsdoc/require-param': 1, // Recommended
    'jsdoc/require-param-description': 1, // Recommended
    'jsdoc/require-param-name': 1, // Recommended
    'jsdoc/require-param-type': 1, // Recommended
    'jsdoc/require-property': 1, // Recommended
    'jsdoc/require-property-description': 1, // Recommended
    'jsdoc/require-property-name': 1, // Recommended
    'jsdoc/require-property-type': 1, // Recommended
    'jsdoc/require-returns': 1, // Recommended
    'jsdoc/require-returns-check': 1, // Recommended
    'jsdoc/require-returns-description': 1, // Recommended
    'jsdoc/require-returns-type': 1, // Recommended
    'jsdoc/require-yields': 1, // Recommended
    'jsdoc/require-yields-check': 1, // Recommended
    'jsdoc/valid-types': 1 // Recommended
  }
};
