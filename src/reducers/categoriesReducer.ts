import {CategoriesDispatchType, CategoriesType} from "../actions/Categories/CategoriesActionsType";

interface IDefaultStat {
    loading: boolean,
    categories?: CategoriesType[]
}

const defaultState: IDefaultStat = {
loading: false
}

const catReducer =(state:IDefaultStat = defaultState, action: CategoriesDispatchType): IDefaultStat=>{
    switch (action.type){
        case "LOADING_CATEGORIES":
            return {
                loading: false
            }
        case "SUCCESS_CATEGORIES":
            return {
                loading: true,
                categories: action.payload
            }
        case "FAIL_CATEGORIES":
            return {
                loading: false,
            }
        default:
            return state
    }

}

export default catReducer