import {DetailState, DetailAction, DetailActionTypes} from "../types";

const initialState: DetailState = {
    idMovie: -1,
    detail: false,
}

export const detailReducer = (state = initialState, action: DetailAction): DetailState => {
    switch (action.type) {
        case DetailActionTypes.SET_DETAIL:
            return {...state, detail: action.payload}
        case DetailActionTypes.SET_ID_MOVIE:
            return {...state, idMovie: action.payload}
        default:
            return state
    }
}