import React, {useContext} from "react";
import InputText from "../../components/InputText/InputText";
import './styles.scss';
import Button from "../../components/Button/Button";
import img from "../../Images/x.png";
import OptionsSelect from "../../components/OptionsSelect/OptionsSelect";
import {FormAddProps} from "./models";
import {Modal} from "../Modal/Modal";
import {MainContext} from "../../index";

const FormAdd: React.FC<FormAddProps> = ({typeAdd, close, close4add}) => {

    const context = useContext(MainContext);
    const {movies, changeMovies} = context;

    const addHandler = () => {
        if (typeAdd) {
            const newMovie = {
                title: "New",
                release_date: "2022",
                poster_path: "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Movies_poster.jpg",
                vote_average: 9,
                tagline: "newShortDescription",
                id: movies[movies.length-1].id + 1,
                runtime: 121
            };
            changeMovies([...movies, newMovie]);
            close4add(false);
        }
    }

    return (
        <Modal>
            <div className="formaddwrapper">
                <img src={img} alt="" width="20px" className="formadd-img" onClick={close}/>
                <h3 className="formadd--text"> {typeAdd ? "ADD MOVIE" : "EDIT"}
                </h3>
                <div>
                    <div className="formadd--section">
                        <InputText text="TITLE" width="wide" forThat="title" placeholder="movie title"></InputText>
                        <InputText text="TITLE" width="narrow" forThat="title" placeholder="movie title" type="date"></InputText>
                    </div>
                    <div className="formadd--section">
                        <InputText text="MOVIE URL" width="wide" forThat="url" placeholder="https://" type="url"></InputText>
                        <InputText text="RATING" width="narrow" forThat="rating" placeholder="0.0" type="number"></InputText>
                    </div>
                    <div className="formadd--section">
                        <div className="formadd--section-genre_select">
                            <p>
                                <label htmlFor="genre_select" className="formadd--genre_select_label">GENRE</label>
                            </p>
                            <OptionsSelect/>
                        </div>
                        <InputText text="RUNTIME" width="narrow" forThat="runtime" placeholder="minutes" type="number"></InputText>
                    </div>
                    <div className="formadd--section-overview">
                        <p>
                            <label htmlFor="overview" className="formadd--section-overview_label">OVERVIEW</label>
                        </p>

                        <textarea className="formadd--section-overview-text" id="overview" placeholder="Movie description"/>
                    </div>
                    <div className="formadd--section formadd--buttons">
                        <div className="formadd--buttons-wrapper">
                            <Button purpose="add" text="RESET" onClick={() => null}></Button>
                        </div>
                        <div className="formadd--buttons-wrapper">
                            <Button purpose="search" text="SUBMIT" onClick={addHandler}></Button>
                        </div>

                    </div>
                </div>
            </div>
        </Modal>
    );

}

export default FormAdd;

