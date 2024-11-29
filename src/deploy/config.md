# 配置指南

当前为应用和插件配置指南。

## 1. Token 配置

### 1.1 文件说明
在项目根目录下找到 `token.config.template.js` 修改为 `token.config.js` 文件，文件内容如下：

```javascript
/** 配置后台管理员token */
const HaloTokenConfig = Object.freeze({

		// 基础请求域名：你的Halo博客基础域名
		BASE_API: 'https://blog.xiaoxiaomo.cn',

		// 通用系统token
		systemToken: ``,
		// 匿名用户token（暂时用不到）
		anonymousToken: ``

});

export default HaloTokenConfig;
```

### 1.2 权限说明

#### 1.2.1 依赖插件

依赖的插件均可以在 Halo 的应用市场下载安装：

- 评论组件：[https://www.halo.run/store/apps/app-YXyaD](https://www.halo.run/store/apps/app-YXyaD)
- 搜索组件：[https://www.halo.run/store/apps/app-DlacW](https://www.halo.run/store/apps/app-DlacW)
- 链接查看：[https://www.halo.run/store/apps/app-hfbQg](https://www.halo.run/store/apps/app-hfbQg)
- 图库管理：[https://www.halo.run/store/apps/app-BmQJW](https://www.halo.run/store/apps/app-BmQJW)
- 瞬间插件：[https://www.halo.run/store/apps/app-SnwWD](https://www.halo.run/store/apps/app-SnwWD)

#### 1.2.2 权限列表

systemToken 需要的权限如下：

- 插件查看
- 文章查看
- 评论查看
- 链接查看
- 图库查看
- 瞬间查看

### 1.3 Token使用

#### 1.3.1 生成Token
登录后台，点击左下角的用户头像，进入个人中心 选择 `我的-个人令牌`，新建令牌，如图：

![https://img.925i.cn/file/21b833b03abd34b0b341d.png](https://img.925i.cn/file/21b833b03abd34b0b341d.png)
![https://img.925i.cn/file/03dfc31fc160f3ef2d804.png](https://img.925i.cn/file/03dfc31fc160f3ef2d804.png)

#### 1.3.2 配置Token

复制生成的Token，粘贴到`uni-halo` 应用中的 `config/token.cnfig.js --- systemToken`中，如下图

```javascript

/** 配置后台管理员token */
const HaloTokenConfig = Object.freeze({
	BASE_API: ' ',

	/** 系统部分接口所需的token */
	systemToken: 'pat_eyJraWQiOiJremFDU29raThfbC0yWVRpN3RndUN.....',

	anonymousToken: ``
});

export default HaloTokenConfig;
```

![https://img.925i.cn/file/a171bded818ebe06d848f.png](https://img.925i.cn/file/a171bded818ebe06d848f.png)
![https://img.925i.cn/file/20d35b84f16cb9199feb9.png](https://img.925i.cn/file/20d35b84f16cb9199feb9.png)

#### 1.3.3 配置API

在`uni-halo` 应用中的 `config/token.cnfig.js --- BASE_API`填写您的博客域名地址，如下：

![https://img.925i.cn/file/b1a135ab99fafdfb5e48d.png](https://img.925i.cn/file/b1a135ab99fafdfb5e48d.png)

```javascript

/** 配置后台管理员token */
const HaloTokenConfig = Object.freeze({
	/** 基础请求域名：你的Halo博客基础域名：如 https://demo.halo.run */
	BASE_API: 'https://demo.halo.run',

	systemToken: '',
	anonymousToken: ``
});

export default HaloTokenConfig;
```

## 2. 插件配置

### 2.1 插件信息

![预览](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-1.png)

### 2.2 基本配置

![基本配置](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-2.png)

### 2.3 应用配置

![应用配置](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-3.png)

### 2.4 页面配置

![页面配置](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-4.png)

### 2.5 我的配置

![我的配置](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-5.png)

### 2.6 图片配置

![图片配置](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-6.png)

### 2.7 恋爱配置

这里是恋爱页面相关的配置，如果已经开通恋爱功能，可以在这里配置恋爱页面相关的内容。

#### 2.7.1 预览

![恋爱配置](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-7.png)

#### 2.7.2 获取相册标识

获取恋爱相册的步骤如下：

1. 登录后台，按下键盘上的 `F12` 键，打开控制台
2. 在控制台找到 `网络` 选项
3. 点击左侧菜单的 `图库`
4. 找到 `网络` 请求中的 `photogroups` 请求，点击它查看预览
5. 找到 `预览` 结果中你需要的分组的 `metadata.name` 的值，复制它并粘贴到组件的恋爱日记分组标识中。

相关截图如下:

![获取恋爱相册](https://img.925i.cn/file/8727f06e0091cdd590583.png)

![配置恋爱相册标识](https://img.925i.cn/file/182602e202e0d450a726c.png)

### 2.8 插件配置

![插件配置](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-8.png)

