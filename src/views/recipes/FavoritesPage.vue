<template>
    <div>
        <img src="@/assets/favorites.jpg" alt="">
        <div class="page">
            <header>
                <span class="material-symbols-outlined">favorite</span>
                <h1>Favorieten</h1>
            </header>
            <!-- <div class="tagsSection">
                <div class="tagsHeader">
                    <p>Filter by tags</p>
                    <span class="material-symbols-outlined">filter_list</span>
                </div>
                <div class="tags">
                    <div class="tag">
                        <p>Zoet</p>
                    </div>
                </div>
            </div> -->
            <RecipeList :recipes="favorites" v-if="favorites.length"/>
            <div v-else class="niks">
                <p>Je hebt nog geen favorieten</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RecipeList from '@/components/recipes/RecipeList.vue'
import { useRecipesStore } from '@/stores/recipes';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue'

// const recipes = ref<any>([])
const { favorites } = storeToRefs(useRecipesStore())
const { fetchRecipes } = useRecipesStore()

onMounted(async () => {
    await fetchRecipes();
})

</script>

<style lang="css" scoped>
    .page {
        border-radius: var(--border-radius-l);
        background-image: linear-gradient(#ffffff90, var(--background-color) 80px);
        backdrop-filter: blur(10px);
        transform: translateY(-100px);
    }
    header {
        text-align: center;
        padding: 2rem;
    }
    header span {
        color: var(--primary-color);
        font-size: 30px;
    }
    .tag {
        border: 1px solid var(--secondary-color);
        width: fit-content;
        padding: .2rem .5rem;
        border-radius: 25px;
    }
    .tagsSection {
        border-bottom: 1px solid #D9D9D9;
        padding: 1rem 0;
        margin-top: 2rem;
    }
    .tagsHeader {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 500;
    }
    img {
        height: 300px;
        object-fit: cover;
        filter: brightness(80%);
    }
    .niks {
        margin-top: 2rem;
    }
</style>