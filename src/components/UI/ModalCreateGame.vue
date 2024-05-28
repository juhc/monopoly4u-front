<script setup>
import { ref } from 'vue';
import BaseButton from "./BaseButton.vue";
import { useAuthStore } from "@/stores/auth";
import { socket } from '@/socket';


const authStore = useAuthStore();
const show = defineModel('show');
const playersCount = ref(2);

const createGame = () => {
    socket.emit('disconnect_game');
    socket.emit("create_game", playersCount.value);
    show.value = false;
}
</script>

<template>
    <div @click.stop="() => show = false" v-if="show"
        class="fixed flex backdrop-blur-sm justify-center z-[1] left-0 top-0 size-full bg-gray-950/50">
        <div @click.stop class="flex flex-col p-4 rounded-md w-[400px] my-auto h-[400px] bg-white">
            <div class="self-center text-2xl font-bold text-gray-800">Создание игры</div>
            <div class="flex mt-10">
                <div class="text-gray-800 text-xl">Количество игроков:</div>
                <div class="flex ml-auto bg-gray-400 rounded-md">
                    <div class="w-8 rounded-md flex justify-center hover:cursor-pointer"
                        :class="[playersCount === count ? 'bg-green-500' : 'bg-transparent']"
                        @click="() => playersCount = count" v-for="count in Array.from({ length: 4 }, (v, i) => i + 2)">
                        {{ count }}
                    </div>
                </div>
            </div>
            <BaseButton @click="createGame" class="w-[150px] self-center mt-20">СОЗДАТЬ ИГРУ</BaseButton>
        </div>
    </div>
</template>