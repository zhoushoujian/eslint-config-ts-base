/* eslint-disable global-require */
/* eslint-disable no-console */
const figlet = require('figlet');
const {
  comparePackageVersion,
  getProjectFolder
} = require('@shuyun-ep-team/specified-package-version-check');
const { name, version } = require('./package.json');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    './rules/airbnb-base.js',
    './rules/best-practices.js',
    './rules/disabled-by-typescript.js',
    './rules/es6.js',
    './rules/eslint-recommend.js',
    './rules/imports.js',
    './rules/others.js',
    './rules/style.js'
  ],
  parserOptions: {
    target: 'es5',
    module: 'ESNext',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
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
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': ['.js']
  },
  plugins: ['import'],
  rules: {
    '@typescript-eslint/no-throw-literal': ['off'],
    '@typescript-eslint/dot-notation': ['off'],
    '@typescript-eslint/await-thenable': ['off'],
    'no-empty-interface': 'off',
    '@typescript-eslint/no-empty-interface': ['off']
  }
};

//检查eslint版本是否过期
comparePackageVersion(name, version).then(({ result, remoteVersion }) => {
  if (result === true) {
    console.log(figlet.textSync('eslint-config'));
    console.warn(`${name} has been outdated!`);
    console.warn(`local version: ${version}`);
    console.warn(`remote version: ${remoteVersion}`);
  }
});
//如果项目的package.json里指定了eslint版本，如果指定了，在控制台给出提示
const projectFolder = getProjectFolder();
let packageInfo = {};
try {
  // eslint-disable-next-line import/no-dynamic-require
  packageInfo = require(`${projectFolder}package.json`);
} catch (err) {
  console.warn(projectFolder, ': require err', err);
}
const { devDependencies, dependencies } = packageInfo;
if (devDependencies || dependencies) {
  [devDependencies || {}, dependencies || {}].forEach((item, index) => {
    Object.keys(item).some(child => {
      if (child === 'eslint') {
        const version = index === 0 ? devDependencies[child] : dependencies[child];
        console.warn(
          `请移除项目package.json里的eslint：${version}，${name}已经指定了eslint版本，覆盖${name}里的eslint可能会造成不可知的问题`
        );
        return true;
      } else {
        return false;
      }
    });
  });
}
