# eslint-config-kylin-typescript

## 介绍

无依赖第三方规则包，启用的所有规则都可以在.eslintc.js 或 rules 文件夹下找到  
启用的所有规则都有注释，所有规则的详细说明都在 docs 文件夹下，可通过规则名搜到对应规则的文件名

## 安装

```shell
npm i @shuyun-ep-team/eslint-config
```

## 使用

## 规则说明

"0"表示忽略问题，等同于"off";
"1"表示给出警告，等同于"warn";
"2"表示直接报错，等同于"error"。

`若不适用 React 请使用 base.js`

## 官方地址

`eslint官方地址`：https://eslint.cn/docs/rules/
`eslint-plugin-react官方地址`：https://github.com/yannickcr/eslint-plugin-react
`eslint-plugin-jsx-a11y官方地址`：https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
`eslint-plugin-react-hooks官方地址`：https://github.com/facebook/react/tree/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks
`eslint-plugin-import官方地址`：https://github.com/benmosher/eslint-plugin-import

### 代码提交类型说明：

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
