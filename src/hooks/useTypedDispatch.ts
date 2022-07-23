import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../store/reducers";
import {AnyAction} from "redux";
import {useDispatch} from "react-redux";

type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>
export const useTypedDispatch = () => useDispatch<TypedDispatch>();