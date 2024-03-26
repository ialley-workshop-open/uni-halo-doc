<template>
	<Layout>
		<template #aside-outline-after>
			<div class='recommend-container'>
				<p class='item-title'>在线体验</p>
				<p class='item-desc'>uni-halo 小程序版本演示</p>
				<img alt='小莫唐尼（小程序体验）' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/a0c1a95b49b5db7f78248.png' />
				<img alt='官方交流群（QQ）' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/b83b9e79695779c4344f3.png' />
				<p class='item-title' style='margin-top: 24px;'>图图小绘</p>
				<p class='item-desc'>一个文案图库表情包小程序</p>
				<div v-if='false' class='ad-image border'>
					<img alt='图图小绘（微信小程序）' data-fancybox='gallery' src='https://img.925i.cn/file/6fadeb1cb095944954a59.jpg' />
				</div>
				<img alt='图图小绘（微信小程序）' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/d316c4724f2dd3cac685c.jpg' />
				<p class='item-desc' style='margin-top: 24px;margin-bottom: -6px;'>爱品优省·各类会员优惠充值</p>
				<img alt='爱品优省·各类会员优惠充值' class='ad-image border no-padding' data-fancybox='gallery'
						 src='https://img.925i.cn/file/7a409af95461124c9c5db.png' />
			</div>
		</template>
		<template #not-found>
			<div class='NotFound'>
				<p class='code'>404</p>
				<h1 class='title'>啊偶，页面找不到了</h1>
				<div class='divider'></div>
				<blockquote class='quote'>您访问的地址不存在或者已经被删除，如果您有需要，请发送邮件到 <a href='mailto:studio@925i.cn'>studio@925i.cn</a>获取支持.
				</blockquote>
				<div class='action'><a aria-label='返回主页' class='link' href='/'> 返回主页 </a></div>
			</div>
		</template>

		<template #layout-top>
			<CustomDialog v-if='dialogShow' title='站长推荐' @on-close='dialogShow = false'>
				<div class='ad'>
					<div class='ad-item pink'>
						<img alt='uni-halo 小程序版本演示' class='ad-cover' data-fancybox='gallery' src='https://img.925i.cn/file/6fadeb1cb095944954a59.jpg' />
						<div class='ad-text'>
							<p><strong style='font-size: 18px'>《图图小绘》</strong>- 微信小程序打造个性化的利器！</p>
							<p> 提供了丰富多样的壁纸、头像和表情包资源免费下载。</p>
							<p> 还精心提供聊天、朋友圈以及个性签名等类型文案！</p>
						</div>
					</div>

					<div class='ad-item '>
						<img alt='爱品优省' class='ad-cover' data-fancybox='gallery' src='https://img.925i.cn/file/ecd1275e96a09a0dea0d6.png' />
						<div class='ad-text'>
							<p><strong style='font-size: 18px'>《爱品优省》</strong>- 微信公众号优惠充值平台！</p>
							<p> 提供各类会员季卡、月卡、周卡等购买优惠。</p>
							<p> 从本站扫码进入购买，获取更多优惠！</p>
						</div>
					</div>
				</div>
				<template #footer>
					<XiaoButton size='mini' title='一天内不再提示' @click='handleConfirm'></XiaoButton>
					<XiaoButton :use-animation='true' size='mini' title='知道啦，我会记得关注滴' type='primary' @click='dialogShow = false'></XiaoButton>
				</template>
			</CustomDialog>
		</template>
	</Layout>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import XiaoButton from './ui/XiaoButton.vue';

const { Layout } = DefaultTheme;
const data = useData();

const dialogShow = ref(false);

function handleComputedDiffHour(time1: any, time2: any) {
	const _time1 = new Date(time1).getTime();
	const _time2 = new Date(time2).getTime();
// 计算两个时间的时间戳差值
	const diff = Math.abs(_time2 - _time1);
// 将时间戳差值转换为小时
	const diffHours = Math.floor(diff / (1000 * 60 * 60));
	return diffHours;
}

const DIALOG_KEY: string = 'dialog_wx_show';

const checkShow = () => {
	let dialogInfo = localStorage.getItem(DIALOG_KEY);
	if (dialogInfo) {
		dialogInfo = JSON.parse(dialogInfo);
		const diffHour = handleComputedDiffHour(dialogInfo.time, new Date().getTime());
		dialogShow.value = diffHour > 12;
	} else {
		dialogShow.value = true;
	}
};

onMounted(() => {
	setTimeout(checkShow, 500);
});

function handleSaveDialogInfo(dialogInfo: any) {
	dialogInfo = dialogInfo || { time: new Date().getTime() };
	localStorage.setItem(DIALOG_KEY, JSON.stringify(dialogInfo));
}

function handleConfirm(dialogInfo: any) {
	handleSaveDialogInfo(dialogInfo);
	dialogShow.value = false;
}

</script>


<style lang='less' scoped>
.recommend-container {
	/* padding: 16px; */
	padding-left: 16px;
	font-size: 14px;
}

.item-title {
	position: relative;
	padding-left: 12px;
	color: #85b8f6;
	font-weight: bold;
}

.item-title::before {
	content: '';
	width: 5px;
	height: 14px;
	position: absolute;
	left: 0px;
	top: 50%;
	transform: translateY(-50%);
	background-color: #85b8f6;
	border-radius: 3px;
}

.item-desc {
}

.recommend-container p {
	cursor: pointer;
	margin: 3px 0;
}

.recommend-container {
	color: rgb(135 143 160);
}

.recommend-container img {
	/* width: 150px; */
	border-radius: 6px;
}

.ad-image {
	box-sizing: border-box;
	margin-top: 12px;
	cursor: pointer;

	&.border {
		border-radius: 3px;
		padding: 12px;
		border: 1px solid rgba(247, 247, 247, 1);
		background-color: #ffffff;
	}

	> img {
		width: 100%;
	}

	&.no-padding {
		padding: 0 !important;
	}
}

.NotFound {
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	.code {
		line-height: 64px;
		font-size: 64px;
		font-weight: 600;
	}

	.title {
		padding-top: 12px;
		letter-spacing: 2px;
		line-height: 20px;
		font-size: 20px;
		font-weight: 700;
	}

	.divider {
		margin: 24px auto 18px;
		width: 64px;
		height: 1px;
		background-color: var(--vp-c-divider);
	}

	.quote {
		margin: 0 auto;
		max-width: 256px;
		font-size: 14px;
		font-weight: 500;
		color: var(--vp-c-text-2);
	}

	.action {
		padding-top: 20px;

		.link {
			display: inline-block;
			border: 1px solid var(--vp-c-brand);
			border-radius: 16px;
			padding: 3px 16px;
			font-size: 14px;
			font-weight: 500;
			color: var(--vp-c-brand);
			transition: border-color 0.25s, color 0.25s;
		}
	}
}

.ad {
	display: flex;
	flex-direction: column;
	gap: 24px;

	&-item {
		display: flex;
		align-items: center;
		gap: 0 12px;
		padding: 24px;
		transition: all 0.15s ease-in-out;
		border-radius: 6px;
		border: 1px solid #10b981;

		&:hover {
			transform: translateY(-2px);

			&.pink {
				//background-color: rgba(255, 128, 171, 1);
				//background-color: rgba(254, 0, 85, 0.5);
				background-color: rgba(7, 192, 96, 1);
				border-color: #ffffff;
				color: #fff;
			}
		}
	}

	&-cover {
		width: 120px;
		height: 120px;
		border-radius: 6px;
	}

	&-text {
		padding-left: 24px;
		line-height: 1.6em;
		font-size: 14px;

		p + p {
			margin-top: 12px;
		}
	}
}
</style>
