import {ADD_MOVIES} from '../actions'

const initialMovieState={
    list:[],
    favourites:[]
}
export default function movie(state=initialMovieState,action){
    if(action.type===ADD_MOVIES){
        return {
            //sparade oprator
            ...state,
            list:action.movies
        }
    }
    return state;
}