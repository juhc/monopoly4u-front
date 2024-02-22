<script setup>
import { ref } from 'vue';
import PropertyField from './Fields/PropertyField.vue'
import CornerTemplate from './Fields/Templates/CornerTemplate.vue';
import SpecialField from './Fields/SpecialField.vue';
import ActionsHistory from './ActionsHistory.vue';


</script>


<template>
    <div class="relative w-[920px] h-[920px]">
        <ActionsHistory class="absolute top-[100px] left-[100px] border-[#1f2937] border-2" />
        <CornerTemplate class="absolute top-0 left-0 border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[100px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[180px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[260px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[340px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[420px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[500px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[580px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[660px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[740px] border-[#1f2937] border-2" />
        <CornerTemplate class="absolute top-0 right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[100px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[180px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[260px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[340px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[420px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[500px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[580px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[660px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[740px] right-0 border-[#1f2937] border-2" />
        <CornerTemplate class="absolute bottom-0 right-0 border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[100px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[180px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[260px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[340px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[420px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[500px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[580px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[660px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[740px] border-[#1f2937] border-2" />
        <CornerTemplate class="absolute bottom-0 left-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[100px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[180px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[260px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[340px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[420px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[500px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[580px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[660px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[740px] border-[#1f2937] border-2" />
    </div>
</template>