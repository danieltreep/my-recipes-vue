import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import getUser from "../auth/getUser";
import { useRecipesStore } from "@/stores/recipes";
import { storeToRefs } from "pinia";

const { recipes } = storeToRefs(useRecipesStore())

const {user}: any = getUser()

const getCollection = async (col: string, param: string, value: string | boolean) => {
    const documents = ref<Object[]>([])
    const error = ref(null)
    let results: Array<any> = []

    // Register the firestore collection reference
    const q = query(collection(db, "users", user.value.uid, col), where(param, "==", value))
    
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id})
    })

    documents.value = results
    recipes.value = results
    error.value = null
    // console.log(documents.value)

    return { documents, error }
}

export default getCollection