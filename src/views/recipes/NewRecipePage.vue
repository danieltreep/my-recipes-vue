<template>
    <div class="page">
        <header>
            <h3>Nieuw recept</h3>
            <StepIndicators :step="step"/>
        </header>
        <StepForm :step="step"/>
        <div class="buttons">
            <button :disabled="step === 1" @click.prevent="step--">
                <span class="material-symbols-outlined">navigate_before</span>
            Vorige</button>
            <button v-if="step < 3" @click.prevent="step++" class="next">
                Volgende
                <span class="material-symbols-outlined">navigate_next</span>
            </button>
            <button v-if="step === 3" class="save">Opslaan</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import StepForm from '@/components/stepForm/StepForm.vue';
import StepIndicators from '@/components/stepForm/StepIndicators.vue';
import { ref } from 'vue';

const step = ref<number>(1)

</script>

<style lang="css" scoped>
    h3 {
        text-align: center;
        margin: 1rem 0 3rem;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0 calc(85px + 2rem);
    }
    button {
        padding: .6rem .8rem;
        border-radius: var(--border-radius-m);
        border: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        font-weight: 500;
        background-color: var(--background-color);
    }
    button .material-symbols-outlined {
        font-size: 16px;
    }
    .next, .save {
        color: var(--primary-color);
        border: 1px solid var(--primary-color)
    }
</style>