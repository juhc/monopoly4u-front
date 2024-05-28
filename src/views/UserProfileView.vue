<script setup>
import { watch } from "vue";
import { getUserProfile } from "@/api/auth";
import { useAuthStore } from '@/stores/auth';


const authStore = useAuthStore();

getUserProfile();
</script>

<template>
    <div>
        <div class="flex gap-12">
            <div class="rounded-full bg-[url('/player.png')] size-40 bg-contain border-8 border-green-500">
            </div>
            <div class="flex flex-col">
                <div class="text-4xl font-bold text-gray-400">
                    {{ authStore.userInfo.username }}
                </div>
                <div class="text-xl text-gray-500">
                    {{ authStore.userInfo.email }}
                </div>
            </div>
        </div>
    </div>
</template>