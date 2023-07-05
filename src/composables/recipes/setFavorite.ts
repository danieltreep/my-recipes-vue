import { db } from "@/firebase/config";
import { updateDoc, doc } from "firebase/firestore";
import getUser from "../auth/getUser";

const {user}: any = getUser()

const setFavorite = async (id: string, value: boolean) => {
    
    const docRef = doc(db, "users", user.value.uid, 'recipes', id)
    
    await updateDoc(docRef, {
        favorite: value
    })

}

export default setFavorite