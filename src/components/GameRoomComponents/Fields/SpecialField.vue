<script setup>
import { useAttrs } from 'vue';

import FieldTemplate from './Templates/FieldTemplate.vue';

const attrs = useAttrs();
</script>

<template>
    <FieldTemplate :direction="attrs.direction">
        <div class="text-sm font-mono font-bold self-center text-center">
            Special Field
        </div>
    </FieldTemplate>
</template>