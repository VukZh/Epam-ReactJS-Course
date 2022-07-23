import React, {Dispatch} from 'react';
import SiteName from "../../components/SiteName/SiteName";
import img from '../../Images/back.png';
import Button from "../../components/Button/Button";
import './styles.scss';
import loupe from "../../Images/loupe.png";
import MovieDetails from "../../components/Details/MovieDetails";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {DetailAction, DetailActionTypes} from "../../store/types";
import {connect} from "react-redux";
import {HeaderProps} from "./header.model";

const Header: React.FC<HeaderProps> = ({setDetail}) => {

    const {detail, idMovie} = useTypedSelector(state => state.detail);

    const {movies} = useTypedSelector(state => state.movies);

    const canNotBeDetail = !detail || !(movies.find(movie => movie.id === idMovie));

    const handleClick = () => {
        setDetail(false)
    };

    return (
        <div className="header" style ={canNotBeDetail ?{ backgroundImage: `url(${img})`}:{}}>
            <div className="header--container">
                <SiteName/>
                {
                    canNotBeDetail
                        ? (
                            <Button purpose="add" text="+ ADD MOVIE" onClick={() => {}}/>
                        ) : (
                            <img src={loupe} alt="" width="30px" height="30px" className="header--loupe" onClick={handleClick}/>
                    )
                }


            </div>

            {canNotBeDetail
                ? (
                    <>
                        <div className="header--findtext">FIND YOUR MOVIE</div>

                        <div className="header--container-search">
                            <input className="header--input" type="text" placeholder="What do you want to watch?"></input>
                            <Button purpose="search" text="SEARCH" onClick={() => null}/>
                        </div>
                    </>
                ) : <MovieDetails/>
            }


            {/*{showModal && (*/}
            {/*    <FormAdd typeAdd={true} close={addMovieCloseModalHandler} close4add={setShowModal}></FormAdd>*/}
            {/*)}*/}

        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<DetailAction>) => {
    return {
        setDetail: () =>
            dispatch({
                type: DetailActionTypes.SET_DETAIL,
                payload: false
            })
    }
}

const connector = connect(null, mapDispatchToProps);

export default connector(Header);