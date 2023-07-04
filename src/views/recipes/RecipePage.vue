<template>
    <div>
        <img src="@/assets/food.jpg" alt="">
        <div class="page">
            <header>
                <span class="material-symbols-outlined" @click="router.go(-1)">keyboard_backspace</span>
                <span class="material-symbols-outlined fav">favorite_border</span>
                <span class="material-symbols-outlined">more_vert</span>
            </header>
            <div class="information">
                <div class="detailsSection">
                    <div class="detail">
                        <span class="material-symbols-outlined">room_service</span>
                        <p>{{category}}</p>
                    </div>
                    <div class="detail">
                        <span class="material-symbols-outlined">access_time</span>
                        <p>25 min</p>
                    </div>
                </div>
                <h1>Kipsate met zure bloemkool</h1>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe inventore officiis, qui dicta ex. Dolorum veritatis aliquam sint perferendis labore nesciunt repudiandae fugit ipsa sequi! Voluptates illo sed qui.</p>
            </div>
            <div class="tagsSection">
                <div class="tagsHeader">
                    <p>Tags</p>
                </div>
                <div class="tags">
                    <div class="tag">
                        <p>Zoet</p>
                    </div>
                </div>
            </div>
            <div class="persons box">
                <span class="material-symbols-outlined">person</span>
                <p>Aantal personen</p>
                <div class="counter">
                    <span>-</span>
                    <p>4</p>
                    <span>+</span>
                </div>
            </div>
            <div>
                <div class="links">
                    <p @click="tab = 'i'" :class="tab === 'i' ? 'active' : ''">Ingredienten</p>
                    <p @click="tab = 's'" :class="tab === 's' ? 'active' : ''">Stappen</p>
                </div>
                <IngredientsList v-show="tab === 'i'"/>
                <ul v-show="tab === 's'">
                    <SingleStep />
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IngredientsList from '@/components/ingredients/IngredientsList.vue'
import SingleStep from '@/components/steps/SingleStep.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps<{
    category: string
}>()

const tab = ref<string>('i')

const router = useRouter()

</script>

<style lang="css" scoped>
    .page {
        border-radius: var(--border-radius-l);
        background-image: linear-gradient(#ffffff90, var(--background-color) 80px);
        backdrop-filter: blur(10px);
        transform: translateY(-100px);
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

    /* Information section */
    .information {
        margin: 2rem 0;
    }
    .detailsSection, .detail {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 12px;
    }
    .detailsSection {
        margin-bottom: .3rem;
    }
    .detail {
        gap: .3rem;
    }
    .detail .material-symbols-outlined {
        font-size: 18px;
        color: var(--primary-color);
    }
    h1 {
        font-size: 28px;
    }
    .description {
        font-size: 14px;
    }
    .persons {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin: 2rem 0;
    }
    .persons .material-symbols-outlined {
        color: var(--primary-color);
    }
    .counter {
        display: flex;
        gap: .5rem;
        margin-left: auto;
    }
    .counter span {
        background-color: #F8F8F8;
        height: 20px;
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius-s);
        font-size: 1.1rem;
    }
    .links {
        display: flex;
        justify-content: space-around;
        color: var(--font-inactive);
    }
    ul {
        margin-top: 1rem;
    }
    .active {
        color: var(--primary-color);
        font-weight: 500;
    }

    .tag {
        border: 1px solid var(--secondary-color);
        width: fit-content;
        padding: .2rem .5rem;
        border-radius: 25px;
    }
    .tagsHeader {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: .5rem;
    }
</style>