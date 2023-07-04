<template>
    <div class="noRecipes">
        <p>Er zijn nog geen recepten in deze categorie</p>
        <button @click.prevent="handleClick" class="box">Maak een nieuw recept aan</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const handleClick = () => {
    router.push({name: 'NewRecipe'})
}
</script>

<style lang="css" scoped>
    .noRecipes {
        padding: 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    button {
        border: 1px solid var(--primary-color);
    }
</style>