export type moviesFields = {
    id: number,
    title: string,
    tagline: string,
    release_date: string,
    poster_path: string,
    vote_average: number,
    vote_count?: number,
    runtime: number,
    overview?: string,
    budget?: number,
    revenue?: number,
    genres?: string[],
}
