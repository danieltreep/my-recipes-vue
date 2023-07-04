import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const getCollection = async (col: string, category: string) => {
    const documents = ref<Object[]>([])
    const error = ref(null)
    let results: Array<any> = []

    // Register the firestore collection reference
    const q = query(collection(db, col), where("category", "==", category))
    
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id})
    })

    documents.value = results
    error.value = null
    console.log(documents.value)

    return { documents, error }
}

export default getCollection