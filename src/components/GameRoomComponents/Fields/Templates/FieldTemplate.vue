<script setup>
import { computed } from 'vue';
import { useSize } from '@/utils/useSize';
import { useGameStore } from '@/stores/game';
import { PlayersColors } from '@/utils/usePlayerColor';


const props = defineProps({
    image: String,
    backgroundColor: {
        type: String,
        default: 'rgb(209 213 219 / var(--tw-bg-opacity))'
    },
    direction: {
        type: String,
        default: 'vertical',
        validator(value, props) {
            return ['vertical', 'horizontal'].includes(value)
        }
    },
    name: {
        type: String
    },
    id: {

    },
})

const gameStore = useGameStore();
const SIZE = useSize();

const getSizeByDirection = computed(() => {
    return props.direction == 'vertical' ? { width: `${SIZE.FIELD.WIDTH}px`, height: `${SIZE.FIELD.HEIGHT}px` } : { width: `${SIZE.FIELD.HEIGHT}px`, height: `${SIZE.FIELD.WIDTH}px` };
})
</script>

<template>
    <div class="flex flex-col p-0 justify-center bg-neutral-500"
        :style="{ 'background-color': backgroundColor, width: getSizeByDirection.width, height: getSizeByDirection.height }">
        <div class="absolute flex gap-2 size-full justify-center items-center z-10" :class="[direction === 'vertical' ? 'flex-col' : 'flex-row']">
            <template v-for="(player, index) in gameStore.playersList.value">
                <div v-if="player.current_field.name === name && player.current_field.id === id" class="w-6 h-6 rounded-full border border-black"
                    :style="{ 'background-color': `${PlayersColors[index].hex}` }">

                </div>
            </template>
        </div>
        <slot>

        </slot>
    </div>
</template>