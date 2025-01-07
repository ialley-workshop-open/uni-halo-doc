<template>
	<div class='using-examples' v-if='usingExamples.length!==0'>
		<div class='using-examples_head'>
			<h1 class='using-examples_head__title'>使用案例</h1>
			<p class='using-examples_head__subtitle'>
				免费开源，以下站长都在使用
			</p>
		</div>
		<ul class='using-examples_list'>
			<li
				class='using-examples_list__item'
				v-for='(item, index) in usingExamples'
				:key='index'
				:title='item.name'
			>
				<a :href='item.link' target='_blank'>
					<div class='using_image'>
						<img :src='item.image' :alt='item.name' data-fancybox='gallery' />
					</div>
					<div class='using_name'>{{ item.name }}</div>
					<div class='using_nickname'>（站长：{{ item.nickname }}）</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const usingExamples = ref([]);

const getExamples = () => {
	fetch('/data/examples.json').then((res) => res.json()).then((res) => {
		usingExamples.value = res;
	}).catch((err) => console.error(err));
};
getExamples();
</script>

<style scoped lang='less'>
.using-examples {
	width: 100%;
	margin: 0 auto;
	max-width: 1150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding-top: 70px;
	margin-bottom: 26px;

	&_head {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 26px;
		margin-bottom: 32px;

		&__title {
			font-size: 26px;
			color: var(--vp-c-brand);
		}

		&__subtitle {
			margin-top: 12px;
			color: var(--vp-c-text-2);
			font-size: 16px;
		}
	}

	&_list {
		width: 100%;
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 16px;

		&__item {
			width: 23.8%;
			// width: 18.8%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border: 1px solid var(--vp-c-bg-soft);
			background-color: var(--vp-c-bg-soft);
			transition: transform 0.3s ease-in-out;
			box-sizing: border-box;
			padding: 24px;
			border-radius: 12px;

			> a {
				text-decoration: none;
			}

			&:hover {
				transform: translateY(-4px);

				> a {
					text-decoration: underline;
				}
			}

			.using_image {
				width: 100%;
				margin-bottom: 16px;
				border-radius: 50%;
				box-sizing: border-box;
				overflow: hidden;

				> img {
					width: 100%;
					height: 100%;
				}
			}

			.using_name {
				font-size: 18px;
				text-align: center;
				line-height: 22px;
				// color: var(--vp-c-brand);
				color: var(--vp-c-text-2);
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.using_nickname {
				margin-top: 4px;
				font-size: 14px;
				text-align: center;
				line-height: 22px;
				color: var(--vp-c-text-2);
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
}

/* iPad */
@media (max-width: 1368px) {
	.using-examples_list {
		padding: 0 24px;

		&__item {
			width: 23.9%;
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
		padding: 0 24px;

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
