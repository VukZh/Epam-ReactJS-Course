import React, {useEffect} from 'react';
import SiteName from "../../components/SiteName/SiteName";
import './styles.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {GetMovies} from "../../store/actionCreators/movies";
import {useDispatch} from "react-redux";
import {MoviesAction} from "../../store/types";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {TypedDispatch} from "../../store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {RootState} from "../../store/reducers";

const Footer: React.FC = () => {
    return (
        <div className="footercontainer">
            <SiteName/>
        </div>
    );
}

export default Footer;

