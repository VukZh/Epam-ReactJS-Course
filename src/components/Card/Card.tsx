import React, {useContext} from 'react';
import {CardProps} from './card.model';
import ContextMenuIcon from "./ContextMenuIcon";
import './card.style.scss';
import {MainContext} from "../../index";


const Card: React.FC<CardProps> = ({title, releaseDate, imgSrc, shortDescription, id}) => {
return (
        <div className="cardcontainer">
            <div>
                <img src={imgSrc} alt="Placeholder image" onClick={() => {}} className="cardcontainer--image"></img>
                <ContextMenuIcon id={+id}/>
            </div>

            <div className="cardcontainer--info">
                <div className="cardcontainer--info--title">{title}</div>
                <div className="cardcontainer--info--date">{releaseDate.substr(0,4)}</div>
            </div>
            <div className="cardcontainer--info--additional">
                <div className="cardcontainer--info--additional-text">{shortDescription}</div>
            </div>

        </div>
    );
}


export default Card;