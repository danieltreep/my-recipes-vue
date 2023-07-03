<template>
    <div>
        <div class="addIngredient">
            <div class="box">
                <input type="text" placeholder="Ingredient">
            </div>
            <div class="box">
                <input type="number" placeholder="40" class="hoeveelheid" >
                <select>
                    <option value="mg">mg</option>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="l">l</option>
                    <option value="stuks">stuks</option>
                </select>
            </div>
            <button class="box add">+</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css">
    .addIngredient {
        display: grid;
        grid-template-columns: 5fr 4fr 1fr;
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
    input {
        width: fit-content;
        border: none;
        border-bottom: 1px solid var(--background-color);
        width: 100%;
    }
    select {
        border: none;
        padding-right: .5rem;
        text-align: end;
    }
    .add {
        border: 1px solid var(--secondary-color);
    }
</style>