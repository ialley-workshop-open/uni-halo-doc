<template>
	<Layout>
		<template #aside-outline-after>
			<div class='recommend-container'>
				<p class='item-title'>在线体验</p>
				<p class='item-desc'>uni-halo 小程序版本演示</p>
				<img alt='小莫唐尼（小程序体验）' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/a0c1a95b49b5db7f78248.png' />
				<img alt='官方交流群（QQ）' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/b83b9e79695779c4344f3.png' />
				<p class='item-title' style='margin-top: 24px;'>图图小绘（壁纸表情小程序）</p>
				<p v-if='false' class='item-desc' style='margin-bottom: -6px;'>一个文案图库表情包小程序</p>
				<div v-if='false' class='ad-image border'>
					<img alt='图图小绘（微信小程序）' data-fancybox='gallery' src='https://img.925i.cn/file/6fadeb1cb095944954a59.jpg' />
				</div>
				<img alt='图图小绘（微信小程序）' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/d316c4724f2dd3cac685c.jpg' />
				<p class='item-title' style='margin-top: 24px;'>秒懂文案馆（微信公众号）</p>
				<p v-if='false' class='item-desc' style='margin-bottom: -6px;'>一个内容丰富的微信公众号</p>
				<img alt='秒懂文案馆（微信公众号）' class='ad-image border no-padding' data-fancybox='gallery'
						 src='/mdwag.png' />
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
			<CustomDialog v-if='dialogShow' title='站长推荐' @on-close='handleClose'>
				<template #body>
					<div class='recommend-app'>
						<div v-if='false' class='recommend-app-item pink'>
							<img alt='uni-halo 小程序版本演示' class='recommend-app-cover' data-fancybox='gallery'
									 src='https://img.925i.cn/file/6fadeb1cb095944954a59.jpg' />
							<div class='recommend-app-text'>
								<p><strong style='font-size: 18px'>《图图小绘》</strong>- 微信小程序打造个性化的利器！</p>
								<p> 丰富多样的壁纸、头像和表情包资源免费下载。</p>
								<p> 精心分享聊天、朋友圈以及个性签名等类型文案！</p>
							</div>
						</div>
						<div class='recommend-app-item pink'>
							<img alt='秒懂文案馆' class='recommend-app-cover' data-fancybox='gallery' src='/mdwag_qrcode.jpg' />
							<div class='recommend-app-text'>
								<p><strong style='font-size: 18px'>《秒懂文案馆》</strong>- 微信公众号文案！</p>
								<p> 分享文案、头像、壁纸、表情包等内容。</p>
							</div>
						</div>
						<template v-if='ads.dialog.length!==0'>
							<a v-for='(ad,index) in ads.dialog' :key='index' :href='ad.link' :title='ad.title' target='_blank'>
								<div class='recommend-app-item ad'>
									<img :alt='ad.title' class='recommend-app-cover ad' :src='ad.cover' />
									<div class='recommend-app-text ad'>
										<p class='hot'><strong style='font-size: 18px'>{{ ad.title }}</strong></p>
										<p v-html='ad.description'></p>
									</div>
								</div>
							</a>
						</template>
					</div>
				</template>
				<template #footer>
					<XiaoButton size='mini' :title='useShowOnce?"本次访问不再提示":"一天内不再显示"' @click='handleConfirm'></XiaoButton>
					<XiaoButton :use-animation='true' size='mini' title='知道啦，我会记得关注滴' type='primary' @click='handleClose'></XiaoButton>
				</template>
			</CustomDialog>
			<CustomAppPreview></CustomAppPreview>
		</template>
		<template #sidebar-nav-after>
			<div v-if='ads.asideNavAfter.length!==0' class='recommend-container sidebar-nav-ads'>
				<p class='item-title'>站长推荐：腾讯云特惠热卖产品</p>
				<template v-for='ad in ads.asideNavAfter'>
					<a :href='ad.link' :title='ad.title' target='_blank'>
						<img :alt='ad.title' class='ad-image border no-padding'
								 :src='ad.cover' />
					</a>
				</template>
			</div>
		</template>

		<template #nav-bar-content-after>
			<slot name="nav-bar-content-after" />
		</template>
		<template #nav-screen-content-after>
			<slot name="nav-screen-content-after" />
		</template>
	</Layout>
</template>

<script lang='ts' setup>
import { nextTick, onMounted, ref } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import XiaoButton from './ui/XiaoButton.vue';
import CustomAppPreview from './CustomAppPreview.vue';

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
const CONFETTI_GLOBAL_KEY: string = 'CONFETTI_GLOBAL_VISIBLE';

const useShowOnce = ref<boolean>(true);

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
const checkShowOnce = () => {
	let dialogInfo = sessionStorage.getItem(DIALOG_KEY);
	if (dialogInfo) {
		dialogShow.value = false;
	} else {
		dialogShow.value = true;
	}
};

onMounted(() => {
	if (useShowOnce.value) {
		setTimeout(checkShowOnce, 500);
	} else {
		setTimeout(checkShow, 500);
	}
	handleShowGlobalConfetti();

	// 	设置网页底部的年份
	const currentYear = new Date().getFullYear();
	const siteEndYear = document.getElementById('siteEndYear');
	if (siteEndYear) {
		siteEndYear.textContent = currentYear.toString();
	}

	handleShowNotify();
});

function handleShowConfetti(event: any) {
	// @ts-ignore
	confetti({
		zIndex: 9999, particleCount: 50,
		origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight }
	});
}

function handleShowGlobalConfetti() {
	if (sessionStorage.getItem(CONFETTI_GLOBAL_KEY)) return;
	sessionStorage.setItem(CONFETTI_GLOBAL_KEY, 'visible');
	let duration = 5 * 1000;
	let animationEnd = Date.now() + duration;
	let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

	function randomInRange(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	let interval = setInterval(function() {
		let timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		let particleCount = 50 * (timeLeft / duration);
		// @ts-ignore
		confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
		// @ts-ignore
		confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
	}, 250);
}


function handleSaveDialogInfo(dialogInfo: any) {
	dialogInfo = dialogInfo || { time: new Date().getTime() };
	localStorage.setItem(DIALOG_KEY, JSON.stringify(dialogInfo));
}

function handleSaveDialogInfoOnce(dialogInfo: any) {
	dialogInfo = dialogInfo || { time: new Date().getTime() };
	sessionStorage.setItem(DIALOG_KEY, JSON.stringify(dialogInfo));
}

function handleConfirm(e: any, dialogInfo: unknown) {
	if (useShowOnce.value) {
		handleSaveDialogInfoOnce(dialogInfo);
	} else {
		handleSaveDialogInfo(dialogInfo);
	}
	handleShowConfetti(e);
	setTimeout(() => {
		dialogShow.value = false;
	}, 100);
}

function handleClose(e: any) {
	handleShowConfetti(e);
	setTimeout(() => {
		dialogShow.value = false;
	}, 100);
}

const ads = ref({
	dialog: [],
	asideNavAfter: []
});

function getAds() {
	fetch('https://uni-halo.925i.cn/data/ads.json').then(res => res.json()).then(res => {
		ads.value = res;
		ads.value.dialog = ads.value.dialog.filter(x => x.visible && new Date(x.expire).getTime() >= new Date().getTime());
		ads.value.asideNavAfter = ads.value.asideNavAfter.filter(x => x.visible && new Date(x.expire).getTime() >= new Date().getTime());
	}).catch(err => console.log(err));
}

getAds();

function sleep(time: number) {
	return new Promise(resolve => setTimeout(resolve, time));
}

function handleShowNotify() {
	if (sessionStorage.getItem('NOTIFY_SHOW')) {
		return;
	}
	nextTick(async () => {
		await sleep(5000);

		// @ts-ignore
		const notify = new Notify({
			title: '消息通知',
			body: 'uni-halo2.x 已支持H5在线体验，点击文档右侧【在线预览】即可弹出预览界面。',
			badge: 'https://uni-halo.925i.cn/logo.png',
			icon: 'https://uni-halo.925i.cn/logo.png',
			image: 'https://uni-halo.925i.cn/images/uni-halo2.x.jpg',
			link: 'https://www.halo.run/store/apps/app-ryemX',
			requireInteraction: !localStorage.getItem('NOTIFY_SHOW'),
			autoClose: false
		});

		notify.show();
		sessionStorage.setItem('NOTIFY_SHOW', 'visible');
		localStorage.setItem('NOTIFY_SHOW', 'visible');
	});
}

</script>


<style lang='less' scoped>
.sidebar-nav-ads {
	display: flex;
	flex-direction: column;

	.item-title {
		padding-left: 0;
	}

	.item-title::before {
		display: none;
	}
}

.hot {
	color: #FF4C07;
	padding-left: 22px;
	position: relative;

	&:before {
		content: '';
		width: 26px;
		height: 26px;
		background-image: url("/icons/hot.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-55%);
		animation: hot 2s linear infinite;
	}
}

@keyframes hot {
	0% {
	}
	50% {
	}
	100% {
	}
}

.recommend-container {
	/* padding: 16px; */
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

.recommend-app {
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
				background-color: rgba(7, 192, 96, 0.75);
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
