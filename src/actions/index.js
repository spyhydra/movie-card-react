export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVORITE='ADD_FAVORITE';
export const REMOVE_FAVORITES='REMOVE_FAVORITES';
export const SET_SHOW_FAVORITES='SET_SHOW_FAVORITES';
//action creators 
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}


export function addFavorite(movie){
    return{
        type:ADD_FAVORITE,
        movie
    }
}

export function removeFavorites(movie){
   return{
       type:REMOVE_FAVORITES,
       movie
   };
}

export function setShowFavorites(val){
    return{
        type:SET_SHOW_FAVORITES,
        val
    };
 }