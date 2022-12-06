# 配置

配置项目的启动运行信息

## 应用信息配置

找到项目根目录 将`config/halo.config.template.js`修改为 `config/halo.config.js` 并设置相关信息

```javascript
export default {
  showCopyright: true, // 显示开源版权信息
  showAbout: true, // 显示关于项目入口
  uni_halo_logo: 'https://b.925i.cn/uni_halo/uni_halo_logo.png', // uni-halo的logo

  title: '', // 博客标题
  indexImageUrl: '', // 开屏首页图片

  author: { // 博主信息 ()
    use: true, // 是否启用这里配置的信息，若设置为false 则启用PC端博客设置的信息
    name: '', // 博主姓名
    avatar: '', // 博主头像
    blog: '', // 博客地址
    email: '' // 博主邮箱
  },

  // 社交信息(将会在`/pagesA/contact/contact`页面中展示)
  // 具体的某个参数值留空则不展示
  social: {
    qq: "", 		 	// qq号
    wechat: "",   // 微信号
    weibo: "",    // 微博地址
    email: "",		// 邮箱地址
    blog: "",			// 博客地址
    juejin: "",		// 掘金地址
    bilibili: "", // b站地址
    gitee: "",		// gitee地址
    github: "",		// github地址
    csdn: ""			// CSDN地址
  },

  apiUrl: '', // Api基础域名（您的博客基础域名或者是Halo后台管理系统api地址）
  apiAuthorization: '', // Halo中-系统-博客设置-切换到高级选项-API设置-Access key

  defaultThumbnailUrl: '默认封面图地址', // 默认封面图
  defaultImageUrl: '默认图片地址', // 默认图片
  defaultAvatarUrl: '默认头像地址', // 默认头像

  loadingGifUrl: '', // 图片加载中的地址
  loadingErrUrl: '', // 图片加载失败的地址
  loadingEmptyUrl: '', // 加载图片为空地址

  waveImageUrl: '', // 关于页面波浪图片

  banner: { // 轮播图配置
    type: 'article', // 轮播图数据源 list=下方配置 article=热门文章封面
    list: [],
  },

  // 微信分享信息
  wxShareConfig: {
    title: '', // 小程序分享标题[非必填]
    desc: '', // 小程序分享描述[非必填]
    imageUrl: '', // 小程序分享时候图片地址[非必填]
    path: '/pages/start/start', // 分享路径[非必填] - 基本不需要修改
    copyLink: '/pages/start/start', // 复制链接[非必填]  - 基本不需要修改
    query: {}, // 分享参数[非必填]  - 基本不需要填写
  },
}
```

::: warning 注意
**还需要修改`vue.config.js`和`manifest.json`文件下的域名，和`config/halo.config.js`中的`apiUrl`对应**
:::

## 广告信息配置

找到项目根目录 将`config/ad.config.template.js`修改为 `config/ad.config.js` ，如果没有广告或者不熟悉，请把`true`都设置为 `false` 即可，目前广告暂未完善

```javascript
/**
 * 广告配置
 */
export default {
  adpid: '', // uni-AD App广告位id，在uni-AD官网申请广告位
  unitId: '', // 广告单元id，可在小程序管理后台的流量主模块新建 (非个人资质，小程序后台广告主开通申请)
  frequency: 8, // 列表中，广告出现的频率（8=每8条数据出现一次广告）
  // 首页广告
  home: {
    use: true,
  },
  // 文章列表广告
  articles: {
    use: true,
  },
  // 文章详情广告
  articleDetail: {
    use: true, // 是否启用
  }
}
```

### 请求配置

项目采用了[luch-request](https://www.quanzhan.co/luch-request/)进行数据请求

#### 全局配置

在项目根目录下`common/http/index.js`中可进行全局请求配置

#### 拦截配置

在项目根目录下`common/http/interceptors.js`中可进行全局请求进行拦截，包括请求前的拦截和响应拦截
