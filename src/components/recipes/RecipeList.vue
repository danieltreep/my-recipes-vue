<template>
    <div class="recipeList" v-if="recipes.length">
        <RecipeThumbnail v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
    </div>
    <div v-else>
        <NoRecipesVue />
    </div>
</template>

<script setup lang="ts">
import NoRecipesVue from '@/components/recipes/NoRecipes.vue';
import RecipeThumbnail from './RecipeThumbnail.vue';
import type { Recipe } from '@/types/Recipe';

defineProps<{
    recipes: Array<Recipe>
}>()

</script>

<style lang="css" scoped>
    .recipeList {
        margin-top: 1rem;
    }
</style>