const makeUrl = (sortingField: string, genres: string[]) => {
    const baseUrl = "http://localhost:4000/movies?";
    let sortingFieldPart = ""
    if (sortingField) {
        sortingFieldPart = `sortBy=${sortingField}&sortOrder=desc&`;
    }
    let genresPart = ""
    if (genres.length) {
        genresPart = `filter=${genres.join("%2C")}&`;
    }
    return `${baseUrl}${sortingFieldPart}${genresPart}limit=20`;
};

export default makeUrl;