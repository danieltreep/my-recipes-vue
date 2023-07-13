<template>
    <div class="options">
        <div @click="$emit('delete')" @keydown.enter="$emit('delete')" class="option" tabindex="0">
            <span class="material-symbols-outlined">delete</span>
            <p>Verwijderen</p>
        </div>
        <div class="option" @click="handleEdit" @keydown.enter="handleEdit" tabindex="0">
            <span class="material-symbols-outlined">edit</span>
            <p>Aanpassen</p>
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
        /* padding: .5rem; */
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
        cursor: pointer;
        padding: .5rem;
    }
    .option:hover {
        background-color: bisque;
    }
    .option:not(:first-of-type) {
        border-top: 1px solid var(--background-color);
        padding-top: .5rem;
    }
</style>