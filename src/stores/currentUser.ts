import { ref } from 'vue'
import { defineStore } from 'pinia'
import getUser from '@/composables/auth/getUser';

export const useCurrentUserStore = defineStore('currentUser', () => {
  
  const { user } = getUser()

  const currentUser = ref<any>(user)
  
  const resetCurrentUser = () => {
    currentUser.value = null
  }

  return { currentUser, resetCurrentUser }
})