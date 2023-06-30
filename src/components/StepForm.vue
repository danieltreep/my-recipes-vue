<template>
    <div class="steps">
        <div class="step">
            <div class="circle">
                <span class="material-symbols-outlined">info</span>
            </div>
            <p>Details</p>
        </div>
        <div class="step">
            <div class="circle">
                <span class="material-symbols-outlined">bakery_dining</span>
            </div>
            <p>Ingredienten</p>
        </div>
        <div class="step">
            <div class="circle">
                <span class="material-symbols-outlined">format_list_bulleted</span>
            </div>
            <p>Stappen</p>
        </div>
        <div class="bar">
            <div class="progress"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Steps based on props, url??
</script>

<style lang="css" scoped>
.steps {
    display: flex;
    position: relative;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
    gap: 1.5rem;
}
.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    gap: .5rem;
    font-size: 12px;
}
.circle {
    border: 1px solid var(--primary-color);
    padding: .5rem;
    border-radius: 50%;
    display: flex;
    background-color: var(--background-color);
    color: var(--primary-color);
}
.bar {
    height: 5px;
    width: 90%;
    background-color: lightgrey;
    border-radius: 8px;
    position: absolute;
    top: 30%;
}
.progress {
    height: 5px;
    width: 50px;
    background-color: var(--primary-color);
}
</style>