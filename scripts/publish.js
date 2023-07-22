/* eslint-disable no-console */
const shell = require('shelljs');
const packageJson = require('../package.json');

let cancelChangeNpmConfig = () => {};

function changeNpmConfig() {
  return executeCmd('npm config get registry', 'changeNpmConfig');
}

function publish() {
  return executeCmd('npm publish', 'publish');
}

function syncTaoBao() {
  return executeCmd('curl -X PUT https://npm.taobao.org/sync/eslint-config-ts-base', 'syncTaoBao');
}

function gitTag() {
  return executeCmd(`git tag -a ${packageJson.version} -m ${packageJson.version}`, 'gitTag');
}

function executeCmd(cmd, logInfo) {
  return new Promise(res => {
    const child = shell.exec(cmd, { async: true });
    child.stdout.on('data', function (data) {
      console.log(`${logInfo} stdout: `, data);
      if (logInfo === 'changeNpmConfig' && !data.includes('registry.npmjs.org')) {
        shell.exec('npm config set registry=https://registry.npmjs.org');
        console.log('暂时关闭淘宝镜像');
        cancelChangeNpmConfig = () => {
          shell.exec('npm config set registry=http://registry.npm.taobao.org/');
          console.log('重新设置淘宝镜像');
        };
      }
    });
    child.stderr.on('data', function (data) {
      console.warn(`${logInfo} stderr: `, data);
    });
    child.on('exit', function (code) {
      console.log(`${logInfo} exit code: `, code);
      if (code === 0) {
        console.log(`${logInfo} 成功`);
      } else {
        console.error(`${logInfo} 失败`);
        process.exit(1);
      }
      res();
    });
  });
}

changeNpmConfig()
  .then(publish)
  .then(syncTaoBao)
  .then(gitTag)
  .then(() => cancelChangeNpmConfig())
  .then(() => {
    console.log('发布成功');
    process.exit(0);
  })
  .catch(err => {
    console.error('publish catch err', err);
    process.exit(1);
  });
