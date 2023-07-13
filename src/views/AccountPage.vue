<template>
    <div class="page" @click.capture="moreOptions = false">
        <header>
            <h3>Mijn Account</h3>
            <span class="material-symbols-outlined" @click="moreOptions = !moreOptions">more_vert</span>
            <AccountOptions @click="openModal" v-if="moreOptions" />
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
        <DeleteModal v-if="modal" @delete="handleDelete" @cancel="closeModal"/>
    </div>
</template>

<script setup lang="ts">

// External
import { useRouter } from 'vue-router';
import { ref } from 'vue';

// Stores
import { useCurrentUserStore } from '@/stores/currentUser';
import { useNewRecipeStore } from '@/stores/newRecipe';

// Functions
import useDeleteUser from '@/composables/auth/deleteUser'
import useSignOut from '@/composables/auth/useSignOut';

// Components 
import AccountOptions from '@/components/AccountOptions.vue';
import DeleteModal from '@/components/DeleteModal.vue';

const moreOptions = ref<boolean>(false)
const modal = ref<boolean>(false)
const router = useRouter()

const {currentUser, resetCurrentUser} = useCurrentUserStore()
const { signout, error } = useSignOut()
const { resetRecipe } = useNewRecipeStore()

const handleSignOut = async () => {
    await signout()
        .then(() => {
            router.push({name: 'Login'})
            resetCurrentUser()
            resetRecipe()
        })
}

const openModal = () => {
    modal.value = true
    moreOptions.value = false
}

const closeModal = () => {
    modal.value = false
}

const handleDelete = async () => {
    await useDeleteUser()
        .then(() => {
            console.log('succes from handleDelete')
            modal.value = false
            resetCurrentUser()
            router.push({name: 'Login'})
        })
}

</script>

<style lang="css" scoped>
    header {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        position: relative;
    }
    header span {
        position: absolute;
        right: 0;
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