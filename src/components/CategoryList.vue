<template>
    <div class="layout">
        <CategoryCard v-for="category in categories" :key="category" :cat="category"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CategoryCard from './CategoryCard.vue';

const categories = ref<Array<string>>([
    'ontbijt',
    'lunch',
    'hoofdgerecht',
    'voorgerecht', 
    'desserts', 
    'bijgerecht',
    'tussendoor',
    'drinken'
])

</script>

<style lang="css" scoped>
    .layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px 5px;
    }
</style>