import {MoviesAction, MoviesActionTypes, MoviesState} from "../types";

const initialState: MoviesState = {
    movies: [],
    loading: false,
    error: null
}

export const moviesReducer = (state = initialState, action: MoviesAction): MoviesState => {
    switch (action.type) {
        case MoviesActionTypes.GET_MOVIES:
            return {loading: true, error: null, movies: []}
        case MoviesActionTypes.GET_MOVIES_SUCCESS:
            return {loading: false, error: null, movies: action.payload}
        case MoviesActionTypes.GET_MOVIES_ERROR:
            return {loading: false, error: action.payload, movies: []}
        default:
            return state
    }
}