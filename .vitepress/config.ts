import { defineConfig } from 'vitepress';
import path from 'path';

export default defineConfig({
  title: 'uni-halo 丨小莫唐尼',
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
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  srcDir: `${path.resolve(process.cwd())}/src`,
  themeConfig: {
    logo: '/logo.png',
    editLink: {
      text: '为此页提供修改建议',
      pattern: 'https://gitee.com/ialley-workshop-open/uni-halo-doc/tree/master/:path'
    },
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/ialley-workshop-open/uni-halo' }],
    localeLinks: {
      text: '简体中文',
      items: []
    },
    algolia: {
      appId: 'Y93HSGWS5S',
      apiKey: '55af29e9571ea6fe09352c04fdc309e9',
      indexName: 'ialley-workshop'
    },
    footer: {
      message: '根据 MIT 许可证发布',
      copyright: 'Copyright © 2022 小莫唐尼'
    },
    nav: [
      { text: '指引', link: '/guide/', activeMatch: '/guide/' },
      { text: '规范', link: '/standard/category', activeMatch: '/standard' },
      { text: '教程', link: '/tutorial/install', activeMatch: '/tutorial/' },
      {
        text: '相关链接',
        items: [
          {
            text: '项目源码',
            link: 'https://gitee.com/ialley-workshop-open/uni-halo'
          },
          {
            text: '文档源码',
            link: 'https://gitee.com/ialley-workshop-open/uni-halo-doc'
          },
          {
            text: '更新日志',
            link: 'https://gitee.com/ialley-workshop-open/uni-halo/blob/master/CHANGELOG.md'
          }
        ]
      },
      {
        text: '赞助',
        link: '/other/donate'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '介绍',
              link: '/guide/introduction'
            },
            {
              text: '开始',
              link: '/guide/'
            },
            {
              text: '配置',
              link: '/guide/settings'
            },
            {
              text: '路由',
              link: '/guide/router'
            },
            {
              text: '菜单',
              link: '/guide/menu'
            },
            {
              text: '权限',
              link: '/guide/auth'
            }
          ]
        }
      ],
      '/standard/': [
        {
          text: '规范',
          items: [
            {
              text: '目录规范',
              link: '/standard/category'
            },
            {
              text: '命名规范',
              link: '/standard/name'
            },
            {
              text: 'css规范',
              link: '/standard/css'
            },
            {
              text: 'js规范',
              link: '/standard/js'
            },
            {
              text: 'vue规范',
              link: '/standard/vue'
            }
          ]
        }
      ],
      '/tutorial/': [
        {
          text: '教程',
          items: [
            {
              text: '安装教程',
              link: '/tutorial/install'
            },
            {
              text: '图标使用',
              link: '/tutorial/icon'
            }
          ]
        }
      ]
    }
  }
});
