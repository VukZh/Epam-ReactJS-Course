import React, {useState} from "react";
import './genretabs.style.scss';

const GenreTabs: React.FC = () => {

    const [allGenres, setAllGenres] = useState(false);
    const [documentaryGenre, setDocumentaryGenre] = useState(false);
    const [comedyGenre, setComedyGenre] = useState(false);
    const [horrorGenre, setHorrorGenre] = useState(false);
    const [crimeGenre, setCrimeGenre] = useState(false);

    const allGenresHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setAllGenres(true);
        setDocumentaryGenre(false);
        setComedyGenre(false);
        setHorrorGenre(false);
        setCrimeGenre(false);
    }

    const documentaryGenresHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setAllGenres(false);
        setDocumentaryGenre(!documentaryGenre);
    }

    const comedyGenreHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setAllGenres(false);
        setComedyGenre(!comedyGenre);
    }

    const horrorGenreHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setAllGenres(false);
        setHorrorGenre(!horrorGenre);
    }

    const crimeGenreHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setAllGenres(false);
        setCrimeGenre(!crimeGenre);
    }

    return (
        <div>
            <ul className="genretabs">
                <li><a className={allGenres ? "genretabs--link-active" : "genretabs--link"} onClick={allGenresHandler}>ALL</a></li>
                <li><a className={documentaryGenre ? "genretabs--link-active" : "genretabs--link"} onClick={documentaryGenresHandler}>DOCUMENTARY</a></li>
                <li><a className={comedyGenre ? "genretabs--link-active" : "genretabs--link"} onClick={comedyGenreHandler}>COMEDY</a></li>
                <li><a className={horrorGenre ? "genretabs--link-active" : "genretabs--link"} onClick={horrorGenreHandler}>HORROR</a></li>
                <li><a className={crimeGenre ? "genretabs--link-active" : "genretabs--link"} onClick={crimeGenreHandler}>CRIME</a></li>
            </ul>
        </div>
    );
}

export default GenreTabs;

