<template>
    <div class="page">
        <header>
            <span class="material-symbols-outlined">arrow_back</span>
            <h2>Nieuw recept</h2>
        </header>
        <StepForm />
        <form>
            <fieldset>
                <p>Informatie</p>
                <div class="inputGroup">
                    <div class="field">
                        <span class="material-symbols-outlined">person</span>
                        <label for="people">Aantal personen:</label>
                    </div>
                    <input type="number" id="people" >
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script setup lang="ts">
import StepForm from '@/components/StepForm.vue';


</script>

<style lang="css" scoped>
    .inputGroup {
        background-color: var(--card-color);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius-m);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem;
    }
    .field {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
    fieldset {
        padding: 0;
        border: none;
    }
    input {
        outline: transparent;
        border: none;
        border-bottom: 1px solid var(--font-inactive);
        text-align: end;
    }
</style>