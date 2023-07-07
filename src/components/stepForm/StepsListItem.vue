<template>
    <li class="step box">
        <div class="info">
            <p  class="number">{{ index + 1 }}.</p>
            <span v-if="showEdit && !edit" class="material-symbols-outlined" @click="edit = true">edit</span>
            <span v-if="edit" class="material-symbols-outlined" @click="handleEdit">save</span>
        </div>
        <div>
            <p v-if="!edit">{{ step.charAt(0).toUpperCase() }}{{ step.slice(1) }}</p>
            <textarea v-model="editStep" v-if="edit"></textarea>
        </div>
    </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNewRecipeStore } from '@/stores/newRecipe'

const props = defineProps<{
    step: string,
    index: number,
    showEdit: boolean
}>()

// Start with content of step in textarea
const editStep = ref(props.step.valueOf())

// Show save icon and textarea if true
const edit = ref(false)

const { updateStep } = useNewRecipeStore()

const handleEdit = () => {
    edit.value = false
    updateStep(editStep.value, props.index)
}

</script>

<style lang="css" scoped>
    li {
        display: grid;
        grid-template-columns: 1fr 7fr;
        align-items: start;
        padding: 1rem;
        color: var(--font-color);
    }
    .step .material-symbols-outlined {
        font-size: 16px;
        color: var(--font-inactive);
    }
    .step:not(:first-of-type) {
        margin-top: 5px;
    }
    .number {
        font-size: 32px;
        font-weight: bold;
        font-family: serif;
        color: var(--secondary-color);
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    textarea {
        width: 100%;
        height: 100%;
    }
</style>