import React, {useState} from "react";
import './styles.scss';
import {OptionsSelectProps} from "./models";

const Option: React.FC<OptionsSelectProps> = ({checked, title, checkHandler}) => (
    <div className="optionsselect--option">
        <label>
            <input type="checkbox" checked={checked} onChange={checkHandler} className="optionsselect--option-checkbox"/>
            {title}
        </label>
    </div>
)

const OptionsSelect: React.FC = () => {

    const [selectOpen, setSelectOpen] = useState(false);

    const [crimeChecked, setCrimeChecked] = useState(false);
    const [documentaryChecked, setDocumentaryChecked] = useState(false);
    const [horrorChecked, setHorrorChecked] = useState(false);
    const [comedyChecked, setComedyChecked] = useState(false);

    const handleCrimeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCrimeChecked(e.target.checked);
    };

    const handleDocumentaryChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDocumentaryChecked(e.target.checked);
    };

    const handleHorrorChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHorrorChecked(e.target.checked);
    };

    const handleComedyChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComedyChecked(e.target.checked);
    };

    const setSelectOpenHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setSelectOpen(!selectOpen);
    }

    return (
        <div className="optionsselect--wrapper">
            <button className="optionsselect--select-wrapper" onClick={setSelectOpenHandler}>Select Genre {selectOpen ? "▲" : "▼"}</button>
            {selectOpen && <div className="optionsselect--option-wrapper">
              <Option title="Crime" checked={crimeChecked} checkHandler={handleCrimeChecked}></Option>
              <Option title="Documenary" checked={documentaryChecked} checkHandler={handleDocumentaryChecked}></Option>
              <Option title="Horror" checked={horrorChecked} checkHandler={handleHorrorChecked}></Option>
              <Option title="Comedy" checked={comedyChecked} checkHandler={handleComedyChecked}></Option>
            </div>}
        </div>

    );
}

export default OptionsSelect;

