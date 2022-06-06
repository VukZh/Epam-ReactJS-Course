import React from 'react';

import i1 from '../images/movies/1.png';
import i2 from '../images/movies/2.png';
import i3 from '../images/movies/3.png';
import i4 from '../images/movies/4.png';
import i5 from '../images/movies/5.png';
import i6 from '../images/movies/6.png';
import i7 from '../images/movies/7.png';
import i8 from '../images/movies/8.png';
import i9 from '../images/movies/9.png';
import i10 from '../images/movies/10.png';
import i11 from '../images/movies/11.png';
import i12 from '../images/movies/12.png';
import i13 from '../images/movies/13.png';
import i14 from '../images/movies/14.png';
import i15 from '../images/movies/15.png';
import i16 from '../images/movies/16.png';
import i17 from '../images/movies/17.png';
import i18 from '../images/movies/18.png';
import i19 from '../images/movies/19.png';
import i20 from '../images/movies/20.png';
import i21 from '../images/movies/21.png';
import i22 from '../images/movies/22.png';
import i23 from '../images/movies/23.png';
import i24 from '../images/movies/24.png';
import i25 from '../images/movies/25.png';
import i26 from '../images/movies/26.png';
import i27 from '../images/movies/27.png';
import i28 from '../images/movies/28.png';
import i29 from '../images/movies/29.png';
import i30 from '../images/movies/30.png';

type CardProps = {
    title: string;
    releaseDate: string;
    rating: number;
    index: number
};

const selectImage = (index: number) => {
    switch (index) {
        case 0: return i1;
        case 1: return i2;
        case 2: return i3;
        case 3: return i4;
        case 4: return i5;
        case 5: return i6;
        case 6: return i7;
        case 7: return i8;
        case 8: return i9;
        case 9: return i10;
        case 10: return i11;
        case 11: return i12;
        case 12: return i13;
        case 13: return i14;
        case 14: return i15;
        case 15: return i16;
        case 16: return i17;
        case 17: return i18;
        case 18: return i19;
        case 19: return i20;
        case 20: return i21;
        case 21: return i22;
        case 22: return i23;
        case 23: return i24;
        case 24: return i25;
        case 25: return i26;
        case 26: return i27;
        case 27: return i28;
        case 28: return i29;
        case 29: return i30;
    }
};

const Card: React.FC<CardProps> = ({title, releaseDate, rating, index}) => (
    <div className="card m-6 is-fullimage">
        <div className="card-image">
            <figure className="image">
                <img src={selectImage(index)} alt="Placeholder image"></img>
            </figure>
            <div className="card-stacked">
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <div className="columns">
                            <div className="column has-text-left m-1">{releaseDate}</div>
                            <div className="column has-text-right has-text-weight-semibold m-1">{rating}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Card;