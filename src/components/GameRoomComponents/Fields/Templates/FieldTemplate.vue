<script setup>
import { computed } from 'vue';
import { useSize } from '@/utils/useSize';

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
const SIZE = useSize();

const getSizeByDirection = computed(() => {
    return props.direction == 'vertical' ? { width: `${SIZE.FIELD.WIDTH}px`, height: `${SIZE.FIELD.HEIGHT}px` } : { width: `${SIZE.FIELD.HEIGHT}px`, height: `${SIZE.FIELD.WIDTH}px` };
})
</script>

<template>
    <div class="flex flex-col p-4"
        :style="{ 'background-color': backgroundColor, width: getSizeByDirection.width, height: getSizeByDirection.height }">
        <slot>

        </slot>
    </div>
</template>