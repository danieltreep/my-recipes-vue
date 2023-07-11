import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Recipe } from '@/types/Recipe';
import getRecipes from '@/composables/recipes/getRecipes';


export const useRecipesStore = defineStore('Recipes', () => {
    
    const recipes = ref<Recipe[]>([])
    
    const fetchRecipes = async () => {
        const { documents } = await getRecipes()
        recipes.value = documents.value
    }

    const updateRecipe = (recipe: Recipe, i: number) => {
        recipes.value[i] = recipe
    }

    const favorites = computed(() => {
        return recipes.value.filter(recipe => {
           return recipe.favorite === true
        })
    })

    const setFavoriteStore = (id: string, value: boolean) => {
        const selected: any = recipes.value.find(recipe => recipe.id = id)
        selected.favorite = value
    }

    const categoryRecipes = computed(() => {
        return (category: string) => {
            return recipes.value.filter(recipe => recipe.category === category)
        }
    })

    return { 
        recipes,
        fetchRecipes,
        updateRecipe,
        favorites,
        categoryRecipes,
        setFavoriteStore
    }
})