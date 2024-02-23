<script setup>
import { ref } from 'vue';


const login = ref('');
const password = ref('');
</script>

<template>
    <form class="flex flex-col text-zinc-50">
        <div>
            <label for="login">Электронная почта</label>
            <input v-model="login" class="text-zinc-950" name="login" type="email">
        </div>
        <div>
            <label>Пароль</label>
            <input v-model="password" class="text-zinc-950" name="password" type="password">
        </div>
        <div>
            <input value="Войти" type="submit">
            <a href="#">Забыли пароль?</a>
        </div>
    </form>
</template>