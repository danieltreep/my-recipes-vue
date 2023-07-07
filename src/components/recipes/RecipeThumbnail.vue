<template>
    <router-link :to="{name: 'Recipe', params: {category: recipe.category, id: recipe.id}}">
        <div class="recipeThumb box">
            <img :src="image" alt="">
            <div class="text">
                <h3>{{ recipe.title.charAt(0).toUpperCase() }}{{ recipe.title.slice(1) }}</h3>
                <p class="description">{{ recipe.description?.charAt(0).toUpperCase() }}{{ recipe.description?.slice(1) }}</p>
                <div class="details">
                    <div class="time">
                        <span class="material-symbols-outlined">access_time</span>
                        <p>{{recipe.time}} min</p>
                    </div>
                    <div class="time">
                        <span class="material-symbols-outlined">person</span>
                        <p>{{recipe.people}} personen</p>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import type { Recipe } from '@/types/Recipe';
import { ref, onMounted } from 'vue';

const props = defineProps<{
    recipe: Recipe
}>()

const image = ref('')

onMounted(() => {
    if (props.recipe.imageUrl) {
        image.value = props.recipe.imageUrl
    } else {
        image.value = new URL(`/src/assets/categories/${props.recipe.category}.jpg`, import.meta.url).href
    }
})
</script>

<style lang="css" scoped>
    .recipeThumb {
        padding: 0;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1.5fr 3fr;
        max-height: 110px;
        min-height: 100px;
        margin-bottom: 1rem;
    }
    .text {
        padding: .7rem;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: .3rem;
    }
    h3 {
        font-size: 16px;
        -webkit-line-clamp: 2;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    p {
        color: var(--font-color);
    }
    .description {
        -webkit-line-clamp: 2;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        font-size: 12px;
        color: var(--font-color);
    }
    .time {
        display: flex;
        align-items: center;
        font-size: 12px;
        gap: .2rem;
        align-items: center;
    }
    .time .material-symbols-outlined{
        font-size: 18px;
        color: var(--primary-color);
    }
    img {
        object-fit: cover;
        object-position: center center;
        height: 100%;
    }
    a {
        color: inherit;
    }
    .details {
        display: flex;
        gap: .5rem;
    }
</style>