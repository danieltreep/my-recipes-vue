<template>
    <li class="inputGroup" :class="checked ? 'checked' : ''">
        <div class="ingredient">
            <span v-if="edit" class="material-symbols-outlined" @click.prevent="handleDelete(index)">delete</span>
            <span v-if="!edit" class="material-symbols-outlined" @click.prevent="handleCheck">{{checked ? 'check_box' : 'check_box_outline_blank'}}</span>
            <p>{{ ingredient.name.charAt(0).toUpperCase() }}{{ ingredient.name?.slice(1) }}</p>    
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
import { ref } from 'vue';

const {deleteIngredient} = useNewRecipeStore()
const checked = ref(false)

defineProps<{
    ingredient: Ingredient,
    index: number,
    edit: boolean
}>()

const handleDelete = (index: number) => {
    deleteIngredient(index)
} 

const handleCheck = () => {
    checked.value = !checked.value
} 
</script>

<style lang="css" scoped>
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .7rem;
    }
    .checked {
        color: var(--font-inactive);
    }
    .hoeveelheid {
        display: flex;
        font-size: 14px;
        gap: .2rem;
    }
    .ingredient {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
    .ingredient .material-symbols-outlined {
        font-size: 16px;
    }
</style>