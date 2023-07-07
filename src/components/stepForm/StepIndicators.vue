<template>
    <div class="steps">
        <div class="step" :class="step >= 1 ? 'active' : ''">
            <div class="circle">
                <span class="material-symbols-outlined">info</span>
            </div>
            <p>Details</p>
        </div>
        <div class="step" :class="step >= 2 ? 'active' : ''">
            <div class="circle">
                <span class="material-symbols-outlined">bakery_dining</span>
            </div>
            <p>Ingredienten</p>
        </div>
        <div class="step" :class="step === 3 ? 'active' : ''">
            <div class="circle">
                <span class="material-symbols-outlined">format_list_bulleted</span>
            </div>
            <p>Stappen</p>
        </div>
        <div class="bar">
            <div class="progress" :style="styles"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onUpdated, ref, watch } from 'vue';
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';

const { step } = storeToRefs(useStepStore())
const styles = ref({})

watch(step, () => {
    if (step.value === 1) {
        styles.value = {
            width: '15%'
        }
    } else if (step.value === 2) {
        styles.value = {
            width: '60%'
        }
    } else {
        styles.value = {
            width: '100%'
        }
    }
})

</script>

<style lang="css" scoped>
    
.steps {
    display: flex;
    position: relative;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
    gap: 2.5rem;
}
.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    gap: .5rem;
    color: var(--font-inactive);
    font-weight: 500;
    font-size: 12px;
}
.circle {
    border: 1px solid var(--font-inactive);
    padding: .3rem;
    border-radius: 50%;
    display: flex;
    background-color: var(--background-color);
}
.bar {
    height: 3px;
    width: 90%;
    background-color: lightgrey;
    border-radius: 8px;
    position: absolute;
    top: 13px;
}
.progress {
    height: 3px;
    width: 30px;
    background-color: var(--primary-color);
    transition: .3s;
}
.material-symbols-outlined {
    font-size: 16px;
}
.active {
    color: var(--font-color);
    transition: .5s;
}
.active .circle {
    border-color: var(--primary-color);
    background-color: var(--primary-color);
    color: white;
}
</style>