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
			pattern: 'https://github.com/ialley-workshop-open/uni-halo-doc/tree/main/:path'
		},
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/ialley-workshop-open/uni-halo'
			},
			{
				icon: 'discord',
				link: 'https://www.xiaoxiaomo.cn'
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
				'Copyright © 2022 <a href="/" target="_self" title="uni-halo">uni-halo</a>丨AGPL-3.0丨<a href="https://www.xiaoxiaomo.cn/" target="_blank" title="小莫唐尼个人主页">小莫唐尼</a>丨<a target="_blank" title="51la网站统计" href="https://v6.51.la/s/GPZ3G9xLtawiqLD"><img class="s-51la-image" src="https://sdk.51.la/icon/1-1.png"></a>'
		},
		nav: [
			{
				text: 'UHalo PRO',
				link: 'https://www.uhalo.pro/'
			},
			{
				text: 'v1.0',
				link: 'https://uni-halo.925i.cn/v1'
			},
			{
				text: '设计指南',
				link: '/design/intro',
				activeMatch: '/design/'
			},
			{
				text: '部署指南',
				link: '/deploy/intro',
				activeMatch: '/deploy/'
			},
			{
				text: '常见问题',
				link: '/problem/questions',
				activeMatch: '/questions/'
			},
			{
				text: '友情链接',
				link: '/links/friend-links',
				activeMatch: '/friend-links/'
			},
			{
				text: '相关链接',
				items: [
					{
						text: 'UHalo PRO',
						link: 'https://www.uhalo.pro/'
					},
					{
						text: '作者主页',
						link: 'https://www.xiaoxiaomo.cn/'
					},
					{
						text: '作者博客',
						link: 'https://blog.925i.cn'
					},
					{
						text: '巷子工坊',
						link: 'https://ialley.uhalo.pro/'
					},
					{
						text: '配置插件',
						link: 'https://github.com/ialley-workshop-open/plugin-uni-halo'
					},
					{
						text: '源码仓库',
						link: 'https://github.com/ialley-workshop-open/uni-halo'
					},
					{
						text: '应用市场',
						link: 'https://www.halo.run/store/apps/app-ryemX'
					},
					{
						text: 'Halo',
						link: 'https://halo.run'
					}
				]
			},
			{
				text: '赞赏项目',
				link: '/other/donate'
			}
		],
		sidebar: {
			'/design/': [
				{
					text: '设计指南',
					items: [
						{
							text: '项目介绍',
							link: '/design/intro'
						},
						{
							text: '目录说明',
							link: '/design/folder'
						},
						{
							text: '相关技术',
							link: '/design/technology'
						},
						{
							text: '界面预览',
							link: '/design/pages'
						},
						{
							text: '视频介绍',
							link: '/design/video'
						}
					]
				}
			],
			'/deploy/': [
				{
					text: '部署指南',
					items: [
						{
							text: '部署须知',
							link: '/deploy/intro'
						},
						{
							text: '准备工作',
							link: '/deploy/preparation'
						},
						{
							text: '运行项目',
							link: '/deploy/run'
						},
						{
							text: '插件配置',
							link: '/deploy/config'
						},
						{
							text: '调试预览',
							link: '/deploy/preview'
						},
						{
							text: '发布小程序',
							link: '/deploy/wx-release'
						}
						// {
						// 	text: '应用发布（APP）',
						// 	link: '/deploy/app-release'
						// },
						// {
						// 	text: '应用更新',
						// 	link: '/deploy/app-update'
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
			'/links': [
				{
					text: '友情链接',
					items: [
						{
							text: '友情链接',
							link: '/links/friend-links'
						}
					]
				}
			],
			'/problem': [
				{
					text: '常见问题',
					items: [
						{
							text: '常见问题',
							link: '/problem/questions'
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
