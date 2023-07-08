// Add to a collection
import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import type { Recipe } from "@/types/Recipe";
import getUser from "../auth/getUser";

const {user}: any = getUser()

const useUpdateDocument = (col: string) => {
    const error = ref(null)
    const isPending = ref<boolean>(true)

    const updateDocument = async (document: Recipe) => {
        error.value = null

        try {
            // Immediately add document id 
            await updateDoc(doc(db, "users", user.value.uid, col, document.id), document)

            isPending.value = false
            
        } catch (err: any) {
            error.value = err.message
            console.log(err.message)
            isPending.value = false
        }
    }
    
    return { error, updateDocument, isPending}
}

export default useUpdateDocument