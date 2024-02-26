<script setup>
import { ref, reactive } from 'vue';

import BaseButton from './UI/BaseButton.vue'
import BaseInput from './UI/BaseInput.vue';


const userData = reactive({
    email: "",
    username: "",
    password: "",
    password_confirm: ""
})
</script>

<template>
    <div class="flex flex-col bg-zinc-50 justify-center items-center w-96 p-6 rounded-md shadow-lg">
        <span class="text-3xl font-semibold">
            Регистрация
        </span>
        <form @submit.prevent=""  class="flex flex-col text-zinc-950 mt-3">
            <div class="flex flex-col">
                <BaseInput placeholder="Введите адрес эл. почты" v-model="userData.email" name="email" type="text">Электронная почта
                </BaseInput>
            </div>
            <hr class="mt-3">
            <div class="flex flex-col">
                <BaseInput placeholder="Введите имя пользователя" v-model="userData.username" name="username" type="text">Никнейм
                </BaseInput>
            </div>
            <hr class="mt-3">
            <div>
                <BaseInput placeholder="Введите пароль" v-model="userData.password" name="password" type="password">Пароль
                </BaseInput>
            </div>
            <hr class="mt-3">
            <div>
                <BaseInput placeholder="Повторите пароль" v-model="userData.password_confirm" name="password_confirm"
                    type="password">Подтверждение пароля</BaseInput>
            </div>
            <div class="flex flex-row justify-center mt-3">
                <BaseButton type="submit" class="w-full" :style="{ height: '35px' }">
                    Зарегистрироваться
                </BaseButton>
            </div>
        </form>
    </div>
</template>