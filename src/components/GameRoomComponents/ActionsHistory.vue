<script setup>
import { useSize } from '@/utils/useSize';
import { useGameStore } from '@/stores/game';
import { watch, ref } from 'vue';

const SIZE = useSize()

const gameStore = useGameStore();
const historyContainer = ref(null);

watch(gameStore.history, (newValue, oldValue) => {
    const container = historyContainer.value;
    container.scrollTop = container.scrollHeight;
})
</script>

<template>
    <div class="bg-[#1f2937]"
        :style="{ width: `${SIZE.ACTIONS_HISTORY.SIDE}px`, height: `${SIZE.ACTIONS_HISTORY.SIDE}px` }">
        <div ref="historyContainer" class="flex text-zinc-300 p-3 font-bold flex-col overflow-y-auto h-full scrollbar-hide">
            <span v-for="item in gameStore.history">
                {{ item }}
            </span>
        </div>
    </div>
</template>