<template>
    <fieldset>
        <legend>Ingredienten</legend>
        <IngredientsList />
        <AddIngredient />
    </fieldset>
</template>

<script setup lang="ts">
import AddIngredient from './AddIngredient.vue';
import IngredientsList from '@/components/ingredients/IngredientsList.vue'
</script>

<style lang="css" scoped>
    
    
</style>