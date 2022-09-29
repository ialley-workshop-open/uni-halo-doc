# 配置

配置项目的启动运行信息

## 项目配置

找到项目根目录 config 目录，将`halo.config.template.js`修改为 `halo.config.js` 并设置相关信息

```javascript
export default {
  title: '博客标题', // 博客标题
  indexImageUrl: '', // 开屏首页图片

  author: { // 博主信息 ()
    use: true, // 是否启用这里配置的信息，若设置为false 则启用PC端博客设置的信息
    name: '博主姓名', //
    avatar: '博主头像',
    blog: '博客地址',
    email: '博主邮箱'
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

  banner: { // 轮播图配置
    type: 'article', //  轮播图数据源 list=下方配置 article=热门文章封面 banner=后台对应的轮播图(未开发)
    list: ["图片URL地址1", "图片URL地址2", "图片URL地址.."],
  },

  // 微信分享信息
  wxShareConfig: {
    title: '小程序分享标题', // 分享标题[非必填]
    desc: '小程序分享描述', // 描述[非必填]
    imageUrl: '小程序分享时候图片地址', // 分享图片[非必填]
    path: '/pages/start/start', // 分享路径[非必填] - 基本不需要修改
    copyLink: '/pages/start/start', // 复制链接[非必填]  - 基本不需要修改
    query: {}, // 分享参数[非必填]  - 基本不需要填写
  },
}
```

### 请求配置

项目采用了[luch-request](https://www.quanzhan.co/luch-request/)进行数据请求

#### 全局配置

在项目根目录下`common/http/index.js`中可进行全局请求配置

#### 拦截配置

在项目根目录下`common/http/interceptors.js`中可进行全局请求进行拦截，包括请求前的拦截和响应拦截
