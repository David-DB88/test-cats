import {
    categoryIDType,
    CatsDispatchType,
    CatType,
    FAIL_CATS,
    LOADING_CATS,
    SUCCESS_CATS
} from "./../actions/CatActions/CatsActionsType";

interface IDefaultStat {
    loading: boolean,
    cats: CatType[],
    categoryID?: categoryIDType
}

const defaultState: IDefaultStat = {
loading: false,
    cats: [],
}

const catReducer =(state:IDefaultStat = defaultState, action: CatsDispatchType): IDefaultStat=>{
    switch (action.type){
        case "LOADING_CATS":
            return {
                ...state,
                loading: true,
            }
        case "SUCCESS_CATS":
            return {
                ...state,
                loading: false,
                cats: state.categoryID !== action.categoryID ? action.payload : [...state.cats, ...action.payload],
                categoryID: action.categoryID
            }
        case "FAIL_CATS":
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }

}

export default catReducer