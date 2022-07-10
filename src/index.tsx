import React, {createContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Footer from "./containers/Footer/Footer";
import Main from "./containers/Main/Main";
import Header from "./containers/Header/Header";
import getMovies from "./Services/getMovies";
import {moviesFields} from "./Services/getmovies.model";

// import TestErrorBoundary from "./containers/TestErrorBoundary/TestErrorBoundary";
// import ErrorBoundary from "./containers/TestErrorBoundary/ErrorBoundary";
// import FormDelete from "./containers/FormDelete/FormDelete";

type ContextType = {
    movies: Array<moviesFields>;
    searchView: boolean;
    changeView?(arg:boolean):void;
    detailId: string;
    changeDetailId?(arg:string):void;
}

const defaultContext: ContextType = {
    movies: [{
            title: "",
            releaseDate: 0,
            imgSrc: "",
            rating: 0,
            shortDescription: "",
            id: "",
            time: ""
        }
    ],
    searchView: true,
    detailId: ""

}

export const MainContext = createContext(defaultContext);

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchView, setView] = useState(true);
    const [detailId, setDetailId] = useState("");
    useEffect(() => setMovies(getMovies(13)), [])

    return (
        <MainContext.Provider value={{
            movies,
            searchView,
            changeView: setView,
            detailId,
            changeDetailId: setDetailId,
        }
        }>
            <div>
                <Header/>
                {/*<ErrorBoundary>*/}
                {/*    <TestErrorBoundary/>*/}
                {/*</ErrorBoundary>*/}
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