# 常见问题

遇到了什么问题，可以先来这里查找，如果没有找到，请提 issues [Github issues](https://github.com/ialley-workshop-open/uni-halo/issues)丨[Gitee issues](https://gitee.com/ialley-workshop-open/uni-halo/issues)

## 常见问题与解决方案

- **1、如何解决在外置的浏览器调试出现跨域问题？**
  <br/>答：在项目目录找到`common/http/index.js` 文件中的第`23-24`行代码，将代码注释掉即可，如下所示：

  ```javascript
  // 如果是在外部浏览器调试或者编译为h5，请注释该行代码
  // config.baseURL = HaloConfig.apiUrl;
  ```

- **2、将项目编译为 H5（web）应用时候，跨域如何解决？**
  <br/>答：在项目目录找到`common/http/index.js` 文件中的第`23-24`行代码，将代码注释掉即可，如下所示：

  ```javascript
  // 如果是在外部浏览器调试或者编译为h5，请注释该行代码
  // config.baseURL = HaloConfig.apiUrl;
  ```

- 待补充...
