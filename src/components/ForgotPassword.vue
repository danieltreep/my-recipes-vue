<template>
    <form @submit.prevent="handleSubmit">
        <p>{{ message }}</p>
        <div class="inputField">
            <input type="text" placeholder="Email" v-model="email" >
            <span class="material-symbols-outlined">email</span>
        </div>
        <button>
            <p>Reset wachtwoord</p>
            <span class="material-symbols-outlined">send</span>
        </button>
        <p><router-link :to="{name: 'Login'}">Ga terug naar login </router-link></p>
    </form>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref<string>('')
const router = useRouter()
const message = ref('')

const handleSubmit = async () => {

    const auth = getAuth();
    await sendPasswordResetEmail(auth, email.value)
    .then(() => {
        message.value = 'Reset mail is verstuurd'
    })
    .catch((error) => {
        message.value = error.message;
    });
    
}
</script>

<style lang="css" scoped>
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
    input {
        border: none;
        width: 100%;
        background-color: transparent;
        outline: transparent;
        color: var(--font-light);
    }
    p:nth-of-type(1) {
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
        color: var(--font-light);
    }
</style>