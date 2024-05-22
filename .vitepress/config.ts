import { defineConfig } from 'vitepress';
import path from 'path';
import mdItCustomAttrs from 'markdown-it-custom-attrs';

export default defineConfig({
	title: 'uni-halo（v2.0）',
	lang: 'zh-CN',
	description:
		'一个优雅、清新、漂亮的移动端博客应用，基于 uniapp + halo2.x API 实现一款现代化的开源博客 / CMS 系统API开发的多端应用。uni-halo小程序、uni-halo微信小程序、uni-halo博客小程序、halo小程序、halo博客小程序、halo微信小程序。',
	head: [
		['meta', { name: 'author', content: '小莫唐尼' }],
		[
			'meta',
			{
				name: 'keywords',
				content:
					'uniapp, 小莫唐尼, halo, vue, uni-halo, uni-halo docs, uni-halo小程序, uni-app,halo开源博客,多端应用,uni-halo小程序,uni-halo微信小程序,uni-halo博客小程序,halo小程序,halo博客小程序,halo微信小程序。'
			}
		],
		['link', { rel: 'icon', type: 'image', href: '/logo.png' }],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
			}
		],
		['link', { rel: 'icon', href: '/favicon.ico' }],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://fastly.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'
			}
		],
		[
			'script',
			{
				src: 'https://fastly.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'
			}
		],
		[
			'script',
			{},
			`
				var _hmt = _hmt || [];
				(function() {
					var hm = document.createElement("script");
					hm.src = "https://hm.baidu.com/hm.js?6f486d3fdf5617866c907b540abfc368";
					var s = document.getElementsByTagName("script")[0];
					s.parentNode.insertBefore(hm, s);
				})();
			`
		],
		[
			'script',
			{},
			`
				!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"K5cHoyhHua9HOUCN",ck:"K5cHoyhHua9HOUCN",autoTrack:true,hashMode:true});
			`
		],
		[
			'script',
			{},
			`
				!(function(c,i,e,b){
				var h=i.createElement("script");
				var f=i.getElementsByTagName("script")[0];
				h.type="text/javascript";
				h.crossorigin=true;
				h.onload=function(){new c[b]["Monitor"]().init({id:"K5cUWbRPcIDRH8No",sendSuspicious:true,sendSpaPv:true});};
				f.parentNode.insertBefore(h,f);h.src=e;})(window,document,"https://sdk.51.la/perf/js-sdk-perf.min.js","LingQue");
			`
		],
		[
			'script',
			{},
			`
			  (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "lfzkgpgvjk");
			`
		]
	],
	srcDir: `${path.resolve(process.cwd())}/src`,
	themeConfig: {
		logo: '/logo.png',
		editLink: {
			text: '为此页提供修改建议',
			pattern: 'https://gitee.com/ialley-workshop-open/uni-halo-doc/tree/master/:path'
		},
		socialLinks: [
			{
				icon: 'github',
				link: 'https://gitee.com/ialley-workshop-open/uni-halo'
			},
			{
				icon: 'discord',
				link: 'https://b.925i.cn'
			}
		],
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档'
					},
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						displayDetails: '禁用详细视图',
						backButtonTitle: '返回',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '关闭'
						}
					}
				}
				// locales: {
				// 	zh: {
				// 		translations: {
				// 			button: {
				// 				buttonText: "搜索文档",
				// 				buttonAriaLabel: "搜索文档",
				// 			},
				// 			modal: {
				// 				noResultsText: "无法找到相关结果",
				// 				resetButtonTitle: "清除查询条件",
				// 				footer: {
				// 					selectText: "选择",
				// 					navigateText: "切换",
				// 				},
				// 			},
				// 		},
				// 	},
				// },
			}
		},

		// algolia: {
		//   appId: 'Y93HSGWS5S',
		//   apiKey: '55af29e9571ea6fe09352c04fdc309e9',
		//   indexName: 'ialley-workshop'
		// },
		footer: {
			message: '根据 AGPL-3.0 协议开源·请遵循协议',
			copyright:
				'Copyright © 2022 <a href="/" target="_self" title="uni-halo">uni-halo</a>丨AGPL-3.0丨<a href="https://b.925i.cn" target="_blank" title="小莫唐尼博客">小莫唐尼</a>丨<a target="_blank" title="51la网站统计" href="https://v6.51.la/s/GPZ3G9xLtawiqLD"><img class="s-51la-image" src="https://sdk.51.la/icon/1-1.png"></a>'
		},
		nav: [
			{
				text: 'UHalo PRO',
				link: 'https://uhalo.925i.cn/'
			},
			{
				text: '1.0版本',
				link: 'https://uni-halo.925i.cn/v1'
			},
			// { text: '开发指南', link: '/dev/quick-start', activeMatch: '/dev/' },
			{
				text: '部署指南',
				link: '/payload/introduction',
				activeMatch: '/payload/'
			},
			// {
			//   text: '贡献指南',
			//   link: '/contributor/index',
			//   activeMatch: '/contributor/'
			// },
			{ text: '功能预览', link: '/preview/images', activeMatch: '/preview/' },
			{ text: '更新日志', link: '/update/update', activeMatch: '/update/' },
			{
				text: '常见问题',
				link: '/problem/questions',
				activeMatch: '/questions/'
			},
			{
				text: '相关链接',
				items: [
					{
						text: 'UHalo PRO',
						link: 'https://uhalo.925i.cn/'
					},
					{
						text: 'uni-halo 1.0',
						link: 'https://uni-halo.925i.cn/v1/'
					},
					{
						text: '作者主页',
						link: 'https://www.925i.cn'
					},
					{
						text: '作者博客',
						link: 'https://b.925i.cn'
					},
					{
						text: 'Gitee',
						link: 'https://gitee.com/ialley-workshop-open/uni-halo'
					},
					{
						text: 'Github',
						link: 'https://github.com/ialley-workshop-open/uni-halo'
					},
					{
						text: 'uni-app',
						link: 'https://uniapp.dcloud.net.cn'
					},
					{
						text: 'Halo',
						link: 'https://halo.run'
					},
					{
						text: 'mp-html',
						link: 'https://jin-yufeng.gitee.io/mp-html/#/'
					}
				]
			},
			{
				text: '赞赏项目',
				link: '/other/donate'
			}
		],
		sidebar: {
			'/dev/': [
				{
					text: '开发指南',
					items: [
						{
							text: '快速上手',
							link: '/dev/quick-start'
						},
						{
							text: '目录说明',
							link: '/dev/floder'
						},
						{
							text: '配置文件',
							link: '/dev/config'
						},
						{
							text: '路由配置',
							link: '/dev/router'
						},
						{
							text: '菜单配置',
							link: '/dev/menu'
						},
						{
							text: '权限配置',
							link: '/dev/auth'
						},
						{
							text: '扩展图标',
							link: '/dev/icon'
						}
					]
				}
			],
			'/desgin/': [
				{
					text: '设计指南',
					items: [
						{
							text: '设计指南',
							link: '/desgin/index'
						},
						{
							text: '关于项目',
							link: '/desgin/introduction'
						},
						{
							text: '相关技术',
							link: '/desgin/technology'
						}
					]
				}
			],
			'/payload/': [
				{
					text: '部署指南',
					items: [
						{
							text: '部署须知',
							link: '/payload/introduction'
						},
						{
							text: '准备工作',
							link: '/payload/preparation'
						},
						{
							text: '启动项目',
							link: '/payload/run'
						},
						{
							text: '修改配置',
							link: '/payload/config'
						},
						{
							text: '应用发布（小程序）',
							link: '/payload/wx-release'
						},
						// {
						// 	text: '应用发布（APP）',
						// 	link: '/payload/app-release'
						// },
						// {
						// 	text: '应用更新',
						// 	link: '/payload/app-update'
						// }
					]
				}
			],
			'/contributor/': [
				{
					text: '贡献指南',
					items: [
						{
							text: '贡献指南',
							link: '/contributor/index'
						},
						{
							text: '命名规范',
							link: '/contributor/name'
						},
						{
							text: 'js书写规范',
							link: '/contributor/js'
						},
						{
							text: 'css书写规范',
							link: '/contributor/css'
						}
					]
				}
			],
			'/update/': [
				{
					text: '更新日志',
					items: [
						{
							text: '更新日志说明',
							link: '/update/update'
						},
						{
							text: 'v2.0.0-240520',
							link: '/update/v2.0.0-240520'
						},
						{
							text: 'v1.0.4-230608',
							link: '/update/v1.0.4-230608'
						},
						{
							text: 'v1.0.3-221212',
							link: '/update/v1.0.3-221212'
						},
						{
							text: 'v1.0.2-221210',
							link: '/update/v1.0.2-221210'
						},
						{
							text: 'v1.0.1-221209',
							link: '/update/v1.0.1-221209'
						},
						{
							text: 'v1.0.0-221207',
							link: '/update/v1.0.0-221207'
						}
					]
				}
			],
			'/other/': [
				{
					text: '其他',
					items: [
						{
							text: '赞助',
							link: '/other/donate'
						},
						{
							text: '致谢',
							link: '/other/thanks'
						}
					]
				}
			],
			'/preview/': [
				{
					text: '预览',
					items: [
						{
							text: '界面预览',
							link: '/preview/images'
						},
						{
							text: '视频介绍',
							link: '/preview/video'
						}
					]
				}
			]
		},
		outlineTitle: '内容目录',
		docFooter: {
			prev: '上一篇',
			next: '下一篇'
		}
	},
	// ,vue: {
	//   template: {
	//     compilerOptions: {
	//       isCustomElement: tag => tag.startsWith('Custom')
	//     }
	//   }
	// }
	markdown: {
		config: md => {
			// use more markdown-it plugins!
			md.use(mdItCustomAttrs, 'image', {
				'data-fancybox': 'gallery'
			});
		}
	}
});
