const moviesLink = 'https://upload.wikimedia.org/wikipedia/en/f/f9/The_Movies_poster.jpg';
import {moviesFields} from './getmovies.model';

const getMovies = (size: number): moviesFields[] => {
    const arrMovies = [];
    for (let i = 0; i < size; i++) {
        arrMovies.push({
            title: 'title' + i,
            release_date: '2022',
            poster_path: moviesLink,
            vote_average: Math.floor(Math.random() * 10),
            tagline: "short description",
            id: i,
            runtime: 150
        })
    }
    return arrMovies;
};

export default getMovies;