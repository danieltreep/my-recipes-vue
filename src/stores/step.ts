import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStepStore = defineStore('step', () => {
  
    const step = ref(1)
    
    const increment = () => {
        step.value++
    }

    const decrement = () => {
        step.value--
    }

    const resetStep = () => {
        step.value = 1
    }
    return { step, increment, decrement, resetStep }
})