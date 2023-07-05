<template>
    <form @submit.prevent="handleSubmit">
        <!-- Transition? -->
        <!-- <StepButtons /> -->
        <!-- <div class="buttons">
            <button type="submit" :disabled="step === 1" @click.prevent="decrement" class="prev">
                <span class="material-symbols-outlined">navigate_before</span>
            Vorige</button>
            <button v-if="step < 3" @click.prevent="increment" class="next">
                Volgende
                <span class="material-symbols-outlined">navigate_next</span>
            </button>
            <button type="submit" v-if="step === 3" class="save">Opslaan</button>
        </div> -->
        <Step1 v-if="step === 1"/>
        <Step2 v-if="step === 2"/>
        <Step3 v-if="step === 3"/>
    </form>
</template>

<script setup lang="ts">
import { useStepStore } from '@/stores/step';
import { useNewRecipeStore } from '@/stores/newRecipe';
import { useCurrentUserStore } from '@/stores/currentUser';
import { storeToRefs } from 'pinia';
import useCollection from '@/composables/recipes/useCollection'
import { useRouter } from 'vue-router';

import Step1 from '@/components/stepForm/Step1.vue'
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';
import StepButtons from './StepButtons.vue';

const { step } = storeToRefs(useStepStore())
const { newRecipe } = storeToRefs(useNewRecipeStore())
const { resetRecipe } = useNewRecipeStore()
const { increment, decrement, resetStep } = useStepStore()
const { addDocument, error, isPending } = useCollection('recipes')

const router = useRouter()

const handleSubmit = async () => {
    await addDocument(newRecipe.value)

    if (!error.value) {
        resetRecipe()
        resetStep()
        router.push({name: 'Recipes'})
    } else {
        console.log('the recipe could not be saved')
    }
}

</script>

<style lang="css" >
    fieldset {
        padding: 0;
        border: none;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: 2rem 0;
    }
    legend {
        margin: 0 0 .5rem .5rem;
        font-size: 14px;
        font-weight: 500;
    }
    form {
        font-size: 14px;
        margin: 2rem 0 calc(85px + 2rem);
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        
    }
    .buttons button {
        padding: .6rem .8rem;
        border-radius: var(--border-radius-m);
        display: flex;
        align-items: center;
        gap: .5rem;
        font-weight: 500;
        background-color: var(--background-color);
    }
    .buttons button .material-symbols-outlined {
        font-size: 16px;
    }
    .next, .save {
        color: var(--primary-color);
        border: 1px solid var(--primary-color)
    }
    .prev {
        border: none;
    }
    .error {
        text-align: center;
        font-weight: 500;
        color: red;
        margin: 1rem;
    }
</style>