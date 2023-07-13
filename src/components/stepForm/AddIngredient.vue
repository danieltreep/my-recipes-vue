<template>
    <div>
        <div class="addIngredient">
            <div class="box">
                <input type="text" placeholder="Ingredient" v-model="currentIngredient.name">
            </div>
            <div class="box eenheid">
                <input type="number" placeholder="??" class="hoeveelheid" v-model="currentIngredient.amount">
                <select v-model="currentIngredient.unit">
                    <optgroup label="Gewicht">
                        <option value="mg">milligram</option>
                        <option value="g">gram</option>
                        <option value="kg">kilogram</option>
                    </optgroup>
                    <optgroup label="Vloeistof">
                        <option value="ml">milliliter</option>
                        <option value="l">liter</option>
                    </optgroup>
                    <optgroup label="Hoeveelheid">
                        <option value="stuk(s)">stuk(s)</option>
                        <option value="el">el</option>
                        <option value="tl">tl</option>
                    </optgroup>
                </select>
            </div>
            <button class="box add" @click.prevent="handleAddIngredient">+</button>
        </div>
        <div class="error" v-if="error">
            <p>Voer een ingredient in</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNewRecipeStore } from '@/stores/newRecipe';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { currentIngredient } = storeToRefs(useNewRecipeStore())
const { addIngredient } = useNewRecipeStore()

const error = ref(false)

const handleAddIngredient = () => {
    if (!currentIngredient.value.name.length) {
        error.value = true
        return
    } else {
        addIngredient()
        error.value = false
    }
}
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
        outline: transparent;
    }
    .eenheid {
        display: grid;
        grid-template-columns: 30px 1fr;
    }
    select {
        border: none;
        padding-right: .5rem;
        /* text-align: end; */
        outline: transparent;
        width: 100%;
    }
    .add {
        border: 1px solid var(--secondary-color);
        display: flex;
        justify-content: center;
        font-weight: bold;
    }
</style>