import React from 'react';
import {CardProps} from './card.model';
import './card.style.scss';

const Card: React.FC<CardProps> = ({title, releaseDate, imgSrc, rating}) => (
    <div className="cardcontainer">
        <div className="cardcontainer--image">
            <img src={imgSrc} alt="Placeholder image"></img>
        </div>

        <div className="cardcontainer--info">
            <p className="cardcontainer--info--title">{title}</p>
            <div className="cardcontainer--info--additional">
                <div className="cardcontainer--info--additional-text">{releaseDate}</div>
                <div className="cardcontainer--info--additional-text">{rating}</div>
            </div>
        </div>

    </div>
);

export default Card;