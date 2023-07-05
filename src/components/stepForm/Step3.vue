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
import { useNewRecipeStore } from '@/stores/newRecipe';
import { storeToRefs } from 'pinia';
import { useStepStore } from '@/stores/step';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCollection from '@/composables/recipes/useCollection'

import StepsListItem from './StepsListItem.vue';
import AddSteps from './AddSteps.vue';

const { addDocument } = useCollection('recipes')
const { newRecipe } = storeToRefs(useNewRecipeStore())
const { resetRecipe } = useNewRecipeStore()
const { decrement, resetStep } = useStepStore()
const router = useRouter()

const error = ref(false)

const handleSubmit = async () => {
    if (!newRecipe.value.steps.length) {
        error.value = true
    } else {
        const recipeId = await addDocument(newRecipe.value)
        router.push({name: 'Recipe', params: {id: recipeId}})
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