import React, {createContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Footer from "./containers/Footer/Footer";
import Main from "./containers/Main/Main";
import Header from "./containers/Header/Header";
import getMovies from "./Services/getMovies";
import {moviesFields} from "./Services/getmovies.model";

type ContextType = {
    movies: Array<moviesFields>;
    searchView: boolean;
    changeView?(arg:boolean):void;
    detailId: number;
    changeDetailId?(arg:number):void;
    currentMovie: number,
    changeCurrentMovie?(arg:number):void;
    changeMovies?([]):void;
}

const defaultContext: ContextType = {
    movies: [{
            title: "",
            release_date: "2022",
            poster_path: "",
            vote_average: 0,
            tagline: "",
            id: 0,
            runtime: 0
        }
    ],
    searchView: true,
    detailId: 0,
    currentMovie: -1,
}

export const MainContext = createContext(defaultContext);

const App = () => {

    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(-1);
    const [searchView, setView] = useState(true);
    const [detailId, setDetailId] = useState(0);
    useEffect(() => setMovies(getMovies(13)), []);

    return (
        <MainContext.Provider value={{
            movies,
            searchView,
            changeView: setView,
            detailId,
            changeDetailId: setDetailId,
            currentMovie,
            changeCurrentMovie: setCurrentMovie,
            changeMovies: setMovies
        }
        }>
            <div>
                <Header/>
                <Main/>
                <Footer/>
                <div></div>
            </div>
        </MainContext.Provider>
    )
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);