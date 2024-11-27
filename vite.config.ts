import { defineConfig } from 'vite';
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite';

export default defineConfig({
	base: '/',
	plugins: [
		GitChangelog({
			repoURL: () => 'https://github.com/ialley-workshop-open/uni-halo-doc'
		}),
		GitChangelogMarkdownSection()
	],
	optimizeDeps: {
		exclude: [
			'@nolebase/vitepress-plugin-inline-link-preview/client',
			'vitepress'
		],
	},
	ssr: {
		noExternal: [
			// 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
			'@nolebase/vitepress-plugin-inline-link-preview',
		],
	},
	server: {
		host: '0.0.0.0',
		open: true
	}
});
