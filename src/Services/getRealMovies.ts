import axios from "axios";
const getRealMovies = (size: number, cb: Function): any => {

    const url = `http://localhost:4000/movies?limit=${size}`
    axios.get(url, {
        headers : {
        },
        crossdomain: true
    })
    .then((res: any) => {
        const movies = res.data.data;
        console.log("movies", movies);
        cb(movies);
    })
    .catch((err: any) => {
        console.log(err);
    })
};

export default getRealMovies;