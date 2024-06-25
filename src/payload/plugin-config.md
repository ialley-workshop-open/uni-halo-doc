# 插件配置指南

当前为插件配置指南。


::: warning 重要说明

- 分支代码支持：`uni-halo v2.0-beta`
- 插件代码仓库：[`UniHalo配置插件`](https://github.com/ialley-workshop-open/plugin-uni-halo)
- 目前插件未上架市场，需要自行下载安装。

:::


## 1、Token 配置

### 1.1、文件说明
在项目根目录下找到 `token.config.template.js` 修改为 `token.config.js` 文件，文件内容如下：

```javascript
/** 配置后台管理员token */
const HaloTokenConfig = Object.freeze({

		// 基础请求域名：你的Halo博客基础域名
		BASE_API: 'https://demo.halo.run',

		// 通用系统token
		systemToken: ``,
		// 匿名用户token（暂时用不到）
		anonymousToken: ``

});

export default HaloTokenConfig;
```

### 1.2、权限说明

systemToken 需要的权限如下，同时以下依赖的插件均可以在 Halo 的应用市场下载安装：

- 插件查看
- 评论查看
- 文章查看
- 链接查看：依赖 `链接管理` 插件
- 图库查看：依赖 `图库管理` 插件
- 瞬间查看：依赖 `瞬间` 插件

### 1.3、Token 获取

- 登录你的Halo应用后台，点击左下角小人图标进入个人中心
- 选择 `我的` -> `个人令牌` -> `新建`，填写基本信息和选择以上的权限后，提交即可。
- 生成后，复制 `令牌`，粘贴到 `token.config.js` 文件中 `systemToken` 字段中。


# 2、插件安装

### 2.1、下载插件包

访问 `UniHalo 配置` 插件仓库（https://github.com/ialley-workshop-open/plugin-uni-halo），下载 `plugin-uni-halo`，如图所示：

![下载](https://img.925i.cn/file/a90b8220af9d6cb89fb87.png)

![下载](https://img.925i.cn/file/3757ce6da7d3352b728e1.png)

### 2.2、安装插件

登录你的 Halo 博客后台，选择插件安装（本地上传-后续应该会上架应用市场），找到上一步下载的插件 `plugin-uni-halo`，选择本地文件，点击安装并且启用即可，如图：

![安装](https://img.925i.cn/file/94f88b2e2f3b8e7d93c20.png)

![安装](https://img.925i.cn/file/eec16698aa2c5c27b035a.png)

![安装](https://img.925i.cn/file/ca60b8856123a45ef302d.png)

# 3、插件配置

插件支持以下配置内容，每一项配置与原来的 `halo.config.js`、`love.config.js` 配置文件内容基本一致，字段说明可参考。

### 3.1、基本配置

文章详情版权、评论开关、页面显示、免责声明

![基本配置](https://img.925i.cn/file/325f3db0bee476c4e9a33.png)

### 3.2、启动配置

配置启动页面的信息

![启动配置](https://img.925i.cn/file/e9f8e2f08c0a04d5086bf.png)

### 3.3、我的配置

配置博主信息、社交信息

![我的配置](https://img.925i.cn/file/a44a1f6d560eef488bf27.png)


### 3.4、图片配置

配置默认的图片资源地址，包括文章封面、头像、加载动画图片、错误图片等等。
<br />

_**注意：插件内默认的图片地址请访问后保存到本地上传到你自己的博客中使用，因为不确定什么时候会失效。**_

![图片配置](https://img.925i.cn/file/2e3b7028e106747e0674c.png)

### 3.5、恋爱配置

恋人信息、恋爱清单、恋爱相册、我们的故事，具体配置请查看插件配置项，如图：

![恋爱配置](https://img.925i.cn/file/0cce11a952986f9aaa3eb.png)

### 3.6、插件配置

一些特殊支持的插件配置，如图：

![插件配置](https://img.925i.cn/file/e7b61b9e078251682ccf4.png)

### 3.7、分享配置

页面分享配置，用于用户在小程序内点击右上角分享的信息，一般只需要修改 标题、描述、封面即可，如图：

![分享配置](https://img.925i.cn/file/d98ada98e175296c0c7eb.png)


### 3.8、广告配置

广告相关配置，目前广告配置并不完善，仅对特殊插件的支持（如：[3.6、插件配置](#36插件配置) 中的工具箱支持），如图：

![广告配置](https://img.925i.cn/file/47f07ac006807f83a73e0.png)
