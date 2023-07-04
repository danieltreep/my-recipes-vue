<template>
    <div>
        <fieldset>
            <legend>Informatie</legend>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">title</span>
                    <label for="people">Titel:</label>
                </div>
                <input type="text" id="people" v-model="newRecipe.title" placeholder="Titel">
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">person</span>
                    <label for="people">Aantal personen:</label>
                </div>
                <input type="number" id="people" v-model="newRecipe.people">
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">schedule</span>
                    <label for="people">Aantal minuten:</label>
                </div>
                <input type="number" id="people" v-model="newRecipe.time">
            </div>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">room_service</span>
                    <label for="people">Categorie</label>
                </div>
                <select v-model="newRecipe.category">
                    <option disabled selected>Selecteer</option>
                    <option value="ontbijt">Ontbijt</option>
                    <option value="lunch">Lunch</option>
                    <option value="hoofdgerecht" >Hoofdgerecht</option>
                    <option value="voorgerecht">Voorgerecht</option>
                    <option value="dessert">Dessert</option>
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
        <fieldset>
            <legend>Tags</legend>
        </fieldset>
        <fieldset>
            <legend>Afbeelding (optioneel)</legend>
            <div class="inputGroup">
                <div class="field">
                    <span class="material-symbols-outlined">add_a_photo</span>
                    <p>Voeg afbeelding toe</p>
                </div>
                <label for="fileInput" class="fileLabel">
                    <p>Add</p>
                </label>
                <input id="fileInput" type="file" accept="image/jpg, image/png">
            </div>
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import { useNewRecipeStore } from '@/stores/newRecipe';
import { storeToRefs } from 'pinia';

const {newRecipe} = storeToRefs(useNewRecipeStore())

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
    }
    .field {
        display: flex;
        gap: .5rem;
        align-items: center;
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
    }
    .fileLabel {
        /* background-color: var(--card-color); */
        display: flex;
        align-items: center;
        border: 1px solid var(--primary-color);
        padding: .1rem .5rem;
        /* width: fit-content; */
        border-radius: var(--border-radius-l);
        font-size: 14px;
        gap: .2rem;
    }
    .fileLabel .material-symbols-outlined {
        font-size: 20px;
    }   
    
</style>