<template>
    <div>
        <!-- Transition? -->
        <Step1 v-if="step === 1"/>
        <Step2 v-if="step === 2"/>
        <Step3 v-if="step === 3"/>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useStepStore } from '@/stores/step';

import Step1 from '@/components/stepForm/Step1.vue'
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';

const { step } = storeToRefs(useStepStore())

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