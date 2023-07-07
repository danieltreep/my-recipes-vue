<template>
    <form @submit.prevent="handleSubmit">
        
        
        <!-- <button>Volgende</button> -->
        <fieldset>
            <legend>Informatie</legend>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">title</span>
                    <label for="people">Titel:</label>
                </div>
                <input type="text" id="people" v-model="newRecipe.title" required>
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">person</span>
                    <label for="people">Aantal personen:</label>
                </div>
                <input type="number" id="people" v-model="newRecipe.people" required>
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">schedule</span>
                    <label for="people">Aantal minuten:</label>
                </div>
                <input type="number" id="people" v-model="newRecipe.time" required>
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">room_service</span>
                    <label for="people">Categorie</label>
                </div>
                <select v-model="newRecipe.category" required>
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
            <textarea placeholder="Beschrijving" rows="4" v-model="newRecipe.description"></textarea>
        </fieldset>
        <!-- <fieldset>
            <legend>Tags</legend>
        </fieldset> -->
        <fieldset>
            <legend>Afbeelding (optioneel)</legend>
            <div class="image box" v-if="imageUrl">
                <img :src="imageUrl" >
            </div>
            <div class="addImage">
                
                <label for="fileInput" class="fileLabel">
                    <span class="material-symbols-outlined">add_photo_alternate</span>
                    
                    <p>Voeg een afbeelding toe</p>
                </label>
                <label class="fileLabel" v-if="imageUrl"  @click.prevent="imageUrl = ''">
                    <span class="material-symbols-outlined">refresh</span>
                    
                    <p>Reset</p>
                </label>
                <input id="fileInput" type="file" accept="image/jpeg, image/png" @change="handleChange">
            </div>
        </fieldset>
        <div class="buttons">
            <button type="submit" disabled class="prev">
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
import { useNewRecipeStore } from '@/stores/newRecipe';
import { useStepStore } from '@/stores/step';

import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { increment } = useStepStore()
const { newRecipe, newRecipeImage } = storeToRefs(useNewRecipeStore())
const { updateRecipeImage } = useNewRecipeStore()

const imageUrl = ref('')
const file = ref(null)

const handleSubmit = () => {
    increment()
}

const handleChange = (event: any) => {
    const selected = event.target.files[0]

    if (selected) {
        imageUrl.value = URL.createObjectURL(event.target.files[0])
        updateRecipeImage(selected)
    } else {
        file.value = null
        imageUrl.value = ''
    }
}
</script>

<style lang="css" scoped>
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
    select {
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
</style>