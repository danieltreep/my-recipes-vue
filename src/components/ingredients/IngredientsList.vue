<template>
    <ul >
        <IngredientsListItem v-for="(ingredient, index) in ingredients" :key="index" :index="index" :ingredient="ingredient"/>
    </ul>
</template>

<script setup lang="ts">
import type { Ingredient } from '@/types/Ingredient';
import IngredientsListItem from './IngredientsListItem.vue';

defineProps<{
    ingredients: Array<Ingredient>
}>()

</script>

<style lang="css" scoped>
    ul {
        background-color: var(--card-color);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius-m);
        padding-left: 0;
    }
    
    li:not(:last-child) {
        border-bottom: 3px solid var(--background-color);
    }
</style>