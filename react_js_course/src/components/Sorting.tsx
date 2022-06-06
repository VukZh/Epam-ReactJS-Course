import React from "react";

const Sorting: React.FC = () => (
    <div className="columns">
        <div className="m-5">SORT BY</div>
        <div className="select m-4 is-danger">
            <select>
                <option className="has-text-white has-background-dark" value="release_date">Release date</option>
                <option className="has-text-white has-background-dark" value="title">Title</option>
                <option className="has-text-white has-background-dark" value="rating">Rating</option>
            </select>
        </div>
    </div>
);

export default Sorting;

