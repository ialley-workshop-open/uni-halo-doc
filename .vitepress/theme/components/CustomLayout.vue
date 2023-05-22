
<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
const data = useData();

</script>

<template>
    <Layout>
        <template #aside-outline-after>
            <div class="recommend-container">
                <p class="item-title">扫码立即体验</p>
                <p class="item-desc">uni-halo小程序版本</p>
                <img src="https://docs.925i.cn/wx_qrcode.png" alt="uni-halo 开源博客小程序" data-fancybox="gallery">

								<img class="ad-image" src="https://img.925i.cn/file/d5971b7a6f68900ff2d5a.png" alt="广告位招租" data-fancybox="gallery">
            </div>
        </template>
    </Layout>
</template>
<style scoped lang="less">
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

.ad-image{
	margin-top: 12px;
}
</style>
