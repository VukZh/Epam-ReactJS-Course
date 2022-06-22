import React from "react";
import './genretabs.style.scss';

const GenreTabs: React.FC = () => (
    <div>
        <ul className="genretabs">
            <li><a className="genretabs--link">ALL</a></li>
            <li><a className="genretabs--link">DOCUMENTARY</a></li>
            <li><a className="genretabs--link">COMEDY</a></li>
            <li><a className="genretabs--link">HORROR</a></li>
            <li><a className="genretabs--link">CRIME</a></li>
        </ul>
    </div>
);

export default GenreTabs;

