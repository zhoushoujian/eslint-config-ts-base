## 禁用 process.env (no-process-env)

Node.js 中的 process.env 对象用于存储部署或配置参数。在项目中随意使用它会作为另一个全局依赖会导致维护问题。因此，它可能会在一个多用户的设置中导致合并冲突和导致一个多服务器设置中的部署问题。相反，最好的做法是定义所有这些参数在一个配置/设置文件，这个文件可以在整个项目中访问。

### Rule Details
此规则旨在阻止 process.env 的使用而避免全局依赖关系。因此，每当 process.env被使用时会给出警告。

错误 代码示例：
```js
/*eslint no-process-env: "error"*/

if(process.env.NODE_ENV === "development") {
    //...
}
```

正确 代码示例：
```js
/*eslint no-process-env: "error"*/

var config = require("./config");

if(config.env === "development") {
    //...
}
```

### When Not To Use It
如果你更愿意在整个项目中使用 process.env 从环境变量中检索值，你可以安全地禁用此规则。

### Version
该规则在 ESLint 0.9.0 中被引入。
