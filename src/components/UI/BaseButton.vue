<script setup>
defineProps({
    onClick: Function
})
</script>

<template>
    <div
        @click="onClick"
        class="flex justify-center items-center bg-green-500 text-zinc-50 font-semibold rounded-md w-20 hover:cursor-pointer hover:bg-green-600 transition duration-150 ease-in-out">
        <slot></slot>
    </div>
</template>