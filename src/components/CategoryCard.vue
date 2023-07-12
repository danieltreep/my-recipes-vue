<template>
    <router-link :to="{name: 'Category', params: {category: String(cat)}}" class="card">
        <img :src="imageUrl">
        <p>{{ cat.charAt(0).toUpperCase() }}{{ cat.slice(1) }}</p>
    </router-link>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    cat: String
}>()

const imageUrl = ref<string>(new URL(`/src/assets/vectors/${props.cat}.svg`, import.meta.url).href)

</script>

<style lang="css" scoped>
    .card {
        /* height: ; */
        width: 100%;
        aspect-ratio: 2/2.5;
        background-color: var(--card-color);
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 1rem 1rem;
        justify-content: end;
        gap: .5rem;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius-m);
        transition: .1s;
    }
    .card p {
        color: var(--font-color);
        font-weight: 500;
        word-wrap: break-word;
    }
    img {
        height: 100%;
    }
    img:last-of-type {
        height: 80%;
    }
    .card:active {
        transform: translateY(5px);
        box-shadow: none;
    }
</style>