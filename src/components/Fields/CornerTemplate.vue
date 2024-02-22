<script setup>
import { defineProps } from 'vue';


defineProps({
    image: String
})
</script>

<template>
    <div class="flex flex-col w-[100px] h-[100px] p-4 bg-neutral-50">
        <slot>
            <div class="text-lg font-mono font-bold self-center text-center">
                Corner Field
            </div>
            <img :src="{ image }" class="self-center">
        </slot>
    </div>
</template>