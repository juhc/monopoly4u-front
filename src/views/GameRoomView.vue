<script setup>
import Board from '@/components/GameRoomComponents/Board.vue';
import PlayersList from '@/components/GameRoomComponents/PlayersList.vue';
import { socket } from '@/socket';
import { reactive, ref } from 'vue';
import { useGameStore } from "@/stores/game";


const gameStore = useGameStore();

const fieldsList = ref([]);

socket.on("get_game_info", (data) => {
    fieldsList.value = data.fields;
    if (!!data.current_player) {
        gameStore.currentPlayer.value = data.current_player;
        gameStore.history.push(`Ход игрока - ${gameStore.currentPlayer.value.name}`);
    }
    gameStore.playersList.value = data.players;
})

socket.on("player_added", (data) => {
    gameStore.playersList.value = data.players;
})

socket.on("start_game", (data) => {
    gameStore.playersList.value = data.players;
    gameStore.currentPlayer.value = data.current_player;
})

socket.on("update_game", (data) => {
    gameStore.currentPlayer.value = data.current_player;
    gameStore.playersList.value = data.players;
    gameStore.history.push(data.description)
    gameStore.history.push(`Ход игрока - ${gameStore.currentPlayer.value.name}`)
})
</script>

<template>
    <div class="flex justify-center">
        <PlayersList />
        <Board v-model:fields="fieldsList" />
    </div>
</template>