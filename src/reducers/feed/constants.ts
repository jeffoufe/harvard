export const INITIAL_URL = 'https://api.harvardartmuseums.org/objec?classification=Prints&hasimage=1&apikey=c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc&size=10&page=1'

export const INITIAL_STATE = {
    loading: true,
    prints: [],
    nextUrl: null,
    error: null
}

export const FEED_FETCH = 'FEED/FEED_FETCH';
export const FEED_LOADING = 'FEED/FEED_LOADING';
export const FEED_SUCCESS = 'FEED/FEED_SUCCESS';
export const FEED_FAILURE = 'FEED/FEED_FAILURE';