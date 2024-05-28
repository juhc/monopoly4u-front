<script setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

import BaseButton from './UI/BaseButton.vue';
import BaseInput from './UI/BaseInput.vue';
import { signIn } from '@/api/auth'
import { useAuthStore } from '@/stores/auth'
import router from '@/router';

const schema = object({
    email: string().required().email(),
    password: string().required().min(8)
})

const { handleSubmit } = useForm({
    validationSchema: schema,
}, {
    validateOnValueUpdate: false
})

const authStore = useAuthStore();

const onSubmit = handleSubmit(async (values, { resetForm }) => {
    await signIn({
        email: values.email,
        password: values.password
    });
    if (authStore.isAuthError) {
        alert(authStore.authErrorMessage);
        resetForm();
    } else {
        router.push('/user')
    }
})
</script>

<template>
    <div class="flex flex-col bg-zinc-50 justify-center items-center w-96 p-6 rounded-md shadow-lg">
        <span class="text-3xl font-semibold">
            Авторизация
        </span>
        <form @submit="onSubmit" :validation-schema="schema" class="flex flex-col text-zinc-950 mt-3">
            <div class="flex flex-col">
                <BaseInput name="email" type="text" placeholder="Введите адрес эл. почты">Электронная почта</BaseInput>
            </div>
            <hr class="mt-3">
            <div class="flex flex-col">
                <BaseInput name="password" type="password" placeholder="Введите пароль">Введите пароль</BaseInput>
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