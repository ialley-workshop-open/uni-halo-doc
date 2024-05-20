# 准备工作

这里将会介绍，部署前需要准备的工作

## 一、环境准备

由于 `uni-halo` 使用了第三方的路由管理作为页面鉴权，所以依赖于 `npm` 管理安装此模块，也正式因为如此，您需要准备 `nodejs` 进行安装，如果您的电脑已经安装过了 `nodejs` ，那么您可以直接往下继续看，若没有，这里推荐您安装并使用一个多 `nodejs` 版本管理工具 `nvm`（当然也有其他的版本管理工具，这里只是作者推荐在用的一个），方便以后用于管理多个 `nodejs` 可以自由切换，或者您也可以只安装 `nodejs` 。

关于安装 `nodejs` 和 `nvm` 的安装，这里就不再赘述了，相关的安装教程可以在百度可以搜索到。

- [nodejs 官网](https://nodejs.org/zh-cn)
- [nvm 官网](https://github.com/coreybutler/nvm-windows/releases)

## 二、账号准备

##### 1. DCloud 账号

申请地址：[https://dev.dcloud.net.cn/](https://dev.dcloud.net.cn/)

该账号用于登录 [`HBuilder X`](https://www.dcloud.io/hbuilderx.html) 开发工具和编译 [`uni-halo`](https://gitee.com/ialley-workshop-open/uni-halo) 项目

::: tip 重要提示

注意：账号需要进行开发者实名认证，注册后登录认证即可

:::

<br />

##### 2. 微信小程序账号

申请地址：[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)

该账号用于发布和上线微信小程序，具体申请和认证流程 [点此查看](#)

## 三、工具准备

##### 1. HBuilder X

下载地址：[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)

用于将 `uni-halo` 编译或上传到 `微信小程序开发工具`

<br />

##### 2. 微信小程序开发工具

下载地址：[https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)

用于发布 `uni-halo` 小程序到微信开放平台上线发布

## 四、接口准备

`uni-halo` 项目依赖于 `Halo 2.x` 版本程序的项目 API 接口，如果您没有使用 `Halo 2.x` 或者使用的是其他的博客程序，您无需再继续往下看，或者您也可以尝试使用该程序部署一个自己的博客。

`Halo` 是强大易用的开源建站工具（cms），如果您没有使用，同时也想使用该小程序的话，欢迎您根据 `Halo` 官方教程安装体验。

Halo 官网地址：[https://halo.run/](https://halo.run/)

Halo 2.x 部署：[https://docs.halo.run/](https://docs.halo.run/)

::: warning 重要的事情说三遍

uni-halo 只适用于 Halo 2.x 部署的博客程序
<br/>
uni-halo 只适用于 Halo 2.x 部署的博客程序
<br/>
uni-halo 只适用于 Halo 2.x 部署的博客程序
:::

## 五、源码准备

::: warning 版本说明

`uni-halo` 当前支持的 Halo 版本为 2.x，仓库分支 请选择 `beta-v2.0` 分支。

:::

下载 `uni-halo` 源码，推荐使用 Gitee 下载，因为 Gitee 始终为最新版本的代码，而 Github 会定时同步。

Gitee 下载：[https://gitee.com/ialley-workshop-open/uni-halo](https://gitee.com/ialley-workshop-open/uni-halo)

```bash
git clone https://gitee.com/ialley-workshop-open/uni-halo.git
```

Github 下载：[https://github.com/ialley-workshop-open/uni-halo/tree/beta-v2.0](https://github.com/ialley-workshop-open/uni-halo/tree/beta-v2.0)

```bash
git clone https://github.com/ialley-workshop-open/uni-halo.git
```
