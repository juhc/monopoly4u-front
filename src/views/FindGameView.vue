<script setup>
import { ref } from "vue";
import { socket } from '@/socket';
import GameRoomsList from '../components/GameRoomsList.vue';
import BaseButton from "@/components/UI/BaseButton.vue";
import ModalCreateGame from "@/components/UI/ModalCreateGame.vue";
import router from "@/router";
import { useGameStore } from "@/stores/game";


const gamesList = ref([]);
const showModalCreateGame = ref(false);

const gameStore = useGameStore();

socket.on("games", (data) => {
    gamesList.value = data;
});

socket.on("add_game", (data) => {
    gamesList.value.push({
        room_id: data.room_id,
        players_total: data.players_total,
        users: [
            {
                user_id: data.user_id,
                balance: data.balance,
                current_cell: data.current_cell,
                username: data.username
            }
        ]
    })
})

socket.on("add_player", (data) => {
    const room = gamesList.value.find((room) => room.room_id === data.room_id);
    if (room) {
        const userExists = room.users.some((user) => user.user_id === data.user_id);
        if (!userExists) {
            room.users.push({
                user_id: data.user_id,
                balance: data.balance,
                current_cell: data.current_cell,
                username: data.username
            });
        }
    }
})

socket.on("delete_player", (data) => {
    const room = gamesList.value.find((room) => room.room_id === data.room_id);
    if (room) {
        const userIndex = room.users.findIndex((user) => user.user_id === data.user_id);
        if (userIndex !== -1) {
            room.users.splice(userIndex, 1);
        }
    }
})

socket.on("delete_game", (data) => {
    const roomIndex = gamesList.value.findIndex((room) => room.room_id === data.room_id);
    if (roomIndex !== -1) {
        gamesList.value.splice(roomIndex, 1);
    }
})

socket.on("room_teleport", (room_id) => {
    socket.emit("connect_to_game", room_id);
    router.push(`/game-room/${room_id}`);
})

socket.emit("get_games_list");
</script>

<template>
    <ModalCreateGame v-model:show="showModalCreateGame" />
    <div class="flex flex-col">
        <BaseButton class="w-[150px]" @click="() => showModalCreateGame = true">
            Создать игру
        </BaseButton>
        <GameRoomsList v-model:games="gamesList" />
    </div>
</template>