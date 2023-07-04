// Add to a collection

import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import type { Recipe } from "@/types/Recipe";

const useCollection = (col: string) => {
    const error = ref(null)
    const isPending = ref<boolean>(true)

    const addDocument = async (doc: Recipe) => {
        error.value = null

        try {
            const response = await addDoc(collection(db, col), doc)
            isPending.value = false
            return response
        } catch (err: any) {
            error.value = err.message
            console.log(err.message)
            isPending.value = false
        }
    }
    
    return { error, addDocument, isPending}
}

export default useCollection