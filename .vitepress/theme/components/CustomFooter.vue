<template>
    <div class="page-footer">
        {{title}}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('你好');
</script>

<style scoped >
.page-footer {
    margin: 0 auto;
    max-width: 1150px;
}
</style>
