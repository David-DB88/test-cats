import {Dispatch} from "react";
import {CatsDispatchType, FAIL_CATS, LOADING_CATS, SUCCESS_CATS} from "./CatsActionsType";
import axios from "axios";

let categoryID: number
export const GetCats = (config?: any) => async (dispatch: Dispatch<CatsDispatchType>)=>{

    try{
        if(categoryID !== config.params.category_ids){
            categoryID = config.params.category_ids
            dispatch({
                type: LOADING_CATS
            })
        }

        const res = await axios.get('https://api.thecatapi.com/v1/images/search', config
        )
        dispatch({
            type: SUCCESS_CATS,
            payload: res.data,
            categoryID: config?.params?.category_ids
        })
    }catch (e){
       dispatch({
           type: FAIL_CATS
    })
    }
}