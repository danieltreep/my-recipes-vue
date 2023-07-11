<template>
    <div class="options">
        <div @click="$emit('delete')" class="option">
            <span class="material-symbols-outlined">delete</span>
            <p>Delete recipe</p>
        </div>
        <div class="option" @click="handleEdit">
            <span class="material-symbols-outlined">edit</span>
            <p>Edit recipe</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineEmits(['delete'])

const router = useRouter()

const handleEdit = () => {
    router.push({name: 'Edit'})
}

</script>

<style lang="css" scoped>
    .options {
        position: absolute;
        background-color: var(--card-color);
        padding: .5rem;
        right: 1rem;
        top: 4rem;
        border-radius: var(--border-radius-m);
        box-shadow: var(--box-shadow);
    }
    .options .material-symbols-outlined {
        font-size: 20px;
    }
    .option {
        display: flex;
        gap: .5rem;
    }
    .option:not(:first-of-type) {
        margin-top: .5rem;
        border-top: 1px solid var(--background-color);
        padding-top: .5rem;
    }
</style>