import React, {useState} from 'react';
import SiteName from "../../components/SiteName/SiteName";
import img from '../../Images/back.png';
import Button from "../../components/Button/Button";
import './styles.scss';
import FormAdd from "../FormAdd/FormAdd";

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
                <FormAdd typeAdd={true} close={addMovieCloseModalHandler}></FormAdd>
            )}

        </div>
    );
}

export default Header;