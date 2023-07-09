<template>
    <div class="startPage">
        <div class="container">
            <img src="@/assets/logo.svg" alt="">
            <form @submit.prevent="handleSubmit" v-if="!recover">
                <div class="inputField" >
                    <input type="text" placeholder="Email" v-model="email">
                    <span class="material-symbols-outlined">email</span>
                </div>
                <div class="inputField" >
                    <input type="password" placeholder="Wachtwoord" v-model="password">
                    <span class="material-symbols-outlined">lock</span>
                </div>
                <p class="vergeten" @click="recover = !recover">Wachtwoord vergeten?</p>
                
                <button>
                    <p>Login</p>
                    <span class="material-symbols-outlined">login</span>
                </button>
                <p>Heb je nog geen account? <router-link :to="{name: 'Signup'}">Signup</router-link></p>
            </form>
            <ForgotPassword v-if="recover"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import ForgotPassword from '@/components/ForgotPassword.vue';
import useLogin from '@/composables/auth/useLogin';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { login, error, isPending } = useLogin()
const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()
const recover = ref(false)

const handleSubmit = async () => {
    await login(email.value, password.value)

    if (!error.value) {
        router.push({name: 'Recipes'})
    } 
}

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
        justify-content: space-around;
    }
    .container {
        /* max-width: 70%;
        width: 100%;
        margin: 0 auto; */
        text-align: center;
        padding: 3rem;
        color: var(--font-light);
        /* margin-bottom: 5rem; */
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
        margin-bottom: 2rem;
    }
    input {
        border: none;
        width: 100%;
        background-color: transparent;
        outline: transparent;
        color: var(--font-light);
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