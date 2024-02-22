<script setup>
import { useSize } from '@/utils/useSize';

defineProps({
    image: String
})

const SIZE = useSize();
</script>

<template>
    <div class="flex flex-col p-4 bg-neutral-50" :style="{width: `${SIZE.CORNER.SIDE}px`, height: `${SIZE.CORNER.SIDE}px`}">
        <slot>
            <div class="text-lg font-mono font-bold self-center text-center">
                Corner Field
            </div>
            <img :src="{ image }" class="self-center">
        </slot>
    </div>
</template>