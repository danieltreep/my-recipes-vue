import { db } from "@/firebase/config";
import { ref, type Ref } from 'vue'
import { collection, getDoc, query, doc, where } from "firebase/firestore";
import getUser from "../auth/getUser";
import type { Recipe } from "@/types/Recipe";

const {user}: any = getUser()

const getDocument = async (id: string) => {
    const recipe = ref<Recipe | any>({
        title: '',
        people: 0,
        time: 0,
        category: '',
        ingredients: [],
        steps: [],
        favorite: false
    })

    const error = ref(null)

    // Register the firestore collection reference
    const docRef = doc(db, "users", user.value.uid, 'recipes', id)
    
    const response = await getDoc(docRef)

    if (response.exists()) {
        recipe.value = response.data()
        // console.log(response.data())
    } else {
        console.log('diddnt fijsdf')
    }
    error.value = null
    // console.log(recipe.value)
    
    return { recipe, error }
}

export default getDocument