import React from 'react';
import SiteName from "../components/SiteName";

import img from '../images/back.png';
import AddMovie from "../components/AddMovie";

const Header: React.FC = () => (
    <div className="container is-fluid" style={{ backgroundImage: `url(${img})`, height: '320px' }}>
        <div className="columns pt-6">
            <SiteName/>
            <AddMovie/>
        </div>

        <div className="field container">
            <div className="has-text-white-bis is-size-3 ml-4 my-4">FIND YOUR MOVIE</div>
            <div className="control columns">
                <input className="input is-two-fifths m-4 column has-text-white has-background-link" type="text" placeholder="What do you want to watch?"></input>
                <div className="button is-link control m-4 is-one-quarter px-6 is-danger">SEARCH</div>
            </div>
        </div>
    </div>
);

export default Header;