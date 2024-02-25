<script setup>
defineProps({
    name: String,
    type: String,
    placeholder: String,
    modelValue: String
})
</script>

<template>
    <div class="flex flex-col">
        <label :for="name" class="text-base">
            <slot></slot>
        </label>
        <input :name="name" :placeholder="placeholder" :type="type" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md">
    </div>
</template>