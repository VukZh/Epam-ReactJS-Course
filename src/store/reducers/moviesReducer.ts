import {MoviesAction, MoviesActionTypes, MoviesState} from "../types";

const initialState: MoviesState = {
    movies: [],
    loading: false,
    error: null,
    sortingField: "",
    genres: [],
}

export const moviesReducer = (state = initialState, action: MoviesAction): MoviesState => {
    switch (action.type) {
        case MoviesActionTypes.GET_MOVIES:
            return {...state, loading: true, error: null, movies: []}
        case MoviesActionTypes.GET_MOVIES_SUCCESS:
            return {...state, loading: false, error: null, movies: action.payload}
        case MoviesActionTypes.GET_MOVIES_ERROR:
            return {...state, loading: false, error: action.payload, movies: []}
        case MoviesActionTypes.SET_SORTING_FIELDS:
            return {...state, sortingField: action.payload}
        case MoviesActionTypes.SET_GENRES:
            return {...state, genres: action.payload}
        default:
            return state
    }
}