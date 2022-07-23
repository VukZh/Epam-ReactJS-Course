export type CardProps = {
    title: string;
    releaseDate: string;
    imgSrc: string;
    rating: number;
    shortDescription: string;
    id: number,
    setDetail: (arg: boolean) => void,
    setIdMovie: (arg: number) => void,
};