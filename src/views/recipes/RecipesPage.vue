<template>
    <div class="page">
        <MainHeader />
        <CategoryList v-if="!searchTerm"/>
        <SearchList v-if="searchTerm"/>
    </div>
</template>

<script setup lang="ts">
import CategoryList from '@/components/CategoryList.vue';
import MainHeader from '@/components/MainHeader.vue';
import SearchList from '@/components/recipes/SearchList.vue';
import { useRecipesStore } from '@/stores/recipes';
import { onMounted } from 'vue'

import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';

// const searchTerm = ref<string>('')
const { searchTerm } = storeToRefs(useSearchStore())

const { fetchRecipes } = useRecipesStore()

onMounted(async () => {
    await fetchRecipes();
})

</script>

<style lang="css">
    
</style>