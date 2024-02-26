<script setup>
import { useForm } from 'vee-validate';
import { object, string, ref } from 'yup';

import BaseButton from './UI/BaseButton.vue'
import BaseInput from './UI/BaseInput.vue';
import { signUp } from '@/services/auth';


const schema = object({
    email: string().required().email(),
    username: string().required().trim(),
    password: string().required().min(8),
    password_confirm: string().required().min(8).oneOf([ref('password')])
})

const { handleSubmit } = useForm({
    validationSchema: schema
})

const onSubmit = handleSubmit((values) => signUp(values))
</script>

<template>
    <div class="flex flex-col bg-zinc-50 justify-center items-center w-96 p-6 rounded-md shadow-lg">
        <span class="text-3xl font-semibold">
            Регистрация
        </span>
        <form @submit="onSubmit" class="flex flex-col text-zinc-950 mt-3">
            <div class="flex flex-col">
                <BaseInput placeholder="Введите адрес эл. почты" name="email" type="text">
                    Электронная почта
                </BaseInput>
            </div>
            <hr class="mt-3">
            <div class="flex flex-col">
                <BaseInput placeholder="Введите имя пользователя" name="username" type="text">
                    Никнейм
                </BaseInput>
            </div>
            <hr class="mt-3">
            <div>
                <BaseInput placeholder="Введите пароль" name="password" type="password">Пароль
                </BaseInput>
            </div>
            <hr class="mt-3">
            <div>
                <BaseInput placeholder="Повторите пароль" name="password_confirm" type="password">Подтверждение пароля
                </BaseInput>
            </div>
            <div class="flex flex-row justify-center mt-3">
                <BaseButton type="submit" class="w-full" :style="{ height: '35px' }">
                    Зарегистрироваться
                </BaseButton>
            </div>
        </form>
    </div>
</template>