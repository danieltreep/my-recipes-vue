<template>
    <div class="recipeList" v-if="recipes.length">
        <RecipeThumbnail v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
    </div>
    <div v-else>
        <NoRecipesVue />
    </div>
</template>

<script setup lang="ts">
import NoRecipesVue from '../NoRecipes.vue';
import RecipeThumbnail from './RecipeThumbnail.vue';

defineProps<{
    recipes: Object[]
}>()

</script>

<style lang="css" scoped>
    .recipeList {
        margin-top: 1rem;
    }
</style>