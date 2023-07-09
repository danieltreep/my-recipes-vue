<template>
    <div class="recipeList" v-if="recipes.length">
        <RecipeThumbnail v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
    </div>
    <div v-else>
        <RecipeListSuspense v-if="empty"/>
        <NoRecipesVue v-if="!empty"/>
    </div>
</template>

<script setup lang="ts">
import NoRecipesVue from '@/components/recipes/NoRecipes.vue';
import RecipeListSuspense from '@/components/suspense/RecipeListSuspense.vue'
import RecipeThumbnail from './RecipeThumbnail.vue';
import type { Recipe } from '@/types/Recipe';
import { ref } from 'vue';

defineProps<{
    recipes: Array<Recipe>,
}>()

const empty = ref(true)

setTimeout(()=> {
    empty.value = false
}, 500)
</script>

<style lang="css" scoped>
    .recipeList {
        margin-top: 1rem;
    }
</style>