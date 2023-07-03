<template>
    <form>
        <!-- Transition? -->
        <Step1 v-if="step === 1"/>
        <Step2 v-if="step === 2"/>
        <Step3 v-if="step === 3"/>
    </form>
</template>

<script setup lang="ts">
// Steps based on props, url??
import Step1 from '@/components/stepForm/Step1.vue'
import { ref } from 'vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';

const props = defineProps<{
    step: number
}>()

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
    }
</style>