<template>
	<div class='recommends'>
		<div class='head'>
			<h3 class='title'>🥳 赞助打赏（{{ donate.length }}）</h3>
			<p class='sub-title'>给本项目捐助和赞助的博主，排名不分前后</p>
		</div>
		<div class='body'>
			<div v-if='donate.length!==0' class='links'>
				<div class='link-card' v-for='(item,index) in donate' :key='index'>
					<a class='link-card-content' :href='item.link' :title='item.name' target='_blank'>
						<div class='link-card-cover'>
							<img class='link-card-cover_image cover_image' :src='item.screenshot' :alt='item.name' data-fancybox='gallery' />
						</div>
						<div class='link-card-info'>
							<div class='link-card-info_name'>
								<img :src='item.image' :alt='item.name' data-fancybox='gallery'><span>{{ item.name }}</span>
							</div>
							<p class='link-card-info_desc clamp'>{{ item.desc }}</p>
						</div>
					</a>
				</div>
			</div>
			<div v-else class='empty'>暂无数据，欢迎赞助加入本站的友链</div>
		</div>
	</div>
	<div class='recommends'>
		<div class='head'>
			<h3 class='title'>🥳 开发贡献（{{ recommends.length }}）</h3>
			<p class='sub-title'>参与项目贡献的开发者，排名不分前后</p>
		</div>
		<div class='body'>
			<div v-if='recommends.length!==0' class='links'>
				<div class='link-card' v-for='(item,index) in recommends' :key='index'>
					<a class='link-card-content' :href='item.link' :title='item.name' target='_blank'>
						<div class='link-card-cover'>
							<img class='link-card-cover_image cover_image' :src='item.screenshot' :alt='item.name' data-fancybox='gallery' />
						</div>
						<div class='link-card-info'>
							<div class='link-card-info_name'>
								<img :src='item.image' :alt='item.name' data-fancybox='gallery'><span>{{ item.name }}</span>
							</div>
							<p class='link-card-info_desc clamp'>{{ item.desc }}</p>
						</div>
					</a>
				</div>
			</div>
			<div v-else class='empty'>暂无数据，欢迎参与本项目贡献</div>
		</div>
	</div>

	<div class='others'>
		<div class='head'>
			<h3 class='title'>🥳 其他友链（{{ others.length }}）</h3>
			<p class='sub-title'>技术、博客、生活等其他站点</p>
		</div>
		<div class='body'>
			<div v-if='others.length!==0' class='links'>
				<div class='link-card' v-for='(item,index) in others' :key='index'>
					<a class='link-card-content' :href='item.link' :title='item.name' target='_blank'>
						<div class='link-card-cover'>
							<img class='link-card-cover_image' :src='item.image' :alt='item.name' data-fancybox='gallery' />
						</div>
						<div class='link-card-info'>
							<h4 class='link-card-info_name'>{{ item.name }}</h4>
							<p class='link-card-info_desc clamp'>{{ item.desc }}</p>
						</div>
					</a>
				</div>
			</div>
			<div v-else class='empty'>暂无数据，欢迎加入本站友链</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const donate = ref([
	{
		name: '南枝已谢',
		image: 'https://www.xgrsir.com/upload/xgrsir.ico',
		link: 'https://xgrsir.com/',
		desc: '人生如逆旅，我亦是行人。',
		spend: '16.80 - QQ红包 - 20241018',
		screenshot: 'https://blog.925i.cn/upload/xgrsir_screenshot.png'
	},
	{
		name: 'xiaohao',
		image: 'https://lk.ynxh.top/i/2024/10/25/671b10898e6b7.png',
		link: 'https://ynxh.top/',
		desc: 'xiaohao成长日记。',
		spend: '50.00 - 微信打赏 - 20241025',
		screenshot: 'https://lk.ynxh.top/i/2024/10/25/671b148f6e50d.png'
	}
]);

const recommends = ref([
	{
		name: '小莫唐尼',
		image: 'https://blog.925i.cn/upload/avatar.jpg',
		link: 'https://blog.925i.cn/',
		desc: '一个爱凑热闹，喜欢捣鼓前端的博主。',
		screenshot: 'https://blog.925i.cn/upload/xiao_screenshot.png'
	},
	{
		name: '木因博客',
		image: 'https://blog.muyin.site/upload/liuyiwuqing.png',
		link: 'https://blog.muyin.site/',
		desc: '心在哪里收获就在哪里。',
		screenshot: 'https://blog.925i.cn/upload/muyin_screenshot.png'
	},
	{
		name: 'UniHalo',
		image: 'https://uni-halo.925i.cn/logo.png',
		link: 'https://blog.925i.cn/',
		desc: '开源免费 Halo 博客小程序，支持多端编译。',
		screenshot: 'https://uni-halo.925i.cn/screenshot.png'
	},
	{
		name: 'Halo',
		image: 'https://www.halo.run/upload/2021/03/Adaptive256-463ca9b92e2d40268431018c07735842.png',
		link: 'https://www.halo.run/',
		desc: '强大易用的开源建站工具。',
		screenshot: 'https://blog.925i.cn/upload/halo_screenshot.png'
	}
]);

const others = ref([
	{
		name: '秋叶资源',
		image: 'http://touch.qybhl.top/i/2024/08/19/66c2cb8f03040.png',
		link: 'https://www.qybhl.com',
		desc: '专注免费资源分享，将免费资源进行到底。',
		screenshot: 'https://blog.925i.cn/upload/qybhl_screenshot.png'
	},
	{
		name: 'Taupis的随笔',
		image: 'https://taupis.com/upload/123.png',
		link: 'https://taupis.com',
		desc: '知足常乐，南风不竞。',
		screenshot: 'https://blog.925i.cn/upload/taupis_screenshot.png'
	}
]);

</script>

<style scoped lang='less'>

.empty {
	border: 1px solid var(--vp-c-text-2);
	border-radius: 4px;
	padding: 12px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--vp-c-text-2);
	font-size: 13px;
}

.cover_image {
	border-radius: 0;

	&:hover {
		transform: scale(1.1) !important;
	}
}

.clamp {
	/* 限制在一个块元素显示的文本的行数 */
	-webkit-line-clamp: 2;
	/* 允许内容溢出的容器 */
	overflow: hidden;
	/* 确保元素内的文本不会换行 */
	display: -webkit-box;
	/* 将对象作为弹性伸缩盒子模型显示 */
	-webkit-box-orient: vertical;
}

.recommends {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	box-sizing: border-box;
	margin: 0 auto 12px;

	.head {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		font-size: 26px;

		.title {
			font-size: 22px;
			color: var(--vp-home-hero-name-color);
		}

		.sub-title {
			margin-top: 12px;
			color: var(--vp-c-text-2);
			font-size: 16px;
			padding-left: 6px;
		}
	}

	.body {
		width: 100%;
	}

	.links {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		.link-card {
			box-sizing: border-box;
			width: 33.33%;
			padding: 6px;
			transition: transform 0.2s ease-in-out;

			&:hover {
				transform: translateY(-3px);
			}

			&-content {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				border-radius: 6px;
				box-sizing: border-box;
				background-color: var(--vp-c-bg-soft);
				border: 1px solid rgba(255, 255, 255, 0.095);
				overflow: hidden;
				text-decoration-color: var(--vp-c-text-2);
			}

			&-cover {
				flex-shrink: 0;
				width: 100%;
				height: 110px;
				overflow: hidden;
				background-color: var(--bg-color);

				&_image {
					width: 100%;
					height: 100%;
					transition: all 0.2s ease-in-out;
					object-fit: cover;
				}
			}

			&-info {
				flex-grow: 1;
				width: 100%;
				height: 94px;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				gap: 6px 0;
				padding: 12px;

				&_name {
					display: flex;
					align-items: center;
					gap: 0 6px;
					text-align: left;
					// color: var(--vp-home-hero-name-color);
					color: var(--vp-c-text-2);
					width: 100%;

					> img {
						width: 24px;
						height: 24px;
						border-radius: 50%;
					}

					> span {
						font-size: 16px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				&_desc {
					width: 100%;
					margin: 0;
					font-size: 13px;
					text-align: left;
					line-height: 1.6;
					color: var(--vp-c-text-2);
				}
			}
		}
	}
}

.others {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	box-sizing: border-box;
	margin: 0 auto 12px;

	.head {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		font-size: 26px;

		.title {
			font-size: 22px;
			color: var(--vp-home-hero-name-color);
		}

		.sub-title {
			margin-top: 12px;
			color: var(--vp-c-text-2);
			font-size: 16px;
			padding-left: 6px;
		}
	}

	.body {
		width: 100%;
	}

	.links {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		.link-card {
			box-sizing: border-box;
			width: 33.33%;
			height: 100px;
			padding: 6px;
			display: flex;
			align-items: center;
			transition: transform 0.2s ease-in-out;

			&:hover {
				transform: translateY(-3px);
			}

			&-content {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				border-radius: 12px;
				box-sizing: border-box;
				background-color: var(--vp-c-bg-soft);
				border: 1px solid rgba(255, 255, 255, 0.075);
				overflow: hidden;
				padding: 12px;
				gap: 0 12px;
				text-decoration-color: var(--vp-c-text-2);
				box-shadow: 0px 2px 12px var(--vp-c-bg-soft);
			}

			&-cover {
				flex-shrink: 0;
				height: 100%;
				display: flex;
				align-items: center;

				&_image {
					width: 60px;
					height: 60px;
					border-radius: 50%;
					transition: all 0.2s ease-in-out;
					object-fit: contain;
					border: 1px solid rgba(255, 255, 255, 0.075);
					background-color: var(--vp-c-bg-soft);
				}
			}

			&-info {
				flex-grow: 1;
				width: calc(100% - 72px);
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 3px 0;

				&_name {
					font-size: 16px;
					text-align: left;
					// color: var(--vp-home-hero-name-color);
					color: var(--vp-c-text-2);
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				&_desc {
					font-size: 12px;
					text-align: left;
					line-height: 1.6em;
					color: var(--vp-c-text-2);
					width: 100%;
					margin: 0;
				}
			}
		}
	}
}

/* iPad */
@media (max-width: 1368px) {
	.using-examples_list {
		&__item {
			width: 33%;
		}
	}
}

/* phone */
@media (max-width: 960px) {
	.using-examples_list {
		&__item {
			width: 30%;
		}
	}
}

/* phone */
@media (max-width: 768px) {
	.using-examples_list {
		&__item {
			width: 46%;

			.using_image {
				margin-bottom: 12px;
			}

			.using_name {
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 15px;
			}
		}
	}
}

/* phone */
@media (max-width: 500px) {
	.using-examples_list {
		padding: 0 24px;

		&__item {
			width: 46%;

			.using_image {
				margin-bottom: 12px;
			}

			.using_name {
				font-size: 15px;
			}
		}
	}
}
</style>
