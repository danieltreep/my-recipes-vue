import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref } from 'vue'

const error = ref(null)
const isPending = ref(false)

const signup = async (email: string, password: string, displayName: string) => {

    error.value = null
    isPending.value = true

    await createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            error.value = null
            isPending.value = false
    
            console.log(userCredential.user)
        })
        .catch(err => {
            error.value = err.message
            console.log('could not sign user up')
        })

    // Update user profile
    await updateProfile(auth.currentUser, {displayName})
        .then(() => console.log('user updated!'))
        .catch(() => console.log('user could not be updated'))

}

const useSignup = () => {

    return { signup, error, isPending }
}

export default useSignup