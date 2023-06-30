<template>
    <header>
        <div class="flex">
            <img src="@/assets/logo.svg">
            <p>Hi Daniël</p>
        </div>
        <SearchBar />
        <h1>Kies je categorie</h1>
    </header>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue';


</script>

<style lang="css" scoped>
.flex {
    display: flex;
    position: relative;
}
img {
    max-height: 55px;
    width: fit-content;
    margin: 0 auto;
}
h1 {
    margin-bottom: 1rem;
}
p {
    font-family: serif;
    position: absolute;
    right: 0;
    bottom: .6rem;
    font-size: 14px;
}
</style>