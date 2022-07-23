import React from "react";
import './styles.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const FoundedMovies: React.FC = () => {
    const {movies} = useTypedSelector(state => state.movies);
    return (
        <div className="foundedmovies--wrapper">
            <div className="foundedmovies--text"><b>{movies.length}</b> movies found</div>
        </div>
    )
}
export default FoundedMovies;

