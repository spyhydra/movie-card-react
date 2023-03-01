import { act } from 'react-dom/test-utils'
import {ADD_MOVIES,ADD_FAVORITE} from '../actions'

const initialMovieState={
    list:[],
    favourites:[]
}
export default function movie(state=initialMovieState,action){
    // if(action.type===ADD_MOVIES){
    //     return {
    //         //sparade oprator
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;


    switch (action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
            
            case ADD_FAVORITE:
                return{
                    ...state,
                    favourites:[action.movie , ...state.favourites]
                }

            default:
                return state;
    }
}