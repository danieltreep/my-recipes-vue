<template>
    <div class="search">
        <span class="material-symbols-outlined">search</span>
        <input type="text" v-model="searchTerm" placeholder="Zoek een recept">
        <span class="material-symbols-outlined" v-if="searchTerm" @click="handleClear">cancel</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';

// const searchTerm = ref<string>('')
const { searchTerm } = storeToRefs(useSearchStore())

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