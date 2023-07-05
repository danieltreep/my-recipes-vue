import { ref, computed, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type { Ingredient } from '@/types/Ingredient'
import type { Recipe } from '@/types/Recipe'

export const useNewRecipeStore = defineStore('newRecipe', () => {
        
    const newRecipe = ref<Recipe>({
        title: '',
        people: null,
        time: null,
        category: '',
        description: '',
        ingredients: [],
        steps: [],
        favorite: false
    })
    
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

        newRecipe.value.ingredients.push(ingredient)

        currentIngredient.value.amount = null
        currentIngredient.value.name = ''
        currentIngredient.value.unit = ''
    }

    const deleteIngredient = (i: number) => {
        newRecipe.value.ingredients.splice(i, 1)
    }

    const addStep = (step: string) => {
        newRecipe.value.steps.push(step)
    }

    const resetRecipe = () => {
        newRecipe.value = {
            title: '',
            people: null,
            time: null,
            category: '',
            description: '',
            ingredients: [],
            steps: [],
            favorite: false
        }
    }
  return { newRecipe, currentIngredient, addIngredient, deleteIngredient, addStep, resetRecipe}
})
