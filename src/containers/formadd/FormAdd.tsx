import React from "react";
import InputText from "../../components/inputText/InputText";
import './formadd.style.scss';
import Button from "../../components/button/Button";
import img from "../../images/x.png";
import OptionsSelect from "../../components/optionsselect/OptionsSelect";

const FormAdd: React.FC = () => (
    <div className="formaddwrapper">
        <img src={img} alt="" width="20px" className="formadd-img"/>
        <h3 className="formadd--text">ADD MOVIE</h3>
        <form action="">
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
                    <Button purpose="search" text="SUBMIT" onClick={() => null}></Button>
                </div>

            </div>
        </form>
    </div>
);

export default FormAdd;

