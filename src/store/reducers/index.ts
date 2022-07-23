import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer";
import {detailReducer} from "./detailReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    detail: detailReducer
})

export type RootState = ReturnType<typeof rootReducer>;