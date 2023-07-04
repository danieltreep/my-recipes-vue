<template>
    <li class="inputGroup">
        <div class="ingredient">
            <span class="material-symbols-outlined" @click.prevent="handleDelete(index)">delete</span>
            <p>{{ ingredient?.name }}</p>    
        </div>
        <div class="hoeveelheid">
            <p>{{ ingredient?.amount }}</p>
            <p>{{ ingredient?.unit }}</p>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { Ingredient } from '@/types/Ingredient';
import { useNewRecipeStore } from '@/stores/newRecipe';

const {deleteIngredient} = useNewRecipeStore()

defineProps<{
    ingredient: Ingredient,
    index: number
}>()

const handleDelete = (index: number) => {
    deleteIngredient(index)
} 
</script>

<style lang="css" scoped>
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .7rem;
    }
    .hoeveelheid {
        display: flex;
        font-size: 14px;
    }
    .ingredient {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
    .ingredient .material-symbols-outlined {
        font-size: 16px;
        color: var(--font-inactive);
    }
</style>