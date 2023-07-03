<template>
    <li class="inputGroup">
        <div class="ingredient">
            <span class="material-symbols-outlined">delete</span>
            <p>Tomaten</p>    
        </div>
        <div class="hoeveelheid">
            <p>100</p>
            <p>g</p>
        </div>
    </li>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .7rem;
    }
    .hoeveelheid {
        display: flex;
        font-size: 14px;
    }
    .ingredient {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
    .ingredient .material-symbols-outlined {
        font-size: 16px;
        color: var(--font-inactive);
    }
</style>