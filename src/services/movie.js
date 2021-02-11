import {getApiUrl} from "./api";

export function getGenre(searchText, page) {
    return fetch(
        getApiUrl(
            `/genre/movie/list`,
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json());
}

export function getListGenre(searchText, page) {
    return fetch(
        getApiUrl(
            `/discover/movie`,
            {
                language: 'fr-FR',
                with_genres: 12,
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

export function getDirecting(id) {
    console.log(id)
    return fetch(
        getApiUrl(
            `/movie/${id}/credits`,
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json());
}

export function getListGenre(searchText, page) {
    return fetch(
        getApiUrl(
            `/discover/movie`,
            {
                language: 'fr-FR',
                with_genres: 12,
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

export function getDirecting(id) {
    console.log(id)
    return fetch(
        getApiUrl(
            `/movie/${id}/credits`,
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json());
}


