export const LOADING_CATEGORIES = "LOADING_CATEGORIES"
export const FAIL_CATEGORIES = "FAIL_CATEGORIES"
export const SUCCESS_CATEGORIES = "SUCCESS_CATEGORIES"


export type CategoriesType = {
    id: string,
    name: string
}



export interface categoriesLoading {
    type: typeof LOADING_CATEGORIES
}
export interface categoriesFail {
    type: typeof FAIL_CATEGORIES
}
export interface categoriesSuccess {
    type: typeof SUCCESS_CATEGORIES
    payload: CategoriesType[]
}


export type CategoriesDispatchType = categoriesLoading | categoriesFail | categoriesSuccess
