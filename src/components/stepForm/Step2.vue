<template>
    <fieldset>
        <legend>Ingredienten</legend>
        <ul class="ingredienten">
            <IngredientsListItem />
        </ul>
        <AddIngredient />
    </fieldset>
</template>

<script setup lang="ts">
import IngredientsListItem from './IngredientsListItem.vue';
import AddIngredient from './AddIngredient.vue';


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