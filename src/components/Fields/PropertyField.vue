<script setup>
import { ref, defineProps, useAttrs } from 'vue';

import FieldTemplate from './FieldTemplate.vue';


const attr = useAttrs();
console.log(attr.test)

defineProps({
    title: String,
    rent: Number,
    category: String,
    stars: {
        type: [Number, null],
        default: null
    },
    direction: {
        type: String,
        default: 'vertical',
        validator(value, props) {
            return ['vertical', 'horizontal'].includes(value)
        }
    }
})

const title = ref('Test Property')
</script>

<template>
    <FieldTemplate :direction="direction">
        <div class="text-lg font-mono font-bold self-center text-center">
            {{ title }}
        </div>
        <img :src="{image}" class="self-center">
    </FieldTemplate>
</template>