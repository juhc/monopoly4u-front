<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    image: String,
    backgroundColor: {
        type: String,
        default: "#fafafa"
    },
    direction: {
        type: String,
        default: 'vertical',
        validator(value, props) {
            return ['vertical', 'horizontal'].includes(value)
        }
    }
})

const size = computed(() => {
    return props.direction == 'vertical' ? { width: "80px", height: "100px" } : { width: "100px", height: "80px" };
})
</script>

<template>
    <div class="flex flex-col p-4" :style="{ 'background-color': backgroundColor, width: size.width, height: size.height }">
        <slot>
            
        </slot>
    </div>
</template>