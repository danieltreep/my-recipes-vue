import { ref } from 'vue'
import { defineStore } from 'pinia'
import getUser from '@/composables/auth/getUser';

const { user } = getUser()

export const useCurrentUserStore = defineStore('currentUser', () => {
  const currentUser = ref(user)

  return { currentUser }
})