import React, {useContext} from 'react';
import {CardProps} from './card.model';
import ContextMenuIcon from "./ContextMenuIcon";
import './card.style.scss';
import {MainContext} from "../../index";


const Card: React.FC<CardProps> = ({title, releaseDate, imgSrc, shortDescription, id}) => {
    const context = useContext(MainContext);
    const {changeView, changeDetailId} = context;
    const imgClickHandler = () => {changeDetailId(id); changeView(false)};
    return (
        <div className="cardcontainer">
            <div className="cardcontainer--image">
                <img src={imgSrc} alt="Placeholder image" onClick={imgClickHandler}></img>
                <ContextMenuIcon id={+id}/>
            </div>

            <div className="cardcontainer--info">
                <div className="cardcontainer--info--title">{title}</div>
                <div className="cardcontainer--info--date">{releaseDate}</div>
            </div>
            <div className="cardcontainer--info--additional">
                <div className="cardcontainer--info--additional-text">{shortDescription}</div>
            </div>

        </div>
    );
}


export default Card;