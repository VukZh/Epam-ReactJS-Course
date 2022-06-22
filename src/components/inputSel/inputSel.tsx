import React from "react";
import {InputSelProps} from './inputSel.model'

const InputSel: React.FC<InputSelProps> = ({text, width, forThat, placeholder}) => (
    <div className='inputwrapper'>
        <label htmlFor={forThat} className='inputlabel'>{text}</label>
        <input type="text" className={`' '${(width === 'wide') ? 'inputwide' : (width === 'narrow') ? 'inputnarrow' : ''}`} id={forThat} placeholder={placeholder}/>
    </div>
);

export default InputSel;

