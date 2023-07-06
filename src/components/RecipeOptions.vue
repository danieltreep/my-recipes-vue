<template>
    <div class="options" @click="$emit('delete')">
        <span class="material-symbols-outlined">delete</span>
        <p>Delete recipe</p>
    </div>
</template>

<script setup lang="ts">
defineEmits(['delete'])
</script>

<style lang="css" scoped>
    .options {
        position: absolute;
        background-color: var(--card-color);
        padding: .5rem;
        display: flex;
        right: 1rem;
        top: 4rem;
        border-radius: var(--border-radius-m);
        box-shadow: var(--box-shadow);
        align-items: center;
        gap: .5rem;
    }
    .options .material-symbols-outlined {
        font-size: 20px;
    }
</style>