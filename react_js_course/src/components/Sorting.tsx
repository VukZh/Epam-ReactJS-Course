import React from "react";

const Sorting: React.FC = () => (
    <div className="columns">
        <div className="m-5">SORT BY</div>
        <div className="select m-5">
            <select>
                <option value="release_date">Release date</option>
                <option value="title">Title</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    </div>
);

export default Sorting;

