<template>
    <div class="page">
        <header>
            <span class="material-symbols-outlined">keyboard_backspace</span>
            <h3>Mijn Account</h3>
            <span class="material-symbols-outlined">more_vert</span>
        </header>
        <div class="profile">
            <span class="material-symbols-outlined">account_circle</span>
            <p class="displayName">{{currentUser?.displayName}}</p>
            <p class="title">Hobby Cook</p>
        </div>
        <div class="preferences">
            <p class="heading">Preferences</p>
            <ul>
                <li class="box">
                    <span class="material-symbols-outlined">bedtime</span>
                    <p>Dark mode</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </li>
            </ul>
        </div>
        <div class="box logout" @click="handleSignOut">
            <p>Logout</p>
            <span class="material-symbols-outlined">logout</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useSignOut from '@/composables/auth/useSignOut';
import { useCurrentUserStore } from '@/stores/currentUser';


const router = useRouter()

const {currentUser} = useCurrentUserStore()
const { signout, error } = useSignOut()

const handleSignOut = async () => {
    await signout()

    if (!error.value) {
        router.push({name: 'Login'})
    }
}
</script>

<style lang="css" scoped>
    header {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }
    .profile {
        text-align: center;
        margin: 2rem;
    }
    .profile .material-symbols-outlined {
        font-size: 100px;
        color: var(--font-inactive);
    }
    .displayName {
        font-weight: bold;
        font-size: 1.3rem;
    }
    .title {
        font-size: 14px;
        margin-top: .2rem;
        color: var(--font-inactive);
    }
    li {
        display: flex;
        justify-content: start;
        gap: .5rem;
        align-items: center;
    }
    label {
        margin-left: auto;
    }
     
    .heading {
        margin: 0 0 .5rem 1rem;
        font-size: 14px;
        font-weight: 500;
    }
    .logout {
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        align-items: center;
        margin-top: 2rem;
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 42px;
        height: 24px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;  
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: var(--primary-color); 
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--primary-color);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(100%);
        -ms-transform: translateX(100%);
        transform: translateX(100%);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>