<template>
    <div class="page">
        <header>
            <h3>Nieuw recept</h3>
            <StepIndicators />
        </header>
        <StepForm />
    </div>
</template>

<script setup lang="ts">
import StepForm from '@/components/stepForm/StepForm.vue';
import StepIndicators from '@/components/stepForm/StepIndicators.vue';

</script>

<style lang="css" scoped>
    h3 {
        text-align: center;
        margin: 1rem 0 3rem;
    }
    
</style>