<template>
    <li class="step box">
        <div class="info">
            <p  class="number">1.</p>
            <!-- <span class="material-symbols-outlined">edit</span> -->
        </div>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto rem quae praesentium explicabo corrupti culpa velit, similique, aliquid provident, excepturi laboriosam harum inventore exercitationem dolores. Saepe dicta consequuntur illum.</p>
        </div>
    </li>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
    li {
        display: grid;
        grid-template-columns: 1fr 7fr;
        align-items: start;
        padding: 1.2rem;
        color: var(--font-color);
    }
    .step .material-symbols-outlined {
        font-size: 16px;
        color: var(--font-inactive);
    }
    .number {
        font-size: 32px;
        font-weight: bold;
        font-family: serif;
        color: var(--secondary-color);
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
</style>