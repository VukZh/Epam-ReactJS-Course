import React, {useContext} from "react";
import './styles.scss';
import {MainContext} from "../../index";

const FoundedMovies: React.FC = () => {
    const context = useContext(MainContext);
    const data = context.movies;
    return (
        <div className="foundedmovies--wrapper">
            <div className="foundedmovies--text"><b>{data.length}</b> movies found</div>
        </div>
    )
}
export default FoundedMovies;

