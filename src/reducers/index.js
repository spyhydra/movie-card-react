import { combineReducers } from 'redux'


import { act } from 'react-dom/test-utils'

import {ADD_MOVIES,ADD_FAVORITE,REMOVE_FAVORITES,SET_SHOW_FAVORITES} from '../actions'

const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
export  function movie(state=initialMovieState,action){
  
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

            case REMOVE_FAVORITES:
                const filteredArray=state.favourites.filter(
                    movie => movie.Title !== action.movie.Title
                    
                );

               
                    return{
                       ...state,
                       favourites:filteredArray
                    };

                    case SET_SHOW_FAVORITES:
                        return{
                            ...state,
                            showFavourites:action.val
                        }
            default:
                return state;
    }
    
}
const initialSearchState={
    result:{}
}

export function search (state= initialRootState, action){

    return state;
}

const initialRootState={
    movies:initialMovieState,
    search:initialSearchState
}


// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movie(state.movies,action),
//         search:search(state.search,action)

//     }
// }


export default combineReducers({
    movies:movie,
    search:search
})