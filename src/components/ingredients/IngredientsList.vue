<template>
    <ul>
        <IngredientsListItem />
    </ul>
</template>

<script setup lang="ts">
import IngredientsListItem from './IngredientsListItem.vue';

</script>

<style lang="css" scoped>
    ul {
        background-color: var(--card-color);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius-m);
        padding-left: 0;
    }
    
    li:not(:last-child) {
        border-bottom: 3px solid var(--background-color);
    }
</style>