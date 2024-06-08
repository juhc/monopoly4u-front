<script setup>
import { socket } from '@/socket';
import PropertyField from './Fields/PropertyField.vue'
import CornerTemplate from './Fields/Templates/CornerTemplate.vue';
import SpecialField from './Fields/SpecialField.vue';
import ActionsHistory from './ActionsHistory.vue';
import { useSize } from '@/utils/useSize.js';
import { Direction } from "@/utils/useLine.js"
import BaseButton from '../UI/BaseButton.vue';
import ActionWindow from '../UI/ActionWindow.vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import RollDiceWindow from '../RollDiceWindow.vue';
import { ref, watch } from 'vue';
import { useGameStore } from '@/stores/game';


const route = useRoute();
const room_id = route.params.room_id;

const gameStore = useGameStore()
const authStore = useAuthStore();

const diceInfo = ref(null);

const fields = defineModel('fields', {
    default: null
});
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

const rollDice = () => {
    socket.emit("roll_dice", room_id);
}

const isShowRollDice = ref(false);

socket.on("dice_info", (data) => {
    diceInfo.value = data;
    gameStore.history.push(`Игрок ${gameStore.currentPlayer.value.name} выбрасывает ${diceInfo.value.cubes[0]}:${diceInfo.value.cubes[1]}`)
    isShowRollDice.value = true;
    setTimeout(() => { isShowRollDice.value = false; }, 2000);
})
</script>

<template>
    <div v-if="!!gameStore.currentPlayer && fields != []" class="relative"
        :style="{ width: `${SIZE.BOARD.SIDE}px`, height: `${SIZE.BOARD.SIDE}px` }">
        <ActionWindow v-if="gameStore.currentPlayer.value.name === authStore.userInfo.username" class="absolute z-50"
            :style="{ left: `${SIZE.CORNER.SIDE}px`, top: `${SIZE.CORNER.SIDE}px` }">
            <template v-slot:text>
                Ваш ход
            </template>
            <template v-slot:action>
                <BaseButton class="w-full h-8" :style="{ 'border-radius': '0px' }" :onClick="rollDice">
                    Бросить кубики
                </BaseButton>
            </template>
        </ActionWindow>

        <RollDiceWindow v-if="isShowRollDice" class="absolute z-30" :style="{ left: `${SIZE.CORNER.SIDE}px`, top: `${SIZE.CORNER.SIDE}px` }"
            v-model:diceInfo="diceInfo" />

        <ActionsHistory class="absolute border-[#1f2937] border-2"
            :style="{ left: `${SIZE.CORNER.SIDE}px`, top: `${SIZE.CORNER.SIDE}px` }" />

        <template v-for="(field, index) in fields" :key="index">
            <PropertyField v-if="['CommonField', 'SpecialField'].includes(field.field_type)"
                class="absolute border-[#1f2937] border-2" :style="getComponentPosition(index)"
                :direction="getFieldDirectionByLineIndex(index)" v-model:name="field.name" v-model:id="field.id"/>

            <SpecialField v-else-if="['ChanceField', 'TaxField'].includes(field.field_type)"
                class="absolute border-[#1f2937] border-2" :style="getComponentPosition(index)"
                :direction="getFieldDirectionByLineIndex(index)" v-model:name="field.name" v-model:id="field.id"/>

            <CornerTemplate v-else class="absolute border-[#1f2937] border-2" :style="getComponentPosition(index)"
                v-model:name="field.name" />

        </template>
    </div>
</template>