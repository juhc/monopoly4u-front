<script setup>
import { ref } from 'vue';

import PropertyField from './Fields/PropertyField.vue';
import CornerField from './Fields/CornerField.vue';
import ActionsHistory from './ActionsHistory.vue';


</script>


<template>
    <div class="relative w-[1000px] h-[1000px]">
        <ActionsHistory class="absolute inset-x-1/2 top-40" />
        <div class="flex flex-row gap-x-1 absolute left-20">
            <CornerField></CornerField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
        </div>
        <div class="flex flex-col gap-y-1 absolute top-40">
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <CornerField></CornerField>
        </div>
        <div class="flex flex-col gap-y-1 absolute left-[900px] top-40">
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <PropertyField :width="'160px'" :height="'80px'"></PropertyField>
            <CornerField></CornerField>
        </div>
        <div class="flex flex-row gap-x-1 absolute left-20 top-[1000px]">
            <CornerField></CornerField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
            <PropertyField></PropertyField>
        </div>
    </div>
</template>