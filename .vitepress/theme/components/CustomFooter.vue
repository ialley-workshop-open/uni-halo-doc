<template>
    <div class="page-footer">
        <h1 class="name">uni-halo</h1>
        <div class="desc">—— 视尔唯一·心之所向·素履而往 ——</div>
        <div class="desc">颜值较高的一款 Halo1.x 的小程序源码，欢迎体验</div>
        <div class="img-list">
            <img class="qrcode" src="https://img.925i.cn/file/a0c1a95b49b5db7f78248.png" />
            <img class="qrcode" src="https://img.925i.cn/file/b83b9e79695779c4344f3.png" />
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped >
.page-footer {
    margin: 0 auto;
    max-width: 1150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 36px;
    gap: 16px 0;
}
.name {
    font-size: 32px;
    color: var(--vp-home-hero-name-color);
}
.desc {
    color: var(--vp-c-text-2);
    font-size: 16px;
}
.img-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px 24px;
}
.qrcode {
    width: 300px;
}
@media (max-width: 768px) {
    .img-list {
        padding: 0 24px;
    }
    .qrcode {
        width: 100%;
    }
}
</style>
