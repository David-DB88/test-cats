import {PokemonDispatchType, PokemonType} from "../actions/PokemonActionsType";

interface IDefaultStat {
    loading: boolean,
    pokemon?: PokemonType
}

const defaultState: IDefaultStat = {
loading: false
}

const pokemonReducer =(state:IDefaultStat = defaultState, action: PokemonDispatchType): IDefaultStat=>{
    switch (action.type){
        case "FAIL_POKEMON":
            return {
                loading: false
            }
        case "LOADING_POKEMON":
            return {
                loading: true
            }
        case "SUCCESS_POKEMON":
            return {
                loading: false,
                pokemon: action.payload
            }
        default:
            return state
    }

}

export default pokemonReducer