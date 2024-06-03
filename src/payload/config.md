# 修改配置

配置项目的启动运行信息，该配置非常的重要

## 一、Token配置

- [评论插件](https://www.halo.run/store/apps/app-YXyaD)
- [搜索插件](https://www.halo.run/store/apps/app-DlacW)
- [链接管理插件](https://www.halo.run/store/apps/app-hfbQg)
- [图库管理插件](https://www.halo.run/store/apps/app-BmQJW)
- [瞬间插件](https://www.halo.run/store/apps/app-SnwWD)

主要是配置所需要依赖的插件权限，以及因为 `Halo 2.x` 部分接口需要依赖Token才能进行访问， 所以需要您在后台配置token，具体操作如下：
<br/>

#### 1、登录后台，点击左下角的用户头像，进入个人中心 选择 `我的-个人令牌`，新建令牌，如图

![https://img.925i.cn/file/533a22b63fad17ff401f2.png](https://img.925i.cn/file/533a22b63fad17ff401f2.png)
![https://img.925i.cn/file/03dfc31fc160f3ef2d804.png](https://img.925i.cn/file/03dfc31fc160f3ef2d804.png)

#### 2、填写相关信息，选择所需的权限，权限如下：

- 瞬间查看
- 链接查看
- 图库查看
- 评论查看

#### 3、复制生成的Token，粘贴到`uni-halo` 应用中的 `config/token.cnfig.js --- systemToken`中，如下图

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

#### 4、在`uni-halo` 应用中的 `config/token.cnfig.js --- BASE_API`填写您的博客域名地址，如下：

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

<br/>

## 二、博客信息配置

按字段描述配置对应的信息即可，若有不明白的可以 [添加 QQ 群](/desgin/introduction.html#交流反馈) 进行咨询

```javascript
export default {
	showCopyright: true, // 显示开源版权信息
	showAbout: true, 		 // 显示关于项目入口
	uni_halo_logo: 'https://b.925i.cn/uni_halo/uni_halo_logo.png', // uni-halo的logo

	// 博客标题 [建议必填]：在某些页面没有设置具体的页面名称时候，使用该值显示
	title: '',
	// 小程序的太阳码/二维码的图片地址 [建议必填]：主要用于文章详情页面的生成海报的功能
	miniCodeImageUrl: '',
	// 关于页面中的资料卡背景图 [建议必填]
	aboutProfileImageUrl: '',

	// 启动页面的配置（页面地址`/pagesA/start/start`）
	start: {
		use: true, // 是否使用首次启动页：用户第一次使用你的应用会显示否则不显示
		title: 'uni-halo', // 启动页面中的文字标题
		bg: '', // 留空则使用默认 开屏首页背景，可以是颜色值或者图片图片地址
		logo: 'https://b.925i.cn/uni_halo/uni_halo_logo.png', // logo
		desc1: '全新UI，准备出发', // 描述信息1
		desc2: '新触动 新感受 新体验', // 描述信息2
		btnText: '全新出发' // 按钮文字
	},

	author: { // 博主信息
		name: '', // 博主姓名
		avatar: '', // 博主头像
		blog: '', // 博客地址
		email: '' // 博主邮箱
	},

	// 版权信息（用于文章详情）
	copyright: {
		use: true, // 是否使用版权描述
		author: '', // 版权归属说明
		description: '', // 版权描述
		violation: '', // 侵权处理说明
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

	// 轮播图配置（默认只支持文章来源（可不进行修改））
	banner: {
		type: 'article',
		list: [],
	},

	// 微信分享信息
	wxShareConfig: {
		title: '', // 小程序分享标题[非必填]
		desc: '', // 小程序分享描述[非必填]
		imageUrl: '', // 小程序分享时候图片地址[非必填]
		path: '/pages/index/index', // 分享路径[非必填] - 基本不需要修改
		copyLink: '/pages/index/index', // 复制链接[非必填]  - 基本不需要修改
		query: {}, // 分享参数[非必填]  - 基本不需要填写
	},
}
```

## 三、广告配置

```javascript
export default {
  // 文章详情广告，文章详情页面的自定义广告区域
	articleDetail: {
		use: true,
		cover: 'https://b.925i.cn/uni_halo/uni_halo_ad_cover.png',
		title: 'uni-halo 正式开源啦，欢迎来使用和体验！',
		content: '基于 uni-app + halo1.x API 实现一款现代化的开源博客 / CMS 系统API开发的多端应用。功能包括：前台博客系统 和 后台管理系统，同时满足浏览和管理两端合一的需求，真正实现一个应用实现博客浏览和后台管理。',
		url: 'https://uni-halo.925i.cn'
	}
};

```
如图：
![https://img.925i.cn/file/230170e81ab874a0a9e62.png](https://img.925i.cn/file/230170e81ab874a0a9e62.png)

<br/>

## 四、恋爱日记配置

##### 1. 删除功能

::: tip 提示
如果不需要恋爱日记功能，则不需要修改这些配置，在 `uni-halo` 源码中找到页面 `pages/tabbar/about/about.vue` 找到大概`234行` 设置为 false 即可。
:::

```javascript
	this.navList = [
	// 省略其他配置
		{
			key: 'love',
			title: '恋爱日记',
			leftIcon: 'halocoloricon-attent',
			leftIconColor: 'red',
			rightText: '甜蜜恋人的专属',
			path: '/pagesA/love/love',
			isAdmin: false,
			type: 'page',
			show: true // 设置为 false
		}
	// 省略其他配置
];
```

如图所示：
![https://img.925i.cn/file/5b9680c3955c7b7d8f344.png](https://img.925i.cn/file/5b9680c3955c7b7d8f344.png)

##### 2. 开始配置

如果不需要恋爱日记，可以在`config/halo.config.js`中的`quickNav`中注释掉，具体配置，自行查看文件内容，对应的图片可以在下方的默认配置中下载到本地上传到你的服务器后替换

```javascript
export default {
	waveImageUrl: 'https://b.925i.cn/uni_halo/uni_halo_about_wave.gif', // 波浪图片地址
	bgImageUrl: 'https://b.925i.cn/uni_halo_love/love_bg1.png', // 背景图片
	loveImageUrl: 'https://b.925i.cn/uni_halo_love/like.png', // 爱心图片

	boy: {
		name: '未知男主',
		avatar: 'https://b.925i.cn/uni_halo_love/love_boy.png',
		birthday: '2022-09-25' // 生日
	},

	girl: {
		name: '未知女主',
		avatar: 'https://b.925i.cn/uni_halo_love/love_girl.png',
		birthday: '2022-04-19' // 生日
	},
	timeTitle: '这是我们一起走过的',
	loveStartDate: '2022-04-10 13:14:20', // 恋爱开始时间

	nav: [
		{
			key: 'journey',
			use: true,
			iconImageUrl: 'https://b.925i.cn/uni_halo_love/diandian.png',
			title: '关于我们',
			desc: '我们一起度过的那些经历'
		},
		{
			key: 'list',
			use: true,
			iconImageUrl: 'https://b.925i.cn/uni_halo_love/diandian.png',
			title: '恋爱清单',
			desc: '你我之间的约定我们都在努力实现'
		}
	],

	// 关于我们：支持富文本内容
	journey: ` 我们的故事很长，等我细细道来...`,

	// 恋爱清单
	loveList: {
		useApi: false, // 是否启用api接口
		api: '', // api 接口（如果使用api接口的方式，则下方的data可以留空，但是api接口必须按照对应的数据格式返回）
		data: [
			{
				index: 0, // 序号
				finish: true, // 是否已完成
				title: '偷偷记录对方熟睡的模样', // 事件名称
				desc: '偷偷观察对方熟睡的模样，记录下来', // 事件描述
				detail: {
					start: '2022年05月20日', // 计划开始时间
					desc: '偷偷观察对方熟睡的模样，记录下来', // 事件详细描述
					end: '每天', // 完成时间，
					moment: '', // 完成瞬间的记录
					other: '' // 其他说明
				}
			},
			{
				index: 1,
				finish: false,
				title: '陪对方过生日',
				desc: '陪对方一起过生日',
				detail: {
					start: '2023年05月20日',
					desc: '陪对方一起过生日，他和我的生日',
					end: '',
					moment: '',
					other: '他 生日5月20日 我生日9月25日'
				}
			},
			{
				index: 2,
				finish: false,
				title: '一起去旅行',
				desc: '一起来一场说走就走的旅行，希望去的是大理',
				detail: {
					start: '',
					desc: '',
					end: '',
					moment: '一起来一场说走就走的旅行，希望去的是大理',
					other: ''
				}
			},
			{
				index: 3,
				finish: false,
				title: '一起穿情侣装逛街',
				desc: '一起穿情侣装逛街',
				detail: {
					start: '',
					desc: '',
					end: '',
					moment: '',
					other: ''
				}
			},
			{
				index: 4,
				finish: false,
				title: '一起看日出',
				desc: '一起看日出',
				detail: {
					start: '',
					desc: '',
					end: '',
					moment: '',
					other: ''
				}
			},
			{
				index: 5,
				finish: false,
				title: '一起看日落',
				desc: '一起看日落',
				detail: {
					start: '',
					desc: '',
					end: '',
					moment: '',
					other: '' // 其他说明
				}
			},
			{
				index: 6,
				finish: false,
				title: '一起买菜、做饭、刷碗',
				desc: '一起买菜、做饭、刷碗',
				detail: {
					start: '',
					desc: '',
					end: '',
					moment: '',
					other: ''
				}
			}
		]
	}
};
```

## 五、静态图片配置（补充）

修改一些业务图片默认地址，素材可以加群在 [`QQ群`](/desgin/introduction.html#交流反馈) 内文件下载） 上传到您的服务器或者 oss
中，需要能够在公网访问即可，相关的配置在 `config/halo.config.js` 文件里，
在素材中有对应名称的素材，具体需要修改的字段如下：

```javascript
export default {
	uni_halo_logo: '', // uni-halo的logo地址（uni_halo_logo.png）

	miniCodeImageUrl: '', // 小程序太阳码/二维码图片地址（uni_halo_wx_qrcode.jpg）
	aboutProfileImageUrl: '', // 关于页面中的资料卡背景图 （uni_halo_profile_bg.jpg）

	loadingGifUrl: '', // 图片加载中的地址 （uni_halo_img_lazyload.gif）
	loadingErrUrl: '', // 图片加载失败的地址（暂未提供素材）
	loadingEmptyUrl: '', // 加载图片为空地址（暂未提供素材）

	waveImageUrl: '' // 关于页面波浪图片地址（uni_halo_about_wave.gif）
};
```
