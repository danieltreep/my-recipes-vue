<template>
    <fieldset>
        <legend>Stappen</legend>
        <ul>
            <StepsListItem 
                v-for="(step, index) in newRecipe.steps" 
                :key="index" 
                :step="step"
                :index="index"
            />
        </ul>
        <AddSteps />
    </fieldset>
</template>

<script setup lang="ts">
import StepsListItem from './StepsListItem.vue';
import AddSteps from './AddSteps.vue';
import { useNewRecipeStore } from '@/stores/newRecipe';
import { storeToRefs } from 'pinia';

const { newRecipe } = storeToRefs(useNewRecipeStore())
</script>

<style lang="css" scoped>
    ul {
        padding-left: 0;
    }
    li {
        background-color: var(--card-color);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius-m);
    }
    
    li:not(:last-child) {
        border-bottom: 3px solid var(--background-color);
    }
    
</style>