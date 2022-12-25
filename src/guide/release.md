# 发布部署

该内容会引导您发布和部署本项目。

## 打包前的准备（重要）

- 1、准备好 DCloud 的账号，在`HBuilderX`左下角点击登录注册即可，该账号用于获取`3`中的 AppID 做准备

- 2、若是编译为小程序，请提前在 [微信公众平台](https://mp.weixin.qq.com/) 申请好您的小程序账号

- 3、修改项目根目录下的 `manifest.json` 中的相关信息，如基础配置中的 `uni-app 应用标识（AppID）`、`应用名称`、`应用描述`以及`APP图标配置`等

- 4、修改相关的配置文件，根目录下的`config/ad.config.js`和`config/halo.config.js`，
  <br/>ad.config.js 是广告配置，当前只添加了信息流广告组件，基本上用不到广告配置，相关的广告申请可以在 [uni-app 广告](https://uniapp.dcloud.net.cn/component/ad.html)了解
  <br/>halo.config.js 是基础的配置，[具体查看](./settings.md)

- 5、修改一些业务图片默认地址，<a href="https://wwqj.lanzoum.com/i2USg0jcy3qf"  target="_blank" title="点击下载素材">点击下载素材</a> 上传到您的服务器或者 oss 中，需要能够在公网访问即可，推荐放在 [`halo 的静态存储中`](../problem/questions.md#_3、如何进入halo后台的静态存储上传文件？)，相关的配置在 `config/halo.config.js` 文件里，在素材中有对应名称的素材，具体需要修改的字段如下：

```javascript
export default {
  uni_halo_logo: '', // uni-halo的logo地址（uni_halo_logo.png）

  miniCodeImageUrl: '', // 小程序太阳码/二维码图片地址（uni_halo_wx_qrcode.jpg）
  aboutProfileImageUrl: '', // 关于页面中的资料卡背景图 （uni_halo_profile_bg.jpg）

  loadingGifUrl:'',    // 图片加载中的地址 （uni_halo_img_lazyload.gif）
  loadingErrUrl: '',   // 图片加载失败的地址（暂未提供素材）
  loadingEmptyUrl: '', // 加载图片为空地址（暂未提供素材）

  waveImageUrl: '',  // 关于页面波浪图片地址（uni_halo_about_wave.gif）
}
```

### 1、编译为微信小程序

说明：需要申请一个微信小程序的账号，并填写 在`manifest.json`中微信小程序配置`微信小程序AppID` 中，也可以按以下操作后，会弹出填写页面，输入即可

- 点击工具栏 发行 -> 小程序-微信 ->输入相关的信息（若已配置好，默认即可）；
- 若发布时候勾选了`自动上传到微信平台`等待编译成功后即可，若未勾选，则会自动打开微信开发工具需要手动上传部署；

::: tip 重要内容

发布到微信小程序中时，我们需要在 [微信小程序-微信公众平台](https://mp.weixin.qq.com/) 的管理后台配置相关的业务域名，该域名对应在`config/halo.config.js`中涉及到的全部域名地址，否则小程序上线后无法调用，并且在微信小程序中使用到的域名必须是`https`的域名，任何接口地址都一样，包括默认的头像、默认图片等

:::

### 2、编译为安卓 APP

更新：（**若需要在线更新服务，请先看这条**）更新是指，当前的 APP 发布后，用户可以在线升级，具体操作方式请查看[版本更新说明](../tutorial/update.md)
<br/>说明：此处仅推荐说明一种打包方式， 官方所有打包方式请参考[UniApp 官网](https://uniapp.dcloud.net.cn/tutorial/app-base.html) 。

- 点击工具栏 发行 -> 原生 App-云打包 -> 输入相关的信息后提交打包
- 打包完成后，在 HBuilder X 的控制台会有一个安装包打包成功后的输出目录

::: tip 说明

- 如果想将 APP 上架到各个应用商店提供下载，请自行百度实现！
- 打包为 app 时候，可以按需要选择 HBuilder X 的`测试证书`或者`自有证书`，[自有证书生成]()请参考 uni-app 官方说明。

:::
