<script setup>
import { defineProps } from 'vue';

import FieldTemplate from './FieldTemplate.vue';


defineProps({
    image: String
})
</script>

<template>
    <FieldTemplate>
        <img :src="{ image }" class="self-center">
    </FieldTemplate>
</template>