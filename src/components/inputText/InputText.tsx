import React from "react";
import './inputText.style.scss';
import {InputTextProps} from './inputText.model';

const InputText: React.FC<InputTextProps> = ({text, width, forThat, placeholder, type}) => (
    <div className='inputwrapper'>
        <p>
            <label htmlFor={forThat} className='inputlabel'>{text}</label>
        </p>

        <input type={type ? type : "text"} className={`inputfield ' ${(width === 'wide') ? 'inputfield-wide' : (width === 'narrow') ? 'inputfield-narrow' :''}`} id={forThat} placeholder={placeholder}/>
    </div>
);

export default InputText;

