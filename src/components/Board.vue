<script setup>
import { ref } from 'vue';

import PropertyField from './Fields/PropertyField.vue';
import CornerField from './Fields/CornerField.vue';
import ActionsHistory from './ActionsHistory.vue';

const test = ref('horizontal')
</script>


<template>
    <div class="relative w-[1000px] h-[1000px]">
        <!-- <ActionsHistory class="absolute inset-x-1/2 top-40" /> -->
        <div class="flex flex-row gap-x-1 absolute left-20">
            <CornerField></CornerField>
            <PropertyField :direction="test"></PropertyField>
        </div>
    </div>
</template>