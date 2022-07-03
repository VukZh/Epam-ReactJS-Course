import React from "react";
import {FoundedMoviesProps} from './models';
import './styles.scss';

const FoundedMovies: React.FC<FoundedMoviesProps> = ({found}) => (
    <div className="foundedmovies--wrapper">
        <div className="foundedmovies--text"><b>{found}</b> movies found</div>
    </div>
)

export default FoundedMovies;

