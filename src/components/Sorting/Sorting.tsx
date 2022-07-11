import React from "react";
import './styles.scss';

const Sorting: React.FC = () => (
    <div className="sortingcontainer">
        <div className="sortingcontainer--text">SORT BY</div>
        <select className="sortingcontainer--select">
            <option className="sortingcontainer--select--option" value="release_date">Release date</option>
            <option className="sortingcontainer--select--option" value="title">Title</option>
            <option className="sortingcontainer--select--option" value="rating">Rating</option>
        </select>
    </div>
);

export default Sorting;

