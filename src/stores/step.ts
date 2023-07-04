import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStepStore = defineStore('step', () => {
  
    const step = ref(1)
    
    const increment = () => {
        step.value++
    }

    const decrement = () => {
        step.value--
    }

    return { step, increment, decrement }
})
