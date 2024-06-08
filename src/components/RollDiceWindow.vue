<script setup>
import { useSize } from '@/utils/useSize.js';


const SIZE = useSize();
const diceInfo = defineModel('diceInfo', {
    default: null
});
</script>

<template>
    <div v-if="!!diceInfo" class="backdrop-blur-sm flex flex-col justify-center"
        :style="{ width: `${SIZE.ACTIONS_HISTORY.SIDE}px`, height: `${SIZE.ACTIONS_HISTORY.SIDE}px` }">
        <div class="flex flex-row mx-auto gap-3">
            <img class="w-20" :src="`/Dice${diceInfo.cubes[0]}.png`">
            <img class="w-20" :src="`/Dice${diceInfo.cubes[1]}.png`">
        </div>
    </div>
</template>