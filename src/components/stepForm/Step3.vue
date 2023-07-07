<template>
    <form @submit.prevent="handleSubmit">
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
            <div class="buttons">
                <button  @click.prevent="decrement" class="prev">
                    <span class="material-symbols-outlined">navigate_before</span>
                    Vorige
                </button>
                <button type="submit" class="save">Opslaan</button>
            </div>
            <div class="error" v-if="error">
                <p>Voeg een stap toe voordat u het recept opslaat</p>
            </div>
    </form>
</template>

<script setup lang="ts">
// External
import { storeToRefs } from 'pinia';
import { useStepStore } from '@/stores/step';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Composables
import useCollection from '@/composables/recipes/useCollection'
import useStorage from '@/composables/recipes/useStorage'

// Stores
import { useNewRecipeStore } from '@/stores/newRecipe';

// Components
import StepsListItem from './StepsListItem.vue';
import AddSteps from './AddSteps.vue';

// Functions
const { addDocument } = useCollection('recipes')
const { resetRecipe } = useNewRecipeStore()
const { decrement, resetStep } = useStepStore()
const { filePath, url, uploadImage } = useStorage()

// Refs
const { newRecipe, newRecipeImage } = storeToRefs(useNewRecipeStore())
const error = ref(false)

const router = useRouter()

const handleSubmit = async () => {

    // Show error if there are no errors
    if (!newRecipe.value.steps.length) {
        error.value = true
    } else {

        // Check if there is an image in store, if so upload it.
        if (newRecipeImage.value) {
            await uploadImage(newRecipeImage.value)

            // Update the new recipe with the returned filePath and url refs
            newRecipe.value.filePath = filePath.value
            newRecipe.value.imageUrl = url.value
        }

        // Add document with the value from newRecipe store
        const recipeId = await addDocument(newRecipe.value)

        // Reset steps and go to newly added recipe page
        router.push({name: 'Recipe', params: {category: newRecipe.value.category, id: recipeId}})
        resetStep()
        resetRecipe()
    }
}
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
    .error {
        text-align: center;
        font-weight: 500;
        color: red;
        margin-top: 2rem;
    }
</style>