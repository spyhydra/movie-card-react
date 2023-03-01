export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVORITE='ADD_FAVORITE';
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