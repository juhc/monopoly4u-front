<script setup>
import BaseButton from './UI/BaseButton.vue';
import { socket } from '@/socket';
import { useAuthStore } from "@/stores/auth";


const authStore = useAuthStore();
const games = defineModel('games');

const checkUserInRoom = (game) => {
    return game.users.some((user) => user.user_id === authStore.userInfo.id)
}
</script>

<template>
    Комнаты
    <div class="flex flex-col">
        <div class="flex gap-x-6" v-for="game in games" :key="game.room_id">
            <div v-for="index in Array(game.players_total).keys()">
                <div v-if="game.users[index]">
                    <img src="/player.png" class="size-28">
                    <div>{{ game.users[index].username }}</div>
                </div>
                <img v-else src="/add.png" class="size-28 hover:cursor-pointer">
            </div>
            <BaseButton v-if="!checkUserInRoom(game)"
                @click="() => { socket.emit('disconnect_game'); socket.emit('join_game', game.room_id) }"
                class="w-[150px] h-[80px]">Присоединиться
            </BaseButton>
            <BaseButton v-else @click="() => { socket.emit('disconnect_game'); }"
                class="w-[150px] h-[80px] bg-red-500 hover:bg-red-600">Отключиться
            </BaseButton>
        </div>
    </div>
</template>