import {moviesFields} from "../Services/getmovies.model";

export type MoviesState = {
    movies: moviesFields[];
    loading: boolean;
    error: null | string;
}

export enum MoviesActionTypes {
    GET_MOVIES = "GET_MOVIES",
    GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS",
    GET_MOVIES_ERROR = "GET_MOVIES_ERROR",
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

export type MoviesAction = GetMoviesAction | GetMoviesSuccessAction | GetMoviesErrorAction;