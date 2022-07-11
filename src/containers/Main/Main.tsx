import React from 'react';
import Card from "../../components/Card/Card";
import FoundedMovies from "../../components/FoundedMovies/FoundedMovies";
import GenreTabs from "../../components/GenreTabs/GenreTabs";
import Sorting from "../../components/Sorting/Sorting";
import getMovies from "../../Services/getMovies";
import './styles.scss';

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

