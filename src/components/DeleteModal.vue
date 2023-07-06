<template>
    <Teleport to=".modals">
        <div class="outerModal">

            <div class="innerModal">
                <p>Weet je zeker dat je je account wilt verwijderen?</p>
                <div class="buttons">
                    <button class="weigeren" @click="$emit('cancel')">Afbreken</button>
                    <button class="verwijderen" @click="$emit('delete')">Verwijderen</button>
                </div>
            </div> 
        </div>
    </Teleport>
</template>

<script setup lang="ts">

defineEmits(['delete', 'cancel'])

</script>

<style lang="css" scoped>
    .innerModal {
        background-color: white;
        padding: 1.2rem;
        border-radius: var(--border-radius-m);
        width: 250px;
        text-align: center;
    }
    .buttons {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
    .buttons button {
        border: none;
        padding: .5rem;
        border-radius: var(--border-radius-s);
        width: 100%;
        text-align: center;
        font-weight: 500;
    }
    .verwijderen {
        background-color: lightcoral;
    }
    .outerModal {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-color: #00000060;
    }
</style>