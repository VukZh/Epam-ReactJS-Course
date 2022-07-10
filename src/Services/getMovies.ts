const moviesLink = 'https://upload.wikimedia.org/wikipedia/en/f/f9/The_Movies_poster.jpg';
import {moviesFields} from './getmovies.model';

const getMovies = (size: number): moviesFields[] => {
    const arrMovies = [];
    for (let i = 0; i < size; i++) {
        arrMovies.push({
            title: 'title' + i,
            releaseDate: 2022,
            imgSrc: moviesLink,
            rating: Math.floor(Math.random() * 10),
            shortDescription: "short description",
            id: i.toString(),
            time: "2h 11min"
        })
    }
    return arrMovies;
};

export default getMovies;