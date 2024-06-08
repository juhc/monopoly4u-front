<script setup>
import { useSize } from '@/utils/useSize';
import { useGameStore } from '@/stores/game';
import { PlayersColors } from '@/utils/usePlayerColor';
import { URLs } from "@/api/urls";

const name = defineModel('name');
const gameStore = useGameStore();

const SIZE = useSize();
</script>

<template>
    <div class="flex flex-col bg-gray-300" :style="{ width: `${SIZE.CORNER.SIDE}px`, height: `${SIZE.CORNER.SIDE}px` }">
        <div class="absolute flex flex-col gap-2 size-full justify-center items-center z-10">
            <template v-for="(player, index) in gameStore.playersList.value">
                <div v-if="player.current_field.name === name"
                    class="w-6 h-6 rounded-full border border-black"
                    :style="{ 'background-color': `${PlayersColors[index].hex}` }">

                </div>
            </template>
        </div>
        <slot>
            <img :src="`${URLs.game}/images/${name}.png`"
                class="self-center my-auto w-[80px] drop-shadow-[0_5px_4px_rgba(0,0,0,0.5)]">
        </slot>
    </div>
</template>