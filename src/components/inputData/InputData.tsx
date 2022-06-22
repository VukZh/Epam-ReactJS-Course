import React from "react";
import {InputDataProps} from './InputData.model'

const InputData: React.FC<InputDataProps> = ({text, width, forThat, placeholder}) => (
    <div className='inputwrapper'>
        <label htmlFor={forThat} className='inputlabel'>{text}</label>
        <input type="text" className={`' '${(width === 'wide') ? 'inputwide' : (width === 'narrow') ? 'inputnarrow' : ''}`} id={forThat} placeholder={placeholder}/>
    </div>
);

export default InputData;

