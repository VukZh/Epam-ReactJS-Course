import React, {useState} from 'react';
import SiteName from "../../components/sitename/SiteName";
import img from '../../images/back.png';
import Button from "../../components/button/Button";
import './header.style.scss';
import {Modal} from "../modal/Modal";
import FormAdd from "../formadd/FormAdd";

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const addMovieHandler = () => setShowModal(true);
    const addMovieCloseModalHandler = () => setShowModal(false);

    return (
        <div className="header" style={{ backgroundImage: `url(${img})`}}>
            <div className="header--container">
                <SiteName/>
                <Button purpose="add" text="+ ADD MOVIE" onClick={addMovieHandler}/>
            </div>


            <div className="header--findtext">FIND YOUR MOVIE</div>

            <div className="header--container-search">
                <input className="header--input" type="text" placeholder="What do you want to watch?"></input>
                <Button purpose="search" text="SEARCH" onClick={() => null}/>
            </div>

            {showModal && (
                <Modal>
                    <FormAdd typeAdd={true} close={addMovieCloseModalHandler}></FormAdd>
                </Modal>
            )}

        </div>
    );
}

export default Header;