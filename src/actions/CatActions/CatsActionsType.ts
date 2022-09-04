export const LOADING_CATS = "LOADING_CATS"
export const FAIL_CATS = "FAIL_CATS"
export const SUCCESS_CATS = "SUCCESS_CATS"


export type CatType = {
    id: string,
    url: string,
    width: number,
    height: number
}

export interface catsLoading {
    type: typeof LOADING_CATS
}
export interface catsFail {
    type: typeof FAIL_CATS
}
export type categoryIDType={
    category_ids: number | null
}
export interface catsSuccess {
    type: typeof SUCCESS_CATS
    payload: CatType[]
    categoryID: categoryIDType
}


export type CatsDispatchType = catsLoading | catsFail | catsSuccess
