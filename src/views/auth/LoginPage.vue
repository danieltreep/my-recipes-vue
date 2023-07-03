<template>
    <div class="startPage">
        <div class="container">
            <img src="@/assets/logo.svg" alt="">
            <form>
                <div class="inputField">
                    <input type="text" placeholder="Gebruikersnaam">
                    <span class="material-symbols-outlined">account_circle</span>
                </div>
                <div class="inputField" >
                    <input type="password" placeholder="Wachtwoord">
                    <span class="material-symbols-outlined">lock</span>
                </div>
                <p class="vergeten">Wachtwoord vergeten?</p>
                <button>
                    <p>Login</p>
                    <span class="material-symbols-outlined">login</span>
                </button>
                <p>Heb je nog geen account? <router-link :to="{name: 'Signup'}">Signup</router-link></p>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
    .startPage {
        background-image: url('../../assets/start.jpg');
        background-size: cover;
        background-position: center center;
        height: 100vh;
        /* filter: brightness(50%); */
        background-blend-mode: darken;
        display: flex;
        flex-direction: column;
    }
    .container {
        /* max-width: 280px; */
        /* margin: 0 auto; */
        text-align: center;
        padding: 3rem;
        color: var(--font-light);
    }
    .inputField {
        background-color: #ffffff15;
        display: flex;
        border-radius: var(--border-radius-l);
        justify-content: space-between;
        margin-top: 10px;
        padding: .5rem;
        box-shadow: var(--box-shadow);
    }
    ::placeholder {
        color: var(--font-light);
    }
    img {
        width: 160px;
    }
    input {
        border: none;
        width: 100%;
        background-color: transparent;
        outline: transparent;
    }
    .vergeten {
        text-align: left;
        margin: .5rem;
        font-size: 12px;
    }
    p:nth-of-type(2) {
        font-weight: 500;
    }
    span {
        color: var(--primary-color);
    }
    button {
        border: 1px solid var(--primary-color);
        width: 100%;
        display: flex;
        border-radius: var(--border-radius-l);
        padding: .5rem;
        font-weight: bold;
        margin-block: 2rem;
        background-color: transparent;
        color: var(--primary-color);
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 1.1rem;
        box-shadow: var(--box-shadow);
    }
    button span {
        position: absolute;
        right: .5rem;
    }
    a {
        text-decoration: underline;
        color: var(--secondary-color);
    }
</style>