import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useRecipesStore } from './recipes'

export const useSearchStore = defineStore('search', () => {
    const { recipes } = storeToRefs(useRecipesStore())
    const searchTerm = ref('')
  
    const recipeList = computed(() => {
        return recipes.value.filter(recipe => {
            return recipe.title.toUpperCase().includes(searchTerm.value.toUpperCase())
        })
    })

    return { searchTerm, recipeList }
})
