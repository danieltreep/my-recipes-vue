import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ingredient } from '@/types/Ingredient'
import type { Recipe } from '@/types/Recipe'
import { timestamp } from '@/firebase/config'

export const useNewRecipeStore = defineStore('newRecipe', () => {
        
    const newRecipe = ref<Recipe>({
        title: '',
        people: null,
        time: null,
        category: '',
        description: '',
        ingredients: [],
        steps: [],
        favorite: false,
        id: '',
        createdAt: timestamp
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
            favorite: false,
            id: '',
            filePath: '',
            imageUrl: ''
        }

        newRecipeImage.value = null
    }
    
    const newRecipeImage = ref<Blob | null>()

    const updateRecipeImage = (recipe: Blob) => {
        newRecipeImage.value = recipe
    }

    return { 
        newRecipe, 
        newRecipeImage,
        currentIngredient, 
        addIngredient, 
        deleteIngredient, 
        addStep, 
        resetRecipe,
        updateRecipeImage
    }
})
