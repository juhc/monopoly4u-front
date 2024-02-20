<script setup>
import { ref, defineProps } from 'vue';

import FieldTemplate from './FieldTemplate.vue';

defineProps({
    title: String,
    rent: Number,
    category: String,
    stars: {
        type: [Number, null],
        default: null
    },
    width: {
        type: String,
        default: "80px"
    },
    height: {
        type: String,
        default: "160px"
    }
})

const title = ref('Test Property')
</script>

<template>
    <FieldTemplate :width="width" :height="height">
        <div class="text-lg font-mono font-bold self-center text-center">
            {{ title }}
        </div>
        <img :src="{image}" class="self-center">
    </FieldTemplate>
</template>