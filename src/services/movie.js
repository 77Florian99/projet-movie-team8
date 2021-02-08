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
