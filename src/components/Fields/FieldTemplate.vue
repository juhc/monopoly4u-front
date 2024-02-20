<script setup>
import { defineProps } from 'vue';

defineProps({
    image: String,
    backgroundColor: {
        type: String,
        default: "#fafafa"
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
</script>

<template>
    <div class="flex flex-col p-4" :style="{'background-color':backgroundColor, width:width, height:height}">
        <slot></slot>
    </div>
</template>