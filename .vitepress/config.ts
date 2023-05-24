import { defineConfig } from 'vitepress';
import path from 'path';
import mdItCustomAttrs from 'markdown-it-custom-attrs';

export default defineConfig({
  title: 'uni-halo',
  lang: 'zh-CN',
  description: '一个优雅、清新、漂亮的移动端博客应用，基于uniapp + halo api接口',
  head: [
    ['meta', { name: 'author', content: '小莫唐尼' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'uniapp, 小莫唐尼, halo, vue, uni-halo, uni-halo docs, uni-halo小程序'
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
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'
      }
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'
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
        'Copyright © 2022 <a href="/" target="_self" title="uni-halo">uni-halo</a>丨AGPL-3.0丨<a href="https://b.925i.cn" target="_blank" title="小莫唐尼博客">小莫唐尼</a>'
    },
    nav: [
      { text: '开发指南', link: '/dev/quick-start', activeMatch: '/dev/' },
      {
        text: '设计指南',
        link: '/desgin/index',
        activeMatch: '/desgin/'
      },
      {
        text: '部署指南',
        link: '/payload/introduction',
        activeMatch: '/payload/'
      },
      {
        text: '贡献指南',
        link: '/contributor/index',
        activeMatch: '/contributor/'
      },
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
        text: '赞助作者',
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
            {
              text: '应用发布（APP）',
              link: '/payload/app-release'
            },
            {
              text: '应用更新',
              link: '/payload/app-update'
            }
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
              text: 'v1.0.3-beta',
              link: '/update/v1.0.3-beta'
            },
            {
              text: 'v1.0.2-beta',
              link: '/update/v1.0.2-beta'
            },
            {
              text: 'v1.0.1-beta',
              link: '/update/v1.0.1-beta'
            },
            {
              text: 'v1.0.0-beta',
              link: '/update/v1.0.0-beta'
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
