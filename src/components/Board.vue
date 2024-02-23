<script setup>
import { ref, computed, reactive } from 'vue';

import PropertyField from './Fields/PropertyField.vue'
import CornerTemplate from './Fields/Templates/CornerTemplate.vue';
import SpecialField from './Fields/SpecialField.vue';
import ActionsHistory from './ActionsHistory.vue';
import { useSize } from '@/utils/useSize.js';
import { useOrderedFields } from "@/utils/useOrderedFields.js"
import { Direction } from "@/utils/useLine.js"

const fields = ref(useOrderedFields());
const SIZE = useSize();

function getIndentation(index) {
    let elementOrderInLine = index % SIZE.ELEMENTS_IN_LINE;

    if (elementOrderInLine == 0) {
        return 0
    }
    if (elementOrderInLine == 1) {
        return SIZE.CORNER.SIDE
    }

    return SIZE.CORNER.SIDE + SIZE.FIELD.WIDTH * (elementOrderInLine - 1);
}

function getLineIndex(index) {
    return Math.floor(index / SIZE.ELEMENTS_IN_LINE)
}

function getComponentPosition(index) {
    let lineIndex = getLineIndex(index);
    let nextLineIndex = (getLineIndex(index) + 1) % Object.keys(Direction).length;
    let indentation = getIndentation(index);

    let nextDirection = Direction[nextLineIndex];
    let currentDirection = Direction[lineIndex]

    let map = new Map();

    map.set(nextDirection, "0px");
    map.set(currentDirection, `${indentation}px`)

    return Object.fromEntries(map)
}

function getFieldDirectionByLineIndex(index) {
    let lineIndex = getLineIndex(index);

    return lineIndex % 2 == 1 ? "horizontal" : "vertical"
}

console.log(fields)
</script>

<template>
    <div class="relative" :style="{ width: `${SIZE.BOARD.SIDE}px`, height: `${SIZE.BOARD.SIDE}px` }">
        <ActionsHistory class="absolute border-[#1f2937] border-2"
            :style="{ left: `${SIZE.CORNER.SIDE}px`, top: `${SIZE.CORNER.SIDE}px` }" />

        <template v-for="(field, index) in fields">

            <PropertyField v-if="field.component == 'property'" class="absolute border-[#1f2937] border-2"
                :style="getComponentPosition(index)" :direction="getFieldDirectionByLineIndex(index)" />

            <SpecialField v-else-if="field.component == 'special'" class="absolute border-[#1f2937] border-2"
                :style="getComponentPosition(index)" :direction="getFieldDirectionByLineIndex(index)" />

            <CornerTemplate v-else class="absolute border-[#1f2937] border-2" :style="getComponentPosition(index)" />

        </template>
    </div>
</template>