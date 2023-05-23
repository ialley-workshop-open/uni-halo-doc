# 快速上手

本文会帮助你从头启动项目，适用于二次开发

## 作者建议

::: warning 温馨提示

uni-halo 后台文章管理功能模块，暂时不推荐使用，因为文章编辑功能和 PC 端的功能没办法同步，在 uni-halo 中对文章进行编辑后，可能会丢失 PC 端编辑的样式！
<br/><br/>
重要的事情说三遍：请您务必详细阅读并且知晓该提示内容！！！
<br/>
重要的事情说三遍：请您务必详细阅读并且知晓该提示内容！！！
<br/>
重要的事情说三遍：请您务必详细阅读并且知晓该提示内容！！！
:::

## 环境准备

- [Halo 1.x](https://halo.run/) 版本的程序 提供的 API 服务

## 工具准备

本项目推荐使用以下工具进行开发调试，当然也可以使用其他 IDEA

- [HBuilder X](https://www.dcloud.io/hbuilderx.html) 进行开发。
- [微信小程序开发工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)进行部署（非必要）。

## 源代码获取

### 从 Gitee 获取

```bash
# 克隆代码
git clone https://gitee.com/ialley-workshop-open/uni-halo.git
```

### 从 Github 获取

```bash
# 克隆代码
git clone https://github.com/ialley-workshop-open/uni-halo
```

::: warning 注意

最新版本的代码以 Gitee 仓库为准。

:::

## 运行和启动项目

### 安装项目依赖和运行

- 1、通过 HBuilderX 导入项目；
- 2、命令行执行 npm i 安装依赖；
- 3、配置运行信息，找到项目根目录 config 目录，将`halo.config.template.js`修改为 `halo.config.js` 并设置相关信息 [halo.config.js 文件说明](./settings.md)；
- 4、点击 HBuilderX 工具 右上角预览、或者点击工具栏 运行-内置浏览器运行；
- 5、项目调试：参考 [uni-app 运行和调试](https://uniapp.dcloud.net.cn/tutorial/run-and-debug.html)；
