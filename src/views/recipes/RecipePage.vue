<template>
    <div>
        <img :src="imageUrl" alt="">
        <div class="page">
            <header>
                <span class="material-symbols-outlined" @click="router.go(-1)">keyboard_backspace</span>
                <span 
                    class="material-symbols-outlined fav" 
                    @click="handleFav"
                    v-if="!selectedRecipe.favorite"
                >favorite_border</span>
                <span 
                    class="material-icons fav" 
                    @click="handleFav"
                    v-if="selectedRecipe.favorite" 
                >favorite</span>
                <span class="material-symbols-outlined" @click="showOptions = !showOptions">more_vert</span>
                <RecipeOptions v-if="showOptions" @delete="handleDelete"/>
            </header>
            <SingleRecipe :recipe="selectedRecipe" v-if="selectedRecipe"/>
            <!-- Suspense -->
        </div>
    </div>
</template>

<script setup lang="ts">
import getDocument from '@/composables/recipes/getDocument';
import setFavorite from '@/composables/recipes/setFavorite'
import SingleRecipe from '@/components/recipes/SingleRecipe.vue';
import RecipeOptions from '@/components/recipes/RecipeOptions.vue';

import { useSelectedRecipeStore } from '@/stores/currentRecipe';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import useDeleteDocument from '@/composables/recipes/deleteDocument'
import { useRecipesStore } from '@/stores/recipes';

const { selectedRecipe } = storeToRefs(useSelectedRecipeStore())

const showOptions = ref(false)

const props = defineProps<{
    id: string
}>()

// Store image url
const imageUrl = ref('')

onMounted(async () => {
    await getDocument(props.id)

    if (selectedRecipe.value.imageUrl) {
        imageUrl.value = selectedRecipe.value.imageUrl
    } else if (!selectedRecipe.value.imageUrl) {
        imageUrl.value = new URL(`/src/assets/categories/${selectedRecipe.value.category}.jpg`, import.meta.url).href
    }
})

const router = useRouter()
const { setFavoriteStore } = useRecipesStore()

const handleFav = async () => {
    setFavoriteStore(props.id, !selectedRecipe.value.favorite)
    selectedRecipe.value.favorite = !selectedRecipe.value.favorite
    await setFavorite(props.id, selectedRecipe.value.favorite)
}

const handleDelete = async () => {
    console.log('deleted')
    await useDeleteDocument(selectedRecipe.value.id)
    router.push({name: 'Recipes'})
}

</script>

<style lang="css" scoped>
    .page {
        border-radius: var(--border-radius-l);
        background-image: linear-gradient(#ffffff90, var(--background-color) 80px);
        backdrop-filter: blur(10px);
        transform: translateY(-100px);
        min-height: 50vh;
    }

    img {
        height: 300px;
        object-fit: cover;
        position: relative;
        filter: brightness(80%);
    }
    header {
        display: flex;
    }
    .fav {
        margin: 0 1rem 0 auto;
    }
    .fav.material-icons {
        color: rgb(247, 63, 63);
    }
</style>