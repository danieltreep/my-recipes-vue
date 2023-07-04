export interface Recipe {
    title: string,
    people: null | number,
    time: null | number,
    category: string,
    description: string,
    ingredients: Array<object>,
    steps: Array<string>
}