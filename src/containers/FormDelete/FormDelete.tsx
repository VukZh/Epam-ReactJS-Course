import React, {useContext} from "react";
import './styles.scss';
import Button from "../../components/Button/Button";
import {FormDeleteProps} from "./models";
import img from '../../Images/x.png';
import {Modal} from "../Modal/Modal";
import {MainContext} from "../../index";

const FormDelete: React.FC<FormDeleteProps> = ({close}) => {

    const context = useContext(MainContext);
    const {currentMovie, movies, changeMovies} = context;

    const deleteHandler = () => {
        const findMovie = movies.findIndex((movie => movie.id === currentMovie))
        const newMovies = [...movies.slice(0, findMovie), ...movies.slice(findMovie + 1)];
        changeMovies(newMovies);
    }

    return (
        <Modal>
            <div className='formdeletewrapper'>
                <img src={img} alt="" width="20px" className="formdelete-img" onClick={close}/>
                <h3 className="formdelete--text">
                    DELETE MOVIE
                </h3>
                <div className="formdelete--text--question">
                    Are you sure you want to delete this movie?
                </div>
                <div className="formdelete--buttons-wrapper">
                    <Button purpose="search" text="CONFIRM" onClick={deleteHandler}></Button>
                </div>
            </div>
        </Modal>

    );
}

export default FormDelete;

