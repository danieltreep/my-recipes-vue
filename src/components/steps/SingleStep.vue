<template>
    <li class="step">
        <div class="info">
            <p  class="number">{{ index + 1 }}.</p>
            <!-- <span class="material-symbols-outlined">edit</span> -->
        </div>
        <div>
            <p>{{ step }}</p>
        </div>
    </li>
</template>

<script setup lang="ts">
defineProps<{
    step: string,
    index: number
}>()
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
</style>