<template>
    <div class="addStep">    
        <textarea placeholder="Beschrijf de stap hier ..." class="box" v-model="step"></textarea>
        <button class="box" @click.prevent="handleAddStep">Voeg stap toe</button>
        <div class="error" v-if="error">
            <p>Voer tekst in voor u de stap toevoegd</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSelectedRecipeStore } from '@/stores/currentRecipe';

const { addStep } = useSelectedRecipeStore()

const step = ref('')
const error = ref(false)

const handleAddStep = () => {
    if (!step.value.length) {
        error.value = true
        return
    } else {
        addStep(step.value)
        step.value = ''
        error.value = false
    }

}
</script>

<style lang="css" scoped>
    .addStep {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    .box {
        background-color: var(--card-color);
        padding: .7rem;
        border-radius: var(--border-radius-m);
        box-shadow: var(--box-shadow);
    }
    textarea {
        width: 100%;
        border: none;
        outline: transparent;
    }
    button {
        width: fit-content;
        border: 1px solid var(--secondary-color);
    }
</style>