import {Dispatch} from "react";
import {CategoriesDispatchType, FAIL_CATEGORIES, LOADING_CATEGORIES, SUCCESS_CATEGORIES} from "./CategoriesActionsType";
import axios from "axios";

export const GetCategories = () => async (dispatch: Dispatch<CategoriesDispatchType>)=>{

    try{
        dispatch({
            type: LOADING_CATEGORIES
        })
        const res = await axios.get('https://api.thecatapi.com/v1/categories')
        dispatch({
            type: SUCCESS_CATEGORIES,
            payload: res.data
        })
    }catch (e){
       dispatch({
           type: FAIL_CATEGORIES
        })
    }
}