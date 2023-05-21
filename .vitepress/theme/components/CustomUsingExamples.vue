<template>
    <div class="using-examples">
        <div class="using-examples_head">
            <h1 class="using-examples_head__title">使用案例</h1>
            <p class="using-examples_head__subtitle">以下使用案例排名不分前后</p>
        </div>
        <ul class="using-examples_list">
            <li class="using-examples_list__item" v-for="(item,index) in usingExamples" :key="index" :title="item.name">
                <div class="using_image">
                    <img :src="item.image" :alt="item.name">
                </div>
                <div class="using_name">{{item.name}}</div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const usingExamples = ref([
    {
        name: '小莫唐尼',
        image: 'https://img.925i.cn/file/9938903c5c66ccc943034.png'
    },
    {
        name: '小陈子的站点',
        image: 'https://img.925i.cn/file/288e41d4abdfd2fc736c8.png'
    },
    {
        name: '鲨鱼辣椒的Blog',
        image: 'https://img.925i.cn/file/18f946732b29926e9d2ab.png'
    },
    {
        name: '柳意梧情博客',
        image: 'https://img.925i.cn/file/7c7f9e7badc43cea5d976.png'
    }
]);
</script>

<style scoped lang="less">
.using-examples {
    width: 100%;
    margin: 0 auto;
    max-width: 1150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 56px;
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
            color: var(--vp-home-hero-name-color);
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
            width: 23.9%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--vp-c-bg-soft);
            background-color: var(--vp-c-bg-soft);
            transition: all 0.5s ease-in-out;
            box-sizing: border-box;
            padding: 24px;
            border-radius: 12px;
            &:hover {
                transform: translateY(-3px);
            }
            .using_image {
                width: 100%;
                margin-bottom: 24px;
                border-radius: 50%;
                box-sizing: border-box;
                overflow: hidden;
                > img {
                    width: 100%;
                    height: 100%;
                }
            }
            .using_name {
                font-size: 20px;
                font-weight: 600;
                text-align: center;
                line-height: 22px;
                color: var(--vp-home-hero-name-color);
            }
        }
    }
}

/* iPad */
@media (max-width: 1368px) {
    .using-examples_list {
        padding: 0 24px;
        &__item {
            width: 30%;
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
        padding: 0 48px;
        &__item {
            width: 100%;
        }
    }
}
/* phone */
@media (max-width: 500px) {
    .using-examples_list {
        padding: 0 24px;
        &__item {
            width: 100%;
        }
    }
}
</style>
