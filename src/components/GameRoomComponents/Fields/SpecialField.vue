<script setup>
import { useAttrs } from 'vue';
import { URLs } from "@/api/urls";
import FieldTemplate from './Templates/FieldTemplate.vue';

const attrs = useAttrs();

const name = defineModel('name');
const id = defineModel('id')
</script>

<template>
    <FieldTemplate :name="name" :id="id" :direction="attrs.direction">
        <img :src="`${URLs.game}/images/${name}.png`" class="self-center w-10 drop-shadow-[0_5px_4px_rgba(0,0,0,0.5)]">
    </FieldTemplate>
</template>