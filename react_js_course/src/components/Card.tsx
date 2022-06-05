import React from 'react';

type CardProps = {
    title: string;
    releaseDate: string
};

const Card: React.FC<CardProps> = ({title, releaseDate}) => (
    <div className="card m-6">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
            </figure>
        </div>
        <div className="has-text-weight-bold p-4">{title}</div>
        <div>{releaseDate}</div>
    </div>
);

export default Card;