# 部署须知

部署前的准备工作，请您必须阅读和理解以下内容，这里的说明非常重要，请您务必阅读


::: warning 重要说明

- `uni-halo` 当前已经支持通过  配套插件 [`UniHalo配置插件`](https://github.com/ialley-workshop-open/plugin-uni-halo) 进行配置，[点击此处](/payload/plugin-config.html) 跳转到插件配置指南。
- 注意：当前支持通过插件配置的分支为 `v2.0-beta` 分支，其他分支均不支持。
- 使用插件配置后，以下的配置说明仅作为参考，具体配置请参考插件配置指南。

:::

---

::: warning 版本说明

`uni-halo` 当前支持的 Halo 版本为 2.x，仓库分支 请选择 `v2.0-beta` 分支。

:::

## 前置要求

- [Halo](https://docs.halo.run/1.6/) 博客程序（PC 端的博客系统），且必须要 Halo 2.x 版本：主要用于提供 uni-halo 的数据接口；

- DCloud 账号开发者账号：用于 `uni-halo` 的源码编译；

- 微信小程序账号：用于小程序上线发布；

- 一个已经通过备案的域名 + ssl 证书：由于小程序上线使用的 api 接口必须是 已经备案和 https 的，所以该条件也是必须的。

## 依赖插件

依赖的插件（以下均为免费插件）可以在 Halo 官方应用市场安装并启用，依赖的插件如下：

- [评论插件](https://www.halo.run/store/apps/app-YXyaD)
- [搜索插件](https://www.halo.run/store/apps/app-DlacW)
- [链接管理插件](https://www.halo.run/store/apps/app-hfbQg)
- [图库管理插件](https://www.halo.run/store/apps/app-BmQJW)
- [瞬间插件](https://www.halo.run/store/apps/app-SnwWD)


## 关于评论

由于小程序暂无登录功能，所以评论功能需要在后台设置启用评论功能，并且取消勾选 `仅允许注册用户评论` 选项，如图：
![https://img.925i.cn/file/dfea2699452768438903a.png](https://img.925i.cn/file/dfea2699452768438903a.png)

::: warning 注意阅读

本程序强制依赖于 `Halo` 内容管理系统，如果您的 PC 端博客没有使用该程序搭建，那么 uni-halo 不适合您使用。

:::
