import React, {useContext} from 'react';
import './styles.scss';
import {MainContext} from "../../index";

const MovieDetails: React.FC = () => {

    const context = useContext(MainContext);
    const {movies, detailId} = context;

    let movie = movies.find((item) => item.id === detailId);

    if (!movie) {
        movie = movies[0];
    }

    const getTimeFromMins = (mins: number): string => {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + 'h' + minutes + 'm';
    };

    return (
        <div className="detailcontainer">
                <img src={movie.poster_path} alt="Placeholder image" className="detailcontainer--image"></img>

            <div className="detailcontainer-rightSide">
                <div className="detailcontainer--info">
                    <div className="detailcontainer--info--title">{movie.title}</div>
                    <div className="detailcontainer--info--rating">{movie.vote_average}</div>
                </div>
                <br/>
                <div className="detailcontainer--info">
                    <div className="detailcontainer--info--shortdescription">{movie.tagline}</div>
                </div>
                <div className="detailcontainer--info-red">
                    <div className="detailcontainer--info--additional-text-red">{movie.release_date.substr(0, 4)}</div>
                    <div className="detailcontainer--info--additional-text-red">{getTimeFromMins(movie.runtime)}</div>
                </div>
                <div className="detailcontainer--info">
                    <div className="detailcontainer--info--detail">{movie.overview}</div>
                </div>
            </div>
        </div>
    );

}


export default MovieDetails;