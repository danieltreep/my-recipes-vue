<template>
    <div>
        <div class="information">
                <div class="detailsSection">
                    <div class="detail">
                        <span class="material-symbols-outlined">room_service</span>
                        <p>{{ recipe.category.charAt(0).toUpperCase() }}{{ recipe.category.slice(1) }}</p>
                    </div>
                    <div class="detail">
                        <span class="material-symbols-outlined">access_time</span>
                        <p>{{recipe.time}} min</p>
                    </div>
                </div>
                <h1>{{ recipe.title.charAt(0).toUpperCase() }}{{ recipe.title.slice(1) }}</h1>
                <p class="description">{{ recipe.description?.charAt(0).toUpperCase() }}{{ recipe.description?.slice(1) }}</p>
            </div>
            <!-- <div class="tagsSection">
                <div class="tagsHeader">
                    <p>Tags</p>
                </div>
                <div class="tags">
                    <div class="tag">
                        <p>Zoet</p>
                    </div>
                </div>
            </div> -->

            <div class="persons box">
                <span class="material-symbols-outlined">person</span>
                <p>Aantal personen</p>
                <div class="counter">
                    <span tabindex="0" @click="handleDecrement">-</span>
                    <p>{{ selectedRecipe.people }}</p>
                    <span tabindex="0" @click="handleIncrement">+</span>
                </div>
            </div>
            <div>
                <div class="links">
                    <p @click="tab = 'i'" :class="tab === 'i' ? 'active' : ''">Ingredienten</p>
                    <p @click="tab = 's'" :class="tab === 's' ? 'active' : ''">Stappen</p>
                </div>
                <IngredientsList 
                    v-show="tab === 'i'" 
                    :ingredients="recipe.ingredients"
                    :edit="false"
                />
                <ul v-show="tab === 's'">
                    <StepsListItemVue v-for="(step, index) in recipe.steps" :key="index" :step="step" :index="index" :show-edit="false"/>
                </ul>
            </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Recipe } from '@/types/Recipe';
import IngredientsList from '../ingredients/IngredientsList.vue';
import StepsListItemVue from '../stepForm/StepsListItem.vue';
import { storeToRefs } from 'pinia';
import {useSelectedRecipeStore} from '@/stores/currentRecipe'
import type { Ingredient } from '@/types/Ingredient';

const { selectedRecipe } = storeToRefs(useSelectedRecipeStore())

defineProps<{
    recipe: Recipe
}>()

const tab = ref<string>('i')

const handleDecrement = () => {
    console.log()
    if (selectedRecipe.value.people > 1) {
        selectedRecipe.value.people--
        
        selectedRecipe.value.ingredients.forEach((ingredient: Ingredient) => {

            if(ingredient.amount) {
                ingredient.amount = ingredient.amount.valueOf() / (selectedRecipe.value.people + 1) * selectedRecipe.value.people
            }
        })
    }
}

const handleIncrement = () => {
    selectedRecipe.value.people++
    
    selectedRecipe.value.ingredients.forEach((ingredient: Ingredient) => {

        if(ingredient.amount) {
            ingredient.amount = ingredient.amount.valueOf() / (selectedRecipe.value.people - 1) * selectedRecipe.value.people
        }
    })
}

</script>

<style lang="css" scoped>
    
    /* Information section */
    .information {
        margin: 2rem 0;
    }
    .detailsSection, .detail {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 12px;
    }
    .detailsSection {
        margin-bottom: .3rem;
    }
    .detail {
        gap: .3rem;
    }
    .detail .material-symbols-outlined {
        font-size: 18px;
        color: var(--primary-color);
    }
    h1 {
        font-size: 28px;
    }
    .description {
        font-size: 14px;
        color: var(--font-color);
    }
    .persons {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin: 2rem 0;
    }
    .persons .material-symbols-outlined {
        color: var(--primary-color);
    }
    .counter {
        display: flex;
        gap: .5rem;
        margin-left: auto;
    }
    .counter span {
        background-color: #F8F8F8;
        height: 20px;
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius-s);
        font-size: 1.1rem;
    }
    .links {
        display: flex;
        justify-content: space-around;
        color: var(--font-inactive);
        cursor: pointer;
    }
    ul {
        margin-top: 1rem;
    }
    .active {
        color: var(--primary-color);
        font-weight: 500;
    }

    .tag {
        border: 1px solid var(--secondary-color);
        width: fit-content;
        padding: .2rem .5rem;
        border-radius: 25px;
    }
    .tagsHeader {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: .5rem;
    }
</style>