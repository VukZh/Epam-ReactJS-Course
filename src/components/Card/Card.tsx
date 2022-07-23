import React, {Dispatch} from 'react';
import {CardProps} from './card.model';
import ContextMenuIcon from "./ContextMenuIcon";
import './card.style.scss';
import {DetailAction, DetailActionTypes} from "../../store/types";
import {connect} from "react-redux";


const Card: React.FC<CardProps> = ({title, releaseDate, imgSrc, shortDescription, id, setDetail, setIdMovie}) => {
    const handleClick = () => {
        setDetail(true);
        setIdMovie(id);
    };
return (
        <div className="cardcontainer">
            <div>
                <img src={imgSrc} alt="Placeholder image" onClick={handleClick} className="cardcontainer--image"></img>
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

const mapDispatchToProps = (dispatch: Dispatch<DetailAction>) => {
    return {
        setDetail: () =>
            dispatch({
                type: DetailActionTypes.SET_DETAIL,
                payload: true
            }),
        setIdMovie: (id: number) =>
            dispatch({
                type: DetailActionTypes.SET_ID_MOVIE,
                payload: id
            }),
    }
}

const connector = connect(null, mapDispatchToProps);

export default connector(Card);