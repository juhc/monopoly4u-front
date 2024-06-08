<script setup>
import Header from './components/Header.vue';
import { useAuthStore } from "@/stores/auth";


const authStore = useAuthStore();
authStore.checkUserAuth();
</script>

<template>
  <Header />
  <div class="max-w-5xl mx-auto">
    <RouterView />
  </div>
</template>
