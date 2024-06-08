<script setup>
import { PlayersColors } from "@/utils/usePlayerColor";
import { useGameStore } from "@/stores/game";


const gameStore = useGameStore();
</script>

<template>
    <div v-if="!!gameStore.currentPlayer" class="flex flex-col gap-2 mr-10 w-[200px]">
        <div v-for="(player, index) in gameStore.playersList.value" :key="player.name"
            class="flex flex-col font-bold p-3 text-cyan-50 rounded-md text-center content-center"
            :class="gameStore.currentPlayer.value.name === player.name ? PlayersColors[index].tailwind : 'bg-[#29364a]'">
            <div class="rounded-full bg-[url('/player.png')] self-center size-28 bg-contain border-8"
                :style="{ 'border-color': PlayersColors[index].hex }"></div>
            <span>{{ player.name }}</span>
            <span class="text-xl"> {{ player.balance }}</span>
        </div>
    </div>
</template>