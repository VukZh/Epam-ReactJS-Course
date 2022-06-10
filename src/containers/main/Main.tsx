import React from 'react';
import Card from "../../components/card/Card";
import FoundedMovies from "../../components/foundedmovies/FoundedMovies";
import GenreTabs from "../../components/genretabs/GenreTabs";
import Sorting from "../../components/sorting/Sorting";
import getMovies from "../../services/getMovies";
import './main.style.scss';

const data = getMovies(13);

const Main: React.FC = () => (
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
            <FoundedMovies found={5}/>
        </div>



        <div>
            <div className="main--cardscontainer">
                    {data.map(
                        (el) => (
                            <div className="main--cardscontainer--cardwrapper">
                                <Card title={el.title} releaseDate={el.releaseDate} imgSrc={el.imgSrc} rating={el.rating}/>
                            </div>
                        )
                    )}
            </div>
        </div>
    </div>
);

export default Main;

