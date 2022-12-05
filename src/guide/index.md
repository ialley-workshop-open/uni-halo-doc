# 开始

本文会帮助你从头启动项目

## 环境准备

- [halo1.x](https://halo.run/) 版本的程序 提供的 API 服务

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

最新版本的代码以 gitee 为准。

:::

## 运行和启动项目

### 安装项目依赖和运行

- 1、通过 HBuilderX 导入项目；
- 2、命令行执行 npm i 安装依赖；
- 3、配置运行信息，找到项目根目录 config 目录，将`halo.config.template.js`修改为 `halo.config.js` 并设置相关信息 [halo.config.js 文件说明](./settings.md)；
- 4、点击 HBuilderX 工具 右上角预览、或者点击工具栏 运行-内置浏览器运行；
- 5、项目调试：参考 [uni-app 运行和调试](https://uniapp.dcloud.net.cn/tutorial/run-and-debug.html)；
