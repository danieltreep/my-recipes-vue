import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const getCollection = async (col: string, category: string) => {
    const documents = ref<Array<object>>([])
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

    // const unsub = onSnapshot(collectionRef, snapshot => {
    //     console.log('snapshot')

    //     snapshot.docs.forEach(doc => {
    //         doc.data().createdAt && results.push({ ...doc.data(), id: doc.id})
    //     })

    //     documents.value = results
    //     error.value = null
    //     console.log(documents.value)

    // }, (err) => {
    //     console.log(err.message)
    //     documents.value = null
    //     error.value = 'could not fetch'
    // })

    return { documents, error }
}

export default getCollection