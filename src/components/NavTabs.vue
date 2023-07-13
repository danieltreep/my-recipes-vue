<template>
    <nav>
        <router-link :to="{name: 'Recipes'}" >
            <div :class="route.path.includes('recipes') ? 'router-link-active' : ''">
                <span class="material-symbols-outlined">menu_book</span>
                <p>Recepten</p>
            </div>
        </router-link>
        <router-link :to="{name: 'NewRecipe'}">
            <div> 
                <span class="material-symbols-outlined">add_circle</span>
                <p>Nieuw</p>
            </div>
        </router-link>
        <router-link :to="{name: 'Favorites'}">
            <div>
                <span class="material-symbols-outlined">favorite</span>
                <p>Favorieten</p>
            </div>
        </router-link>
        <router-link :to="{name: 'Account'}">
            <div>
                <span class="material-symbols-outlined">account_circle</span>
                <p>Account</p>
            </div>
        </router-link>
    </nav>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<style lang="css" scoped>
    nav {
        display: flex;
        justify-content: space-around;
        background-color: white;
        width: 100%;
        position: fixed;
        bottom: 0;
        /* padding: 0 1.5rem ; */
        box-shadow: 0 -4px 4px 0 #00000015;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        max-width: 450px;
    }
    nav a {
        text-align: center;
        padding: 1.2rem;
        font-weight: normal;
        color: var(--font-inactive);
        font-size: 12px;
    }
    .router-link-active {
        color: var(--primary-color);
        fill: var(--primary-color);
        font-weight: bold;
    }
   
    .material-symbols-outlined {
        font-size: 30px;
    }
</style>