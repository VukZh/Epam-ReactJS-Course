import React, {useContext, useEffect} from 'react';
import Card from "../../components/Card/Card";
import FoundedMovies from "../../components/FoundedMovies/FoundedMovies";
import GenreTabs from "../../components/GenreTabs/GenreTabs";
import Sorting from "../../components/Sorting/Sorting";
import './styles.scss';
import {MainContext} from "../../index";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {GetMovies} from "../../store/actionCreators/movies";
import SiteName from "../../components/SiteName/SiteName";

const Main: React.FC = () => {

    const {movies, error, loading} = useTypedSelector(state => state.movies);
    const dispatch = useTypedDispatch();
    useEffect(() => {
        dispatch(GetMovies());
    }, [])
    // if (loading) {
    //     return <h1>loading...</h1>
    // }
    // if (error) {
    //     return <h1>{error}</h1>
    // }

    return (
        <div>
            <div className="main--topside">
                <div className="main--sortpart">
                    <div className="main--sortpart--genre">
                        <GenreTabs/>
                    </div>
                    <div className="main--sortpart--sortby">
                        <Sorting/>
                    </div>
                </div>
                <hr className="main--hr"></hr>
                <FoundedMovies/>
            </div>


            <div>
                <div className="main--cardscontainer">
                    {movies.map(
                        (el) => (
                            <div className="main--cardscontainer--cardwrapper">
                                <Card title={el.title} releaseDate={el.release_date} imgSrc={el.poster_path} rating={el.vote_average}
                                      shortDescription={el.tagline} id={el.id} key={el.id + el.title}/>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )

};

export default Main;

