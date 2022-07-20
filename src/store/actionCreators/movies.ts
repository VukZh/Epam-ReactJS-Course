import {MoviesAction, MoviesActionTypes} from "../types";
import {Dispatch} from "redux";
import axios from "axios";

export const GetMovies = () => {
    const url = "http://localhost:4000/movies?limit=20";
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({type: MoviesActionTypes.GET_MOVIES});
            const responce = await axios.get(url, {
                headers : {
                },
                crossdomain: true
            });
            dispatch({type: MoviesActionTypes.GET_MOVIES_SUCCESS, payload: responce.data.data})
        } catch (e) {
            dispatch({type: MoviesActionTypes.GET_MOVIES_ERROR, payload: "Download error"})
        }
    }
}