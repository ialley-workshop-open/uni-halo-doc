<template>
    <div class="using-examples">
        <div class="using-examples_head">
            <h1 class="using-examples_head__title">使用案例</h1>
            <p class="using-examples_head__subtitle">得益于免费开源，以下站长都在使用</p>
        </div>
        <ul class="using-examples_list">
            <li class="using-examples_list__item" v-for="(item,index) in usingExamples" :key="index" :title="item.name">
                <a :href="item.link" target="_blank">
                    <div class="using_image">
                        <img :src="item.image" :alt="item.name" data-fancybox="gallery">
                    </div>
                    <div class="using_name">{{item.name}}</div>
                    <div class="using_nickname">（站长：{{item.nickname}}）</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const usingExamples = ref([
    {
        name: '小莫唐尼',
        image: 'https://img.925i.cn/file/9938903c5c66ccc943034.png',
        link: 'javascript:void(0);',
        nickname: '小莫唐尼'
    },
    {
        name: '小志IT知识库',
        image: 'https://img.925i.cn/file/afd433249706eae10882f.png',
        link: 'javascript:void(0);',
        nickname: '小志'
    },
    {
        name: '小陈子的站点',
        image: 'https://img.925i.cn/file/288e41d4abdfd2fc736c8.png',
        link: 'javascript:void(0);',
        nickname: '小陈子'
    },
    {
        name: '鲨鱼辣椒的Blog',
        image: 'https://img.925i.cn/file/18f946732b29926e9d2ab.png',
        link: 'javascript:void(0);',
        nickname: '鲨鱼辣椒'
    },
    {
        name: '柳意梧情博客',
        image: 'https://img.925i.cn/file/7c7f9e7badc43cea5d976.png',
        link: 'javascript:void(0);',
        nickname: 'liuyiwuqing'
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
            // width: 23.9%;
            width: 18.8%;
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
            &:hover {
                transform: translateY(-4px);
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
                // color: var(--vp-home-hero-name-color);
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
