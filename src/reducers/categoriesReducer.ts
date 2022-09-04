import {
    CatsDispatchType,
    catsSuccess,
    CatType,
    FAIL_CATS,
    LOADING_CATS,
    SUCCESS_CATS
} from "./../actions/CatActions/CatsActionsType";

interface IDefaultStat {
    loading: boolean,
    cats?: CatType[]
}

const defaultState: IDefaultStat = {
loading: false
}

const catReducer =(state:IDefaultStat = defaultState, action: CatsDispatchType): IDefaultStat=>{
    switch (action.type){
        case "LOADING_CATS":
            return {
                loading: false
            }
        case "SUCCESS_CATS":
            return {
                loading: true,
                cats: action.payload
            }
        case "FAIL_CATS":
            return {
                loading: false,
            }
        default:
            return state
    }

}

export default catReducer