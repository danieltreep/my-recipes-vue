import { db } from '@/firebase/config'
import { deleteDoc, doc } from 'firebase/firestore';

const useDeleteDocument = async (uid: string, recipeId: string) => {
    
    const docRef = doc(db, "users", uid, 'recipes', recipeId)

    await deleteDoc(docRef)
        .then(() => {
            console.log('deleted recipe')
        }).catch((error) => {
            console.log(error.message)
        });
}

export default useDeleteDocument