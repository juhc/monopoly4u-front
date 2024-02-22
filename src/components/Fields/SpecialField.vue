<script setup>
import FieldTemplate from './Templates/FieldTemplate.vue';

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
        Special Field
    </FieldTemplate>
</template>