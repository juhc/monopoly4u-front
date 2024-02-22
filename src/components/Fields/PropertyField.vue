<script setup>
import { ref, useAttrs } from 'vue';


import FieldTemplate from './Templates/FieldTemplate.vue';


defineProps({
    title: String,
    rent: Number,
    category: String,
    stars: {
        type: [Number, null],
        default: null
    }
})

const attrs = useAttrs()

const title = ref('Test Property')
</script>

<template>
    <FieldTemplate :direction="attrs.direction">
        <div class="text-sm font-mono font-bold self-center text-center">
            {{ title }}
        </div>
        <img :src="{ image }" class="self-center">
    </FieldTemplate>
</template>