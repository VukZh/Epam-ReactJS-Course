import React, {useContext} from 'react';
import './styles.scss';
import {MainContext} from "../../index";
import getDetails from "../../Services/getDetails";

const moviesLink = 'https://upload.wikimedia.org/wikipedia/en/f/f9/The_Movies_poster.jpg';

const MovieDetails: React.FC = () => {

    const context = useContext(MainContext);
    const {movies, detailId} = context;

    const movie = movies.find((item) => item.id === detailId);
    const detail = getDetails(detailId);

    return (
        <div className="detailcontainer">
                <img src={moviesLink} alt="Placeholder image" className="detailcontainer--image"></img>

            <div className="detailcontainer-rightSide">
                <div className="detailcontainer--info">
                    <div className="detailcontainer--info--title">{movie.title}</div>
                    <div className="detailcontainer--info--rating">{movie.rating}</div>
                </div>
                <br/>
                <div className="detailcontainer--info">
                    <div className="detailcontainer--info--shortdescription">{movie.shortDescription}</div>
                </div>
                <div className="detailcontainer--info-red">
                    <div className="detailcontainer--info--additional-text-red">{movie.releaseDate}</div>
                    <div className="detailcontainer--info--additional-text-red">{movie.time}</div>
                </div>
                <div className="detailcontainer--info">
                    <div className="detailcontainer--info--detail">{detail}</div>
                </div>
            </div>
        </div>
    );

}


export default MovieDetails;