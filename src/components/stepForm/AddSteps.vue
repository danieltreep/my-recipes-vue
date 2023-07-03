<template>
    <div class="addStep">        
        <textarea placeholder="Stap" class="box"></textarea>
        
        <button class="box add">Voeg stap toe</button>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
    .addStep {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-top: .5rem;
    }
    .box {
        background-color: var(--card-color);
        padding: .7rem;
        border-radius: var(--border-radius-m);
        box-shadow: var(--box-shadow);
        border: none;
        display: flex;
    }
    textarea {
        width: 100%;
    }
    button {
        width: fit-content;
        border: 1px solid var(--secondary-color);
    }
</style>