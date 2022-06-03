import React from 'react';

import data from '../mock-data/data';

const Main: React.FC = () => (
    <div>
        <div>
            <span>ALL</span>
            <span>DOCUMENTARY</span>
            <span>COMEDY</span>
            <span>HORROR</span>
            <span>CRIME</span>
        </div>
        <div>
            <label htmlFor="sort">SORT BY</label>
            <select name="sort" id="sort">
                <option value="release_date">Release date</option>
                <option value="title">Title</option>
                <option value="rating">Rating</option>
            </select>
        </div>
        <div>{11} movies found</div>
        <div>
            {data.map(
                el => <div>{el.title}</div>
            )}
        </div>
    </div>
);

export default Main;

