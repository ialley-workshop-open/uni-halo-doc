# 项目运行

在这里将会介绍项目如何在开发工具中运行起来

## 第一步：导入源码

打开开发工具 `HBuilder X` 工具，点击左上角 `文件 - 导入 - 从本地导入`（当然你也可以选择你熟悉的其他方式，比如直接 git 导入） 找到 [`准备工作`](/payload/preparation.html#五、源码准备)中下载好的 `uni-halo` 源码。

## 第二步：安装依赖

在 `HBuilder X` 工具左侧项目中选择并右键 `uni-halo` 文件夹，选择 `使用命令行窗口打开所在目录`，如下图所示：

![]() // 待补图...

接着，在命令行窗口输入：`npm install` 安装项目所需要的依赖，如下图所示：

```bash
npm install
```

![]() // 待补图...

## 第三步：修改配置

以下为需要重命名的文件，文件路径在：`config/` 下：

[**1、博客信息配置**](/payload/config.html#二、博客信息配置)

`halo.config.template.js` 修改为 `halo.config.js`

[**2、广告配置**](/payload/config.html#三、广告配置)

`ad.config.template.js` 修改为 `ad.config.js`

[**3、恋爱日记配置**](/payload/config.html#四、恋爱日记配置)

`love.config.template.js` 修改为 `love.config.js`

将文件重命名好后，还需要将每个文件中的内容修改为您所需要的信息 [点此查看配置](/payload/config.html)
