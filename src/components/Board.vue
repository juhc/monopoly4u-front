<script setup>
import { ref } from 'vue';

import PropertyField from './Fields/PropertyField.vue';
import CornerField from './Fields/CornerField.vue';
import ActionsHistory from './ActionsHistory.vue';
import SpecialField from './Fields/SpecialField.vue';


const test = ref('')
</script>


<template>
    <div class="relative w-[1000px] h-[1000px]">
        <!-- <ActionsHistory class="absolute inset-x-1/2 top-40" /> -->
        <CornerField></CornerField>
        <PropertyField test="test attr" :direction="test"></PropertyField>
        <SpecialField></SpecialField>
    </div>
</template>