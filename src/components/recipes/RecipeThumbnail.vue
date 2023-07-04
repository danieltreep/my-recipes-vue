<template>
    <div class="recipeThumb box">
        <img src="@/assets/food.jpg" alt="">
        <div class="text">
            <h3>Brocolli pasta met pasta en meer pasta</h3>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic! Modi dicta, id placeat praesentium eum odit beatae quam magni nihil fuga. Molestias facilis laborum facere soluta totam architecto modi!</p>
            <div class="time">
                <span class="material-symbols-outlined">access_time</span>
                <p>15 min</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
    .recipeThumb {
        padding: 0;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1.8fr 3fr;
        /* height: 110px; */
        margin-bottom: 1rem;
    }
    .text {
        padding: .7rem;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        gap: .3rem;
    }
    h3 {
        font-size: 16px;
        font-family: serif;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .description {
        -webkit-line-clamp: 2;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        font-size: 12px;
        color: var(--font-color);
    }
    .time {
        display: flex;
        align-items: center;
        font-size: 12px;
        gap: .2rem;
        align-items: center;
    }
    .time .material-symbols-outlined{
        font-size: 18px;
        color: var(--primary-color);
    }
    img {
        object-fit: cover;
        object-position: center;
        height: 100%;
    }
</style>