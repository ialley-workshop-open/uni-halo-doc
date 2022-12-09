# 配置

配置项目的启动运行信息，**值得注意的是：该配置非常的重要**

## 应用信息配置

找到项目根目录 将`config/halo.config.template.js`修改为 `config/halo.config.js` 并设置相关信息

```javascript
export default {
  showCopyright: true, // 显示开源版权信息
  showAbout: true, // 显示关于项目入口
  uni_halo_logo: 'https://b.925i.cn/uni_halo/uni_halo_logo.png', // uni-halo的logo

  // Api基础域名 [必填] ：你的Halo博客基础域名
  apiUrl: '',

	 // Api认证key [必填]： Halo中-系统-博客设置-切换到高级选项-API设置-Access key
  apiAuthorization: '',

  // 博客标题 [建议必填]：在某些页面没有设置具体的页面名称时候，使用该值显示
  title: '',

  // 小程序的太阳码/二维码的图片地址 [建议必填]：主要用于文章详情页面的生成海报的功能
  miniCodeImageUrl: '',

  // 启动页面的配置（页面地址`/pagesA/start/start`）
  start: {
    use: true, // 是否使用首次启动页：用户第一次使用你的应用会显示否则不显示
    title: 'uni-halo', // 启动页面中的文字标题
    bg: '', // 留空则使用默认 开屏首页背景，可以是颜色值或者图片图片地址
    logo: 'https://b.925i.cn/uni_halo/uni_halo_logo.png', // logo
    desc1: '全新UI，准备出发', // 描述信息1
    desc2: '新触动 新感受 新体验', // 描述信息2
    btnText: '全新触发' // 按钮文字
  },

  author: { // 博主信息
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

  // 默认封面 [建议必填]：文章列表的默认封面图的地址，可以是固定图片也可以是随机图api接口
  defaultThumbnailUrl: '',

  // 默认图片 [建议必填]：图片加载失败时候的默认图片，可以是固定图片也可以是随机图api接口
  defaultImageUrl: '',

  // 默认头像 [建议必填]：主要用于评论留言的头像地址，可以是固定图片也可以是随机图api接口
  defaultAvatarUrl: '',

  // 图片加载中的地址 [建议必填]
  loadingGifUrl: '',

	 // 图片加载失败的地址 [非必填]：文章详情页面，文章图片加载失败时候的图片
  loadingErrUrl: '',

  // 加载图片为空地址 [非必填]
  loadingEmptyUrl: '',

  // 底部导航下的 关于 页面波浪图片 [非必填]
  waveImageUrl: '',

  // 轮播图配置
  banner: {
    // 轮播图数据源，可选源：
    // list   =下方配置
    // article=热门文章
    type: 'article',
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
