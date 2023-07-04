import { signOut } from "firebase/auth";
import { auth } from '@/firebase/config'
import { ref } from "vue";

const error = ref(null)

const signout = async () => {
    
    error.value = null

    await signOut(auth)
        .then(() => {
            console.log('user signed out')
        }).catch((err) => {
            error.value = err
        });
}

const useSignOut = () => {
    return { signout, error }
}

export default useSignOut