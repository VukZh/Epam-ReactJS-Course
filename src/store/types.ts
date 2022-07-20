import {moviesFields} from "../Services/getmovies.model";

export type MoviesState = {
    movies: moviesFields[];
    loading: boolean;
    error: null | string;
    sortingField: string;
    genres: string[];
}

export enum MoviesActionTypes {
    GET_MOVIES = "GET_MOVIES",
    GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS",
    GET_MOVIES_ERROR = "GET_MOVIES_ERROR",
    SET_SORTING_FIELDS = "SET_SORTING_FIELDS",
    SET_GENRES = "SET_GENRES"
}

type GetMoviesAction = {
    type: MoviesActionTypes.GET_MOVIES,
}

type GetMoviesSuccessAction = {
    type: MoviesActionTypes.GET_MOVIES_SUCCESS,
    payload: moviesFields[]
}

type GetMoviesErrorAction = {
    type: MoviesActionTypes.GET_MOVIES_ERROR,
    payload: string
}

type SetSortingFields = {
    type: MoviesActionTypes.SET_SORTING_FIELDS,
    payload: string
}

type SetGenres = {
    type: MoviesActionTypes.SET_GENRES,
    payload: string[]
}

export type MoviesAction = GetMoviesAction | GetMoviesSuccessAction | GetMoviesErrorAction | SetSortingFields | SetGenres;