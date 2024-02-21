<script setup>
import { DefineProps } from 'vue';

import FieldTemplate from './FieldTemplate.vue';


defineProps({
    direction: {
        type: String,
        default: 'vertical',
        validator(value, props) {
            return ['vertical', 'horizontal'].includes(value)
        }
    }
})
</script>

<template>
    <FieldTemplate>

    </FieldTemplate>
</template>