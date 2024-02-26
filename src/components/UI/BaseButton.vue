<script setup>
defineProps({
    onClick: Function,
    type: String
})
</script>

<template>
    <template v-if="type == 'submit'">
        <button type="submit"
            class="flex justify-center items-center bg-green-500 text-zinc-50 font-semibold rounded-md w-20 hover:cursor-pointer hover:bg-green-600 transition duration-150 ease-in-out">
            <slot></slot>
        </button>
    </template>
    <template v-else>
        <button @click="onClick"
            class="flex justify-center items-center bg-green-500 text-zinc-50 font-semibold rounded-md w-20 hover:cursor-pointer hover:bg-green-600 transition duration-150 ease-in-out">
            <slot></slot>
        </button>
    </template>
</template>