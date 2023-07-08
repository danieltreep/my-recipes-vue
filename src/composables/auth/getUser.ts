import { ref } from "vue";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, type User } from "firebase/auth";

// Start with a user if he is logged in
const user = ref<any>(auth.currentUser)

// Every time the auth changes updated it with the new user
onAuthStateChanged(auth, _user => {
    user.value = _user
    console.log('current user: ', _user)
})

const getUser = () => {
    return { user }
}

export default getUser