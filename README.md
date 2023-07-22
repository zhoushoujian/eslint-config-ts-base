# eslint-config-ts-base
## 介绍

无依赖第三方规则包，启用的所有规则都可以在.eslintrc.js 或 rules 文件夹下找到  
启用的所有规则都有注释，所有规则的详细说明都在 docs 文件夹下，可通过规则名搜到对应规则的文件名

## 安装

```shell
npm i eslint-config-ts-base --save-dev
```

## 注意

不要在项目里手动指定 `eslint` 版本，正确的做法是使用 `eslint-config-ts-base` 里的 `eslint` 版本。  
如果 `eslint` 版本不一致，那么 `eslint-config-ts-base` 有可能不会正常工作。

## 使用

在 package.json 的 script 里新增一条命令和增加 husky, 如下：

```js
"scripts": {
  "checkcode": "eslint -c .eslintrc.js \"**/*.{js,jsx,ts,tsx}\"",
}
```

将下面的代码保存至项目根目录，文件名为.eslintrc.js
`默认用法`

```js
module.exports = {
  extends: ['eslint-config-ts-base'],
  rules: {},
};
```

`仅使用javascript规则的用法`

```js
module.exports = {
  extends: ['eslint-config-ts-base/base'],
  rules: {},
};
```

`仅使用react规则的用法`

```js
module.exports = {
  extends: ['eslint-config-ts-base/react'],
  rules: {},
};
```

`仅使用prettier规则的用法`

```js
module.exports = {
  extends: ['eslint-config-ts-base/prettier'],
  rules: {},
};
```

`仅使用vue规则的用法`

```js
module.exports = {
  extends: ['eslint-config-ts-base/vue'],
  rules: {},
};
```

`仅使用typescript规则的用法`

```js
module.exports = {
  extends: ['eslint-config-ts-base/typescript'],
  rules: {},
};
```

`仅使用comment规则的用法`

```js
module.exports = {
  extends: ['eslint-config-ts-base/comment'],
  rules: {},
};
```

建议直接使用`"extends": ["eslint-config-ts-base"]`,不要使用`"extends": ["eslint-config-ts-base/base", "eslint-config-ts-base/react", "eslint-config-ts-base/typescript"]`,因为eslint-config-ts-base 还包含了 prettier 相关的规则

### 使用 Prettier

`eslint有可能会与prettier冲突，请参考此文档排查规则：https://github.com/prettier/eslint-config-prettier#curly`

- vscode 下安装插件,

- [WebStorm 的安装配置点这里](https://prettier.io/docs/en/webstorm.html)

- 忽略 Prettier 规则，[参考这里](https://prettier.io/docs/en/ignore.html)

- 安装 Prettier

```bash
npm i prettier -D
```

- 使用

```javascript

// 在package.json 设置如下
{
  "prettier": "eslint-config-ts-baseg/.prettierrc"
}

// 或者 在 .prettierrc.js，如
module.exports = {
  ...require("eslint-config-ts-base/.prettierrc"),
  semi: false,
};

```

- [配置项文档](https://prettier.io/docs/en/options.html)

## 非 typescript 非 React 项目的配置参考

```js
module.exports = {
  extends: ['eslint-config-ts-base/base', 'eslint-config-ts-base/prettier'],
};
```

## 规则说明

"0"表示忽略问题，等同于"off";
"1"表示给出警告，等同于"warn";
"2"表示直接报错，等同于"error"。

`若不适用 React 请使用 base.js`

## 官方地址

`eslint官方地址`：<https://eslint.cn/docs/rules/>
`eslint-plugin-react官方地址`：<https://github.com/yannickcr/eslint-plugin-react>
`eslint-plugin-jsx-a11y官方地址`：<https://github.com/jsx-eslint/eslint-plugin-jsx-a11y>
`eslint-plugin-react-hooks官方地址`：<https://github.com/facebook/react/tree/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks>
`eslint-plugin-import官方地址`：<https://github.com/benmosher/eslint-plugin-import>

### 代码提交类型说明

`type` :(required)代表提交类型；如修改一个 bug 或者是添加一个新的 feature。类型有以下几种：

- feat :新功能（feature）
- fix :修复 bug
- docs :仅修改了文档，如 README、CHANGLOG 等
- style :仅修改了空格、缩进、逗号、单双引号等，不修改代码逻辑
- refactor :代码重构，没有新增功能或者修改 bug
- perf :优化相关，比如提升性能、体验
- test :测试用例，单元测试、集成测试
- chore :改进构建流程或添加新依赖、工具等
- revert :回滚代码到上一次提交
