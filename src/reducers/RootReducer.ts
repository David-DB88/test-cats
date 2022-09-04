import {combineReducers} from 'redux'
import catReducer from "./catReducer";
import categoriesReducer from "./categoriesReducer";

const RootReducer = combineReducers({
    cats: catReducer,
    categories: categoriesReducer
})

export default RootReducer