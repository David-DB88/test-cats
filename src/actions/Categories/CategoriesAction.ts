import {Dispatch} from "react";
import {CatsDispatchType, FAIL_CATS, LOADING_CATS, SUCCESS_CATS} from "./CatsActionsType";
import axios from "axios";

export const GetCats = (config?: any) => async (dispatch: Dispatch<CatsDispatchType>)=>{

    try{
        dispatch({
            type: LOADING_CATS
        })
        const res = await axios.get('https://api.thecatapi.com/v1/images/search', config
            // {
            // params: {
            //     limit: 10,
            //     page: 2,
            //     category_ids: 1
            // } }
        )
        dispatch({
            type: SUCCESS_CATS,
            payload: res.data
        })
    }catch (e){
       dispatch({
           type: FAIL_CATS
    })
    }
}