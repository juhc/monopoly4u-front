<script setup>
import { useSize } from '@/utils/useSize.js';


const SIZE = useSize();
</script>

<template>
    <div class="bg-gray-200 rounded-xl flex overflow-hidden flex-col place-items-center border-[#1f2937] border-2 justify-between"
        :style="{ width: `${SIZE.ACTIONS_HISTORY.SIDE}px`, height: `${SIZE.ACTIONS_HISTORY.SIDE / 5}px` }">
        <div class="flex flex-col my-auto">
            <slot name="text"></slot>
        </div>
        <div class="w-full">
            <slot name="action"></slot>

        </div>
    </div>
</template>