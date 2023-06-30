<template>
    <form class="search">
        <span class="material-symbols-outlined">search</span>
        <input type="text" v-model="searchTerm">
        <span class="material-symbols-outlined" v-if="searchTerm" @click="handleClear">cancel</span>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchTerm = ref<string>('')

const handleClear = () => {
    searchTerm.value = ''
}

</script>

<style lang="css" scoped>
    .search {
        background-color: var(--card-color);
        border-radius: var(--border-radius-m);
        display: flex;
        justify-content: space-between;
        padding: .3rem .5rem;
        margin: 1rem 0 2rem;
    }
    .search input {
        width: 100%;
        outline: none;
        border: none;
    }
    .material-symbols-outlined {
        font-size: 1.5rem;
        color: var(--font-inactive);
    }

</style>