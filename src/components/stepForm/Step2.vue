<template>
    <fieldset>
        <legend>Ingredienten</legend>
        <IngredientsList :ingredients="newRecipe.ingredients"/>
        <AddIngredient />
    </fieldset>
</template>

<script setup lang="ts">
import AddIngredient from './AddIngredient.vue';
import IngredientsList from '@/components/ingredients/IngredientsList.vue'
import { useNewRecipeStore } from '@/stores/newRecipe';
import { storeToRefs } from 'pinia';

const {newRecipe} = storeToRefs(useNewRecipeStore())
</script>

<style lang="css" scoped>
    
    
</style>