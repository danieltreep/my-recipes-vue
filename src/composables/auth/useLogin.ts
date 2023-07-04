import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '@/firebase/config'
import { ref } from "vue"

const error = ref(null)
const isPending = ref(false)

const login = async (email: string, password: string) => {
    
    error.value = null
    isPending.value = true

    await signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('user signed in'))
        .catch(err => error.value = err.message)
}

const useLogin = () => {
    return { login, error, isPending }
}

export default useLogin