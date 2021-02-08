import {getApiUrl} from "./api";

export function getGenre(searchText, page) {
    return fetch(
        getApiUrl(
            `/genre/movie/list`,
            {
                query: searchText,
                language: 'fr-FR',
                page: page
            }
        )
    ).then(result => result.json());
}
