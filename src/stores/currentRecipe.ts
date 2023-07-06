import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Recipe } from '@/types/Recipe';

export const useSelectedRecipeStore = defineStore('selectedRecipe', () => {
  
    const selectedRecipe = ref<Recipe>({
        title: '',
        people: 0,
        time: 0,
        category: '',
        description: '',
        ingredients: [],
        steps: [],
        favorite: false
    })

    const updateRecipe = (recipe: Recipe) => {
        selectedRecipe.value = recipe
    }

    return { selectedRecipe, updateRecipe }
})