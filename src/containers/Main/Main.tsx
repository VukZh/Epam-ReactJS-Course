import React, {useContext} from 'react';
import Card from "../../components/Card/Card";
import FoundedMovies from "../../components/FoundedMovies/FoundedMovies";
import GenreTabs from "../../components/GenreTabs/GenreTabs";
import Sorting from "../../components/Sorting/Sorting";
import './styles.scss';
import {MainContext} from "../../index";

const Main: React.FC = () => {

    const context = useContext(MainContext);

    const data = context.movies;

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
                    {data.map(
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

