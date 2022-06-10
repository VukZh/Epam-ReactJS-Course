import React from 'react';
import SiteName from "../../components/sitename/SiteName";
import img from '../../images/back.png';
import Button from "../../components/button/Button";
import './header.style.scss';

const Header: React.FC = () => (
    <div className="header" style={{ backgroundImage: `url(${img})`}}>
        <div className="header--container">
            <SiteName/>
            <Button purpose="add" text="+ ADD MOVIE" onClick={() => null}/>
        </div>


        <div className="header--findtext">FIND YOUR MOVIE</div>

        <div className="header--container-search">
            <input className="header--input" type="text" placeholder="What do you want to watch?"></input>
            <Button purpose="search" text="SEARCH" onClick={() => null}/>
        </div>

    </div>
);

export default Header;