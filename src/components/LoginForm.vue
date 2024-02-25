<script setup>
import { ref } from 'vue';

import BaseButton from './UI/BaseButton.vue'
import BaseInput from './UI/BaseInput.vue';
import { signIn } from "../services/auth.js"


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
                <BaseInput placeholder="Введите адрес эл. почты" v-model="email" name="email" type="text" />
            </div>
            <hr class="mt-3">
            <div>
                <label for="password" class="text-base">Пароль</label>
                <BaseInput placeholder="Введите пароль" v-model="password" name="password" type="password" />
            </div>
            <div class="flex flex-row mt-3">
                <BaseButton :onClick="signIn">
                    Войти
                </BaseButton>
                <a href="#" class="m-2 text-sky-500 hover:text-sky-600">Забыли пароль?</a>
            </div>
            <hr class="mt-3">
            <div class="flex flex-row justify-center mt-3">
                <RouterLink :to="{ name: 'sign-up' }" class="text-sky-500 hover:text-sky-600">
                    Регистрация
                </RouterLink>
            </div>
        </form>
    </div>
</template>