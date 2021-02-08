import { API_KEY, API_URL} from "../constant/api";

function getQueryString(queryParams) {
    // const obj = {param1: "value1", param2: 12}
    let queryString;
    if (typeof queryParams === 'object') {
        //?param1=value1&param2=12 etc...
        queryString = Object.entries(queryParams)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&')
    }
    
    if (queryString) {
        return `?${queryString}`
    }

    return ''
}

function getUrl(path, queryParams) {
    return `${path}${getQueryString(queryParams)}`;
}



export function getApiUrl(path, queryParams = {}) {
    return getUrl(
        `${API_URL}${path}`,
        {...queryParams, api_key: API_KEY}
    )
}
