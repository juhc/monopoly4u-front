<script setup>
import { ref } from 'vue';

import BaseButton from './UI/BaseButton.vue'
import signIn from "../services/auth.js"


const email = ref('');
const password = ref('');
</script>

<template>
    <div class="flex flex-col bg-zinc-50 justify-center items-center w-96 p-6 rounded-md shadow-lg">
        <span class="text-3xl font-semibold">
            Авторизация
        </span>
        <form class="flex flex-col text-zinc-950 mt-3">
            <div class="flex flex-col">
                <label for="email" class="text-base">Электронная почта</label>
                <input v-model="email"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
                    name="email" type="email" placeholder="Введите адрес эл. почты">
            </div>
            <hr class="mt-3">
            <div>
                <label for="password" class="text-base">Пароль</label>
                <input v-model="password"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
                    name="password" type="password" placeholder="Введите пароль">
            </div>
            <div class="flex flex-row mt-3">
                <BaseButton :onClick="signIn">
                    Войти
                </BaseButton>
                <a href="#" class="m-2 text-sky-500 hover:text-sky-600">Забыли пароль?</a>
            </div>
        </form>
    </div>
</template>