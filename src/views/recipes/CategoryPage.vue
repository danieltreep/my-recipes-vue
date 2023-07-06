<template>
    <div>
        <img :src="imageUrl" alt="">
        <div class="page">
            <header>
                <span class="material-symbols-outlined" @click="router.go(-1)">keyboard_backspace</span>
                <div class="hero">
                    <span class="material-symbols-outlined">room_service</span>
                    <h1>{{ category.charAt(0).toUpperCase() }}{{ category.slice(1) }}</h1>
                </div>
            </header>
            <div class="tagsSection">
                <div class="tagsHeader">
                    <p>Filter by tags</p>
                    <span class="material-symbols-outlined">filter_list</span>
                </div>
                <div class="tags">
                    <div class="tag">
                        <p>Zoet</p>
                    </div>
                </div>
            </div>
            <RecipeList :recipes="recipes" v-if="recipes"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import RecipeList from '@/components/recipes/RecipeList.vue'
import getCollection from '@/composables/recipes/getCollection'
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const recipes = ref<any>([])

const props = defineProps<{
    category: string
}>()

const imageUrl = ref<string>(new URL(`/src/assets/categories/${props.category}.jpg`, import.meta.url).href)

onMounted(async () => {
    const { documents, error } = await getCollection('recipes', 'category', props.category)
    recipes.value = documents.value
})

const router = useRouter()

</script>

<style lang="css" scoped>
    .page {
        border-radius: var(--border-radius-l);
        background-image: linear-gradient(#ffffff90, var(--background-color) 80px);
        backdrop-filter: blur(10px);
        transform: translateY(-100px);
    }
    .hero {
        text-align: center;
    }
    h1 {
        font-weight: 900;
    }
    .hero span {
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
</style>