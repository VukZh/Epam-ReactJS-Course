import React from "react";

type FoundedMoviesProps = {
    found: number;
};

const FoundedMovies: React.FC<FoundedMoviesProps> = ({found}) => (
    <div className="container is-fluid">
        <div className="has-text-white m-5"><b>{found}</b> movies found</div>
    </div>
)

export default FoundedMovies;

