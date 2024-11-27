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
	server: {
		host: '0.0.0.0',
		open: true
	}
});
