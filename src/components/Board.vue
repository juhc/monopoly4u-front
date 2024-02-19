<script setup>
import { ref } from 'vue';


const state = ref('фыва');
</script>


<template>
    Игровое поле {{ state }}
    <input v-model="state" class="shadow-md focusborder-2 focus:border-black" placeholder="test">
</template>