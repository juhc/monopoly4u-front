<script setup>
import { ref } from 'vue';
import PropertyField from './Fields/PropertyField.vue'
import CornerTemplate from './Fields/Templates/CornerTemplate.vue';
import SpecialField from './Fields/SpecialField.vue';
import ActionsHistory from './ActionsHistory.vue';


</script>


<template>
    <div class="relative w-[695px] h-[695px]">
        <ActionsHistory class="absolute top-[100px] left-[100px] border-[#1f2937] border-2" />
        <CornerTemplate class="absolute top-0 left-0 border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[100px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[155px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[210px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[265px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[320px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[375px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[430px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[485px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute top-0 left-[540px] border-[#1f2937] border-2" />
        <CornerTemplate class="absolute top-0 right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[100px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[155px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[210px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[265px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[320px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[375px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[430px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[485px] right-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute top-[540px] right-0 border-[#1f2937] border-2" />
        <CornerTemplate class="absolute bottom-0 right-0 border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[100px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[155px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[210px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[265px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[320px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[375px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[430px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[485px] border-[#1f2937] border-2" />
        <PropertyField direction="vertical" class="absolute bottom-0 right-[540px] border-[#1f2937] border-2" />
        <CornerTemplate class="absolute bottom-0 left-0 border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[100px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[155px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[210px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[265px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[320px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[375px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[430px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[485px] border-[#1f2937] border-2" />
        <PropertyField direction="horizontal" class="absolute left-0 bottom-[540px] border-[#1f2937] border-2" />
    </div>
</template>