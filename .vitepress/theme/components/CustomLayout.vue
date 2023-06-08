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
                <p class="item-desc">uni-halo小程序版本（在线体验）</p>
                <img class="ad-image" src="https://img.925i.cn/file/a0c1a95b49b5db7f78248.png" alt="小莫唐尼（小程序体验）" data-fancybox="gallery">
                <img class="ad-image" src="https://img.925i.cn/file/b83b9e79695779c4344f3.png" alt="官方交流群（QQ）" data-fancybox="gallery">
                <img class="ad-image" src="https://img.925i.cn/file/a30bc81fbb998c68728cd.png" alt="官方交流群（微信）" data-fancybox="gallery">
                <img class="ad-image" src="https://img.925i.cn/file/d5971b7a6f68900ff2d5a.png" alt="广告位招租" data-fancybox="gallery">
            </div>
        </template>
        <template #not-found>
            <div class="NotFound">
                <p class="code">404</p>
                <h1 class="title">啊偶，页面找不到了</h1>
                <div class="divider"></div>
                <blockquote class="quote">您访问的地址不存在或者已经被删除，如果您有需要，请发送邮件到 <a href="mailto:studio@925i.cn">studio@925i.cn</a>获取支持. </blockquote>
                <div class="action"><a class="link" href="/" aria-label="返回主页"> 返回主页 </a></div>
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

.ad-image {
    margin-top: 12px;
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
</style>
