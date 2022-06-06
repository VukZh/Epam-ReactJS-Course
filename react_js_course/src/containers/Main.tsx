import React from 'react';
import Card from "../components/Card";
import FoundedMovies from "../components/FoundedMovies";
import data from '../mock-data/data';
import GenreTabs from "../components/GenreTabs";
import Sorting from "../components/Sorting";

const Main: React.FC = () => (
    <div>
        <div className="container">
            <div className="columns is-vcentered">
                <div className="column is-9">
                    <GenreTabs/>
                </div>
                <div className="column">
                    <Sorting/>
                </div>
            </div>
            <FoundedMovies found={5}/>
        </div>



        <div className="container">
            <div className="columns is-multiline">
                    {data.map(
                        (el, index) => (
                            <div className="column is-one-third">
                                <Card title={el.title} releaseDate={el.releaseDate} rating={el.rating} index={index}/>
                            </div>
                        )
                    )}
            </div>
        </div>
    </div>
);

export default Main;

