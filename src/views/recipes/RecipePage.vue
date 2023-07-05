<template>
    <div>
        <img src="@/assets/food.jpg" alt="">
        <div class="page">
            <header>
                <span class="material-symbols-outlined" @click="router.go(-1)">keyboard_backspace</span>
                <span 
                    class="material-symbols-outlined fav" 
                    @click="handleFav"
                    v-if="!fav"
                >favorite_border</span>
                <span 
                    class="material-icons fav" 
                    @click="handleFav"
                    v-if="fav" 
                >favorite</span>
                <span class="material-symbols-outlined">more_vert</span>
            </header>
            <SingleRecipe :recipe="singleRecipe" v-if="singleRecipe"/>
            <!-- Suspense -->
        </div>
    </div>
</template>

<script setup lang="ts">
import getDocument from '@/composables/recipes/getDocument';
import SingleRecipe from '@/components/recipes/SingleRecipe.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import setFavorite from '@/composables/recipes/setFavorite'

const singleRecipe = ref<any>(null)
const fav = ref<boolean>(false)

const props = defineProps<{
    id: string
}>()

onMounted(async () => {
    const {recipe} = await getDocument(props.id)
    singleRecipe.value = recipe.value
    fav.value = recipe.value.favorite
})

const router = useRouter()

const handleFav = async () => {
    fav.value = !fav.value
    await setFavorite(props.id, fav.value)
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