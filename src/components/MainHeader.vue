<template>
    <header>
        <div class="flex">
            <img src="@/assets/logo.svg">
            <p>Hi {{currentUser.displayName}}.</p>
        </div>
        <SearchBar />
        <h1>Kies je categorie</h1>
    </header>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import { useCurrentUserStore } from '@/stores/currentUser';

const {currentUser} = useCurrentUserStore()

</script>

<style lang="css" scoped>
.flex {
    display: flex;
    position: relative;
    margin: 1rem 0;
}
img {
    max-height: 60px;
    width: fit-content;
    margin: 0 auto;
}
h1 {
    margin-bottom: 1rem;
}
p {
    font-family: 'Playfair Display', serif;
    position: absolute;
    right: 0;
    bottom: .6rem;
    font-size: 14px;
    font-weight: 600;
}
</style>