import React, {useContext, useState} from 'react';
import SiteName from "../../components/SiteName/SiteName";
import img from '../../Images/back.png';
import Button from "../../components/Button/Button";
import './styles.scss';
import FormAdd from "../FormAdd/FormAdd";
import loupe from "../../Images/loupe.png";
import MovieDetails from "../../components/Details/MovieDetails";
import {MainContext} from "../../index";

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const addMovieHandler = () => setShowModal(true);
    const addMovieCloseModalHandler = () => setShowModal(false);

    const context = useContext(MainContext);
    const {changeView, searchView, movies} = context;
    const imgClickHandler = () => {changeView(true)}

    const CanNotBeDetail = !(!searchView && movies.length);

    return (
        <div className="header" style ={CanNotBeDetail ?{ backgroundImage: `url(${img})`}:{}}>
            <div className="header--container">
                <SiteName/>
                {
                    CanNotBeDetail
                        ? (
                            <>
                                <Button purpose="add" text="+ ADD MOVIE" onClick={addMovieHandler}/>
                            </>
                        ) : (
                            <>
                                <img src={loupe} alt="" width="30px" height="30px" className="header--loupe" onClick={imgClickHandler}/>
                            </>
                    )
                }


            </div>

            {CanNotBeDetail
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


            {showModal && (
                <FormAdd typeAdd={true} close={addMovieCloseModalHandler}></FormAdd>
            )}

        </div>
    );
}

export default Header;