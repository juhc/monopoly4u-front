<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
    name: String,
    type: String,
    placeholder: String,
});

const { value, errorMessage } = useField(() => props.name, null, {
    validateOnValueUpdate: false
})
</script>

<template>
    <div class="flex flex-col">
        <label :for="name" class="text-base">
            <slot></slot>
        </label>
        <input :placeholder="placeholder" :type="type" v-model="value"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md">
        <span v-if="errorMessage" class="text-red-600">
            *{{ errorMessage }}
        </span>
    </div>
</template>