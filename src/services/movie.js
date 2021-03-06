import {getApiUrl} from "./api";

export function searchMovie(searchText, page) {
    return fetch(
        getApiUrl(
            `/search/movie`,
            {
                query: searchText,
                language: 'fr-FR',
                page: page
            }
        )
    ).then(result => result.json());
}

export function getGenre() {
    return fetch(
        getApiUrl(
            `/genre/movie/list`,
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json());
}

export function getListGenre(id) {
    return fetch(
        getApiUrl(
            `/discover/movie`,
            {
                language: 'fr-FR',
                with_genres: id,
            }
        )
    ).then(result => result.json());
}

export function getMovie(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}`,
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json());
}




