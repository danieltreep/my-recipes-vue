<template>
    <form @submit.prevent="handleSubmit">
        <div class="error" v-if="error">
            <p>Voeg een ingredient toe voordat u verder gaat</p>
        </div>
        <fieldset>
            <legend>Ingredienten</legend>
            <IngredientsList :ingredients="newRecipe.ingredients" :edit="true"/>
            <AddIngredient />
        </fieldset>
        
        <div class="buttons">
            <button type="submit" class="prev" @click.prevent="decrement">
                <span class="material-symbols-outlined">navigate_before</span>
            Vorige</button>
            <button type="submit" class="next">
                Volgende
                <span class="material-symbols-outlined">navigate_next</span>
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import AddIngredient from './AddIngredient.vue';
import IngredientsList from '@/components/ingredients/IngredientsList.vue'
import { useNewRecipeStore } from '@/stores/newRecipe';
import { storeToRefs } from 'pinia';
import { useStepStore } from '@/stores/step';
import { ref } from 'vue';

const { increment, decrement } = useStepStore()
const {newRecipe} = storeToRefs(useNewRecipeStore())

const error = ref(false)

const handleSubmit = () => {
    if (!newRecipe.value.ingredients.length) {
        error.value = true
    } else {
        increment()
    }

}

</script>

<style lang="css" scoped>
    .error {
        text-align: center;
        font-weight: 500;
        color: red;
        margin-top: 2rem;
    }
    
</style>