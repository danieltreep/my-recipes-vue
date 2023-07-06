import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import getUser from "../auth/getUser";

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
    error.value = null
    // console.log(documents.value)

    const getFavorites = () => {
        
    }

    return { documents, error, getFavorites }
}

export default getCollection