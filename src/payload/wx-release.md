# 发布部署

该内容会引导您发布和部署微信小程序。

## 打包步骤

开始之前，您必须已经完成 `部署指南` 前面的步骤，否则以下步骤可能无法继续进行。

:::warning 再次提示
同时再次说明，您填写在 `halo.config.js` 中的 `apiUrl` 字段的值，必须是携带 `https` 协议的，这很重要，因为微信小程序上线发布必须是该协议，且必须是已经通过国内备案！
:::

### 第 1 步、修改配置

- 1. 重新获取应用 `uni-app应用标识（AppId）`，项目根目录下找到 `manifest.json` 点击 `基础配置` 找到 `uni-app应用标识（AppId）` 右侧的 `重新获取` 按钮并点击重新获取即可， 如图所示：

![https://img.925i.cn/file/91da5f8b16c19a24bc524.png](https://img.925i.cn/file/91da5f8b16c19a24bc524.png)

- 2. 登录注册好的微信小程序后台 [`微信公众平台`](https://mp.weixin.qq.com/)

找到左侧菜单 `设置-帐号信息`下的 `AppID(小程序ID)` 复制该值，如图所示：

![https://img.925i.cn/file/b0bebb03a839adb53d1e5.png](https://img.925i.cn/file/b0bebb03a839adb53d1e5.png)

- 3. 回到 `HBuilder X` 开发工具中，在 `uni-halo` 项目根目录下找到 `manifest.json` ，点击 `微信小程序配置` 找到 `微信小程序AppID` 输入框，粘贴刚才复制的内容，如图所示：

![https://img.925i.cn/file/de0bf50c9958c39ce6845.png](https://img.925i.cn/file/de0bf50c9958c39ce6845.png)

- 4. 配置微信小程序的业务域名，也就是 api 接口白名单，

登录微信小程序后台，找到 `开发管理-开发设置` 如图所示：

![https://img.925i.cn/file/db81a7b8cfaa4ee669cf8.png](https://img.925i.cn/file/db81a7b8cfaa4ee669cf8.png)

向下滚动，找到 `服务器域名` 点击右侧修改按钮，将您的域名（也就是在 [博客信息配置](/payload/config.html#二、博客信息配置) 中的 `apiUrl` 字段的值分别写入 `request合法域名` `uploadFile合法域名` 和 `downloadFile合法域名` 列表中，点击保存即可，如图所示：

![https://img.925i.cn/file/de06474bb735a49b59205.png](https://img.925i.cn/file/de06474bb735a49b59205.png)

### 第 2 步、编译并发布

- 1. 在 `HBuilder X` 开发工具右键 `uni-halo` 项目名称，选择 `发行 -> 小程序-微信（仅适用于uniapp）`，如图所示：

![https://img.925i.cn/file/ecd65ee279f052f854b7b.png](https://img.925i.cn/file/ecd65ee279f052f854b7b.png)

- 2. 在弹出的发行信息框中，确认您的小程序信息，如果没有其他设置，直接点击发行即可。

说明：若不想再次打开 `微信小程序开发工具` 去预览和上传，可以直接在此弹窗中勾选 `自动上传到微信平台（不会打开微信开发工具）`选项

![https://img.925i.cn/file/a4405f8c6c71de8a90fdd.png](https://img.925i.cn/file/a4405f8c6c71de8a90fdd.png)

- 3. 若未勾选 `自动上传到微信平台（不会打开微信开发工具）`，则在编译完成后会自动打开 `微信小程序开发工具` ，在打开的微信开发工具中，点击工具栏 `上传` 弹出信息填写框并填写基础信息，信息填写完成，点击绿色的 `上传`按钮等待上传完成即可，如图所示：

![https://img.925i.cn/file/a6823d73e515927de41ac.png](https://img.925i.cn/file/a6823d73e515927de41ac.png)

### 第 3 步、提交审核

- 1. 代码上传完成后，进入微信小程序的管理后台，找到菜单并点击 `版本管理` ，找到 `开发版本` 右侧的提交审核按钮

![https://img.925i.cn/file/c9ac7848a554d1a9a3579.png](https://img.925i.cn/file/c9ac7848a554d1a9a3579.png)

- 2. 确认提交审核并填写相关的审核信息，以下不再进行赘述和提供填写图例，只需要按照下一步进行操作即可，如图：

![https://img.925i.cn/file/827620f5cb9700a6337f6.png](https://img.925i.cn/file/827620f5cb9700a6337f6.png)

::: tip 踩坑提示

为了能够更容易通过审核，作者建议：

- 1. 在填写审核信息的时候，若您的小程序资质是 `个人资质` 尽可能将您的描述信息写为个人类型的内容，如参考作者的小程序描述：**这里是我的个人日记小程序，用于记录个人的工作和生活。**

- 2. 上传截图的时候，请不要截图有关于社交部分的内容，比如：留言板、评论区等

- 3. 文章内容可以先将带有分享性质的文章先进行下架，保留一些个人的日志文章等等

:::

## 完结提示

以上就是发布为微信小程序的全部内容，如果您有什么疑问在此文档上无法解决的，可以通过添加 [官方 QQ 群](/desgin/introduction.html#交流反馈) 进行交流。
