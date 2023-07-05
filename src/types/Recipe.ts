import type { Ingredient } from "./Ingredient"

export interface Recipe {
    title: string,
    people: null | number,
    time: null | number,
    category: string,
    description?: string,
    ingredients: Array<Ingredient>,
    steps: Array<string>,
    id?: string,
    favorite: boolean
}