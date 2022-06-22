import React from "react";
import {ButtonProps} from './button.model';
import './button.style.scss';

const Button: React.FC<ButtonProps> = ({text, purpose, onClick}) => {
    return (
        <button className={`button ' ${(purpose === 'add') ? 'button-add' : (purpose === 'search') ? 'button-search' : (purpose === 'error') ? 'button-error' :''}`}
                onClick={onClick}>{text}</button>
    )
};

export default Button;

