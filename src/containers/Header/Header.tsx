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
    const {changeView, searchView} = context;
    const imgClickHandler = () => {changeView(true)}

    return (
        <div className="header" style ={searchView ?{ backgroundImage: `url(${img})`}:{}}>
            <div className="header--container">
                {
                    searchView
                        ? (
                            <>
                                <SiteName/>
                                <Button purpose="add" text="+ ADD MOVIE" onClick={addMovieHandler}/>
                            </>
                        ) : (
                            <>
                                <SiteName/>
                                <img src={loupe} alt="" width="30px" height="30px" className="header--loupe" onClick={imgClickHandler}/>
                            </>
                    )
                }


            </div>

            {/*<MovieDetails id={1}/>*/}

            {searchView
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