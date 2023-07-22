module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', 'ts', 'jsx', 'tsx']
      }
    },
    'import/extensions': ['.js', '.ts', '.jsx', 'tsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },

  rules: {
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     mjs: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ], //Ensure consistent use of file extension within the import path
    'import/no-unresolved': 'off', //Ensures an imported module can be resolved to a module on the local filesystem
    'import/prefer-default-export': 'off', //When there is only a single export from a module, prefer using default export over named export
    //Forbid the import of external modules that are not declared in the `package.json`'s
    //`dependencies`, `devDependencies`, `optionalDependencies`, `peerDependencies`, or `bundledDependencies`
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off' //Ensures that there is no resolvable path back to this module via its dependencies
  }
};
