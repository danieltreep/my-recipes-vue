import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Recipe } from '@/types/Recipe';
import type { Ingredient } from '@/types/Ingredient';

export const useSelectedRecipeStore = defineStore('selectedRecipe', () => {
  
    const selectedRecipe = ref<Recipe>({
        title: '',
        people: 0,
        time: 0,
        category: '',
        description: '',
        ingredients: [],
        id: '',
        steps: [],
        favorite: false
    })

    const updateRecipe = (recipe: Recipe) => {
        selectedRecipe.value = recipe
    }

    const currentIngredient = ref<Ingredient>({
        name: '',
        amount: null,
        unit: ''
    })

    const addIngredient = () => {

        const ingredient: Ingredient = {
            name: currentIngredient.value.name,
            amount: currentIngredient.value.amount,
            unit: currentIngredient.value.unit
        }

        selectedRecipe.value.ingredients.push(ingredient)

        currentIngredient.value.amount = null
        currentIngredient.value.name = ''
        currentIngredient.value.unit = ''
    }

    const deleteIngredient = (i: number) => {
        selectedRecipe.value.ingredients.splice(i, 1)
    }

    const addStep = (step: string) => {
        selectedRecipe.value.steps.push(step)
    }

    const updateStep = (step: string, index: number) => {
        selectedRecipe.value.steps[index] = step
    }

    const selectedRecipeImage = ref<Blob | null>()

    const updateRecipeImage = (recipe: Blob) => {
        selectedRecipeImage.value = recipe
    }

    return { 
        selectedRecipe, 
        selectedRecipeImage,
        currentIngredient,
        updateRecipe, 
        addIngredient, 
        deleteIngredient, 
        addStep, 
        updateStep,
        updateRecipeImage 
    }
})