<script setup>
import { ref, watch, reactive } from 'vue';

import BaseButton from './UI/BaseButton.vue'
import BaseInput from './UI/BaseInput.vue';
import { signIn } from "../services/auth.js"
import { validateEmail } from '@/utils/validators';


const userData = reactive({
    email: "",
    password: ""
})


const errorEmail = ref('')

watch(userData.email, () => {
    if(email.value)
        errorEmail.value = validateEmail(userData.email) ? null : "Некоректный адрес электронной почты"
})
</script>

<template>
    <div class="flex flex-col bg-zinc-50 justify-center items-center w-96 p-6 rounded-md shadow-lg">
        <span class="text-3xl font-semibold">
            Авторизация
        </span>
        <h1>{{ errorEmail }}</h1>
        <form @submit.prevent="" class="flex flex-col text-zinc-950 mt-3">
            <div class="flex flex-col">
                <label for="email" class="text-base">Электронная почта</label>
                <BaseInput placeholder="Введите адрес эл. почты" v-model="userData.email" name="email" type="email" />
            </div>
            <hr class="mt-3">
            <div>
                <label for="password" class="text-base">Пароль</label>
                <BaseInput placeholder="Введите пароль" v-model="userData.password" name="password" type="password" minLength="8" />
            </div>
            <div class="flex flex-row mt-3">
                <BaseButton type="submit">
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