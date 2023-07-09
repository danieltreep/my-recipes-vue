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
        grid-template-columns: 1fr 1fr;
        gap: 20px 10px;
        /* max-width: 100%; */
        margin-bottom: calc(85px + 1.5rem);
    }

    @media (min-width: 420px) {
        .layout {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media (min-width: 800px) {
        .layout {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
</style>