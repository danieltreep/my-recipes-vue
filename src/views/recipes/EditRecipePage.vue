<template>
    <form @submit.prevent="handleSubmit" class="page">

        <h3>Edit recipe</h3>
        <fieldset>
            <legend>Informatie</legend>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">title</span>
                    <label for="people">Titel:</label>
                </div>
                <input type="text" id="people" v-model="selectedRecipe.title" required>
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">person</span>
                    <label for="people">Aantal personen:</label>
                </div>
                <input type="number" id="people" v-model="selectedRecipe.people" required>
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">schedule</span>
                    <label for="people">Aantal minuten:</label>
                </div>
                <input type="number" id="people" v-model="selectedRecipe.time" required>
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">room_service</span>
                    <label for="people">Categorie</label>
                </div>
                <select v-model="selectedRecipe.category" required>
                    <option disabled selected>Selecteer</option>
                    <option value="ontbijt">Ontbijt</option>
                    <option value="lunch">Lunch</option>
                    <option value="hoofdgerecht" >Hoofdgerecht</option>
                    <option value="voorgerecht">Voorgerecht</option>
                    <option value="desserts">Desserts</option>
                    <option value="bijgerecht">Bijgerecht</option>
                    <option value="tussendoor">Tussendoor</option>
                    <option value="drinken">Drinken</option>
                </select>
            </div>
        </fieldset>
        <fieldset>
            <legend>Beschrijving (optioneel)</legend>
            <textarea placeholder="Beschrijving" rows="4" v-model="selectedRecipe.description"></textarea>
        </fieldset>
        <!-- <fieldset>
            <legend>Tags</legend>
        </fieldset> -->
        <fieldset>
            <legend>Afbeelding (optioneel)</legend>
            <div class="image box" v-if="selectedRecipe.imageUrl">
                <img :src="selectedRecipe.imageUrl" >
            </div>
            <!-- <div class="image box" v-if="imageUrl">
                <img :src="imageUrl" >
            </div> -->
            <div class="addImage">
                <label for="fileInput" class="fileLabel">
                    <span class="material-symbols-outlined">add_photo_alternate</span>
                    
                    <p>Voeg een afbeelding toe</p>
                </label>
                <input id="fileInput" type="file" accept="image/jpeg, image/png" @change="handleChange">
            </div>
        </fieldset>
          
        <fieldset>
            <legend>Ingredienten</legend>
            <!-- <IngredientsList :ingredients="selectedRecipe.ingredients" :edit="true"/> -->
            <ul class="ingredients">
                <EditIngredientsListItem 
                    v-for="(ingredient, index) in selectedRecipe.ingredients" 
                    :key="index" 
                    :index="index" 
                    :ingredient="ingredient"
                    :edit="true"
                />
            </ul>
            <EditAddIngredients />
        </fieldset>
        
        <fieldset>
            <legend>Stappen</legend>
            <ul class="steps">
                <EditStepsListItem 
                    v-for="(step, index) in selectedRecipe.steps" 
                    :key="index" 
                    :step="step"
                    :index="index"
                    :show-edit="true"
                />
                </ul>
                <EditAddSteps />
            </fieldset>
            <div class="error" v-if="error">
                <p>U heeft nog niet alles ingevoerd</p>
            </div>
            <div class="buttons">
                <button class="prev" @click="router.go(-1)">
                    <!-- <span class="material-symbols-outlined">close</span> -->
                    Afbreken
                </button>
                <button type="submit" class="save">Opslaan</button>
            </div>
    </form>
    
</template>

<script setup lang="ts">

// External
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Composables
import useUpdateDocument from '@/composables/recipes/updateDocument'
import useStorage from '@/composables/recipes/useStorage'

// Components 
import EditIngredientsListItem from '@/components/editRecipe/EditIngredientListItem.vue';
import EditAddIngredients from '@/components/editRecipe/EditAddIngredients.vue';
import EditStepsListItem from '@/components/editRecipe/EditStepsListItem.vue';
import EditAddSteps from '@/components/editRecipe/EditAddSteps.vue';

// Stores
import { useNewRecipeStore } from '@/stores/newRecipe';
import { useSelectedRecipeStore } from '@/stores/currentRecipe'

const { newRecipe, newRecipeImage } = storeToRefs(useNewRecipeStore())
const { updateRecipeImage } = useSelectedRecipeStore()
const { selectedRecipe, selectedRecipeImage } = storeToRefs(useSelectedRecipeStore())
const { updateDocument } = useUpdateDocument('recipes')
const { filePath, url, uploadImage } = useStorage()

const imageUrl = ref('')
const file = ref(null)
const router = useRouter()
const error = ref(false)

const handleChange = (event: any) => {
    const selected = event.target.files[0]

    if (selected) {
        selectedRecipe.value.imageUrl = URL.createObjectURL(event.target.files[0])
        updateRecipeImage(selected)
    } else {
        file.value = null
        imageUrl.value = ''
    }
}


const handleSubmit = async () => {

    // Show error if there are no errors
    if (!selectedRecipe.value.steps.length || !selectedRecipe.value.ingredients.length) {
        error.value = true
        return
    } else {

        // Check if there is an image in store, if so upload it.
        if (selectedRecipeImage.value) {
            await uploadImage(selectedRecipeImage.value)

            // Update the new recipe with the returned filePath and url refs
            selectedRecipe.value.filePath = filePath.value
            selectedRecipe.value.imageUrl = url.value
        }

        // Add document with the value from newRecipe store
        await updateDocument(selectedRecipe.value)

        // Reset steps and go to newly added recipe page
        router.push({name: 'Recipe', params: {category: selectedRecipe.value.category, id: selectedRecipe.value.id}})
    }
}

</script>

<style lang="css" scoped >
    h3 {
        text-align: center;
    }
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
    .save {
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
    .inputGroup, textarea {
        background-color: var(--card-color);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius-m);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem;
        width: 100%;
        border: none;
        gap: .5rem;
        outline: transparent;
        resize: vertical;
    }
    .field {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
    .material-symbols-outlined {
        color: var(--primary-color);
    }
    input {
        outline: transparent;
        border: none;
        border-bottom: 1px solid var(--background-color);
        text-align: end;
        width: 100%;
    }
    #fileInput {
        display: none;
    }
    label {
        width: max-content;
    }
    select:first-of-type {
        border: none;
        text-align: end;
        padding: 0 .5rem;
        outline: transparent;
    }
    .fileLabel {
        /* background-color: var(--card-color); */
        display: flex;
        align-items: center;
        /* border: 1px solid var(--primary-color); */
        padding: .1rem .5rem;
        /* width: fit-content; */
        border-radius: var(--border-radius-l);
        font-size: 14px;
        gap: .2rem;
        background-color: var(--card-color);
        width: fit-content;
        box-shadow: var(--box-shadow);
        padding: .5rem .8rem;
    }
    .fileLabel .material-symbols-outlined {
        font-size: 20px;
    }   
    .image {
        padding: 1rem;
    }
    .image img {
        border-radius: var(--border-radius-s);
    }
    .addImage {
        display: flex;
        justify-content: space-between;
        margin-top: .5rem;
    }
    ul.ingredients {
        background-color: var(--card-color);
        border-radius: var(--border-radius-m);
        box-shadow: var(--box-shadow);
        padding-left: 0;
    }
    
    .ingredients li:not(:last-child) {
        border-bottom: 3px solid var(--background-color);
    }
</style>