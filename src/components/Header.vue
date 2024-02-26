<script setup>
import { useRouter } from 'vue-router';

import BaseButton from './UI/BaseButton.vue';


const router = useRouter();
</script>

<template>
    <header class="w-full min-w-[1000px] justify-center h-20 bg-transparent mb-16">
        <nav class="flex items-center text-sm h-20 mx-auto max-w-[1000px] text-zinc-50 font-medium">
            <RouterLink :to="{name:'home'}"><div class="bg-indigo-500 h-20 w-[150px]">LOGO</div></RouterLink>
            <div
                class="bg-zinc-50 ml-5 hover:shadow-lg flex justify-center items-center font-medium uppercase cursor-pointer hover:bg-zinc-200 transition duration-150 ease-in-out text-gray-800 rounded-md w-28 h-10">
                <span>Поиск игр</span></div>
            <div class="grow w-9/12 flex justify-end">
                <BaseButton :onClick="() => router.push({name:'sign-in'})" class="h-10 uppercase hover:shadow-lg">Войти</BaseButton>
            </div>
        </nav>
    </header>
</template>