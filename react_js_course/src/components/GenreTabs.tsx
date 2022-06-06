import React from "react";

const GenreTabs: React.FC = () => (
    <div className="tabs is-boxed is-fullwidth m-5">
        <ul>
            <li><a>ALL</a></li>
            <li><a>DOCUMENTARY</a></li>
            <li className="is-active"><a>COMEDY</a></li>
            <li><a>HORROR</a></li>
            <li><a>CRIME</a></li>
        </ul>
    </div>
);

export default GenreTabs;

