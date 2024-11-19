<template>
	<div class='toggle-visible-btn' @click='visible = !visible'>{{ visible ? '收起预览' : '在线预览' }}</div>
	<div v-if='visible' class='custom-dialog' :class='[computedAniPosition]'>
		<iframe sandbox='allow-scripts allow-same-origin' class='app-iframe' src='https://blog.925i.cn/uni-halo' frameborder='0'></iframe>
	</div>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue';

const visible = ref(false);
const animation = ref<'right'|'bottom'>('right');
const computedAniPosition = computed(() => {

	if (animation.value === 'bottom') {
		return `bottom animation-bottom`;
	}
	if (animation.value === 'right') {
		return `right animation-right`;
	}

});

</script>

<style scoped>
.toggle-visible-btn {
	position: fixed;
	right: 0px;
	top: 50%;
	z-index: 99;
	cursor: pointer;
	transform: translateY(-50%);
	background-color: var(--vp-home-hero-name-color);
	backdrop-filter: blur(6px);
	writing-mode: vertical-rl;
	border-radius: 6px 0 0 6px;
	color: #ffffff;
	font-size: 14px;
	padding: 36px 3px;
	box-sizing: border-box;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
	user-select: none;
}

.custom-dialog {
	width: 330px;
	height: 650px;
	position: fixed;
	z-index: 99;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.88);
	font-size: 16px;
	margin: 0;
	box-sizing: border-box;
	overflow-y: auto;
	background-image: url("/images/iPhone13.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	border-radius: 30px;
	padding: 48px 13px 36px;
}

.custom-dialog.right {
	right: -366px;
	top: 50%;
	transform: translateY(-50%);
}

.custom-dialog.bottom {
	right: 36px;
	bottom: -100%;
	transform: translateY(50%);
}

.app-iframe {
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 0 3px 3px 0;
}

.custom-dialog.animation-bottom {
	animation: dialogAniBottom 0.4s ease-in-out forwards;
}

.custom-dialog.animation-right {
	animation: dialogAniRight 0.2s ease-in-out forwards;
}

@keyframes dialogAniRight {
	0% {
		right: -366px;
	}
	100% {
		right: 36px;
	}
}

@keyframes dialogAniBottom {
	0% {
		bottom: -100%;
	}
	100% {
		bottom: 50%;
	}
}

@media screen and (max-width: 768px) {
	.custom-dialog {
		width: 100%;
		height: 100%;
	}
}
</style>
