import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import getUser from "../auth/getUser";
import type { Recipe } from "@/types/Recipe";

const {user}: any = getUser()

const getRecipes = async () => {
    const documents = ref<Recipe[]>([])
    const error = ref(null)
    let results: Array<any> = []    
    
    const querySnapshot = await getDocs(collection(db, "users", user.value.uid, 'recipes'))
    querySnapshot.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id})
    })

    documents.value = results
    error.value = null

    return { documents, error }
}

export default getRecipes