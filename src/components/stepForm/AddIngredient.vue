<template>
    <div>
        <div class="addIngredient">
            <div class="box">
                <input type="text" placeholder="Ingredient" v-model="currentIngredient.name">
            </div>
            <div class="box">
                <input type="number" placeholder="40" class="hoeveelheid" v-model="currentIngredient.amount">
                <select v-model="currentIngredient.unit">
                    <option value="aantal" selected disabled>Aantal</option>
                    <option value="mg">mg</option>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="l">l</option>
                    <option value="x">x</option>
                </select>
            </div>
            <button class="box add" @click.prevent="addIngredient">+</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNewRecipeStore } from '@/stores/newRecipe';
import { storeToRefs } from 'pinia';

const {currentIngredient} = storeToRefs(useNewRecipeStore())
const {addIngredient} = useNewRecipeStore()
</script>

<style lang="css" scoped>
    .addIngredient {
        display: grid;
        grid-template-columns: 5fr 4fr 1fr;
        gap: .5rem;
        margin-top: .5rem;
    }
    .box {
        background-color: var(--card-color);
        padding: .7rem;
        border-radius: var(--border-radius-m);
        box-shadow: var(--box-shadow);
        border: none;
        display: flex;
    }
    input {
        width: fit-content;
        border: none;
        border-bottom: 1px solid var(--background-color);
        width: 100%;
    }
    select {
        border: none;
        padding-right: .5rem;
        text-align: end;
    }
    .add {
        border: 1px solid var(--secondary-color);
    }
</style>