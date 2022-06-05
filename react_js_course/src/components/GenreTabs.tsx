import React from "react";

const GenreTabs: React.FC = () => (
    <div className="tabs is-toggle is-boxed m-5">
        <ul>
            <li className="is-active"><a>ALL</a></li>
            <li><a>DOCUMENTARY</a></li>
            <li><a>COMEDY</a></li>
            <li><a>HORROR</a></li>
            <li><a>CRIME</a></li>
        </ul>
    </div>
);

export default GenreTabs;

