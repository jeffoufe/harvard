import { Print, FeedActionSuccess, FeedActionFailure, FeedActionLoading, } from './types';
import {
    FEED_LOADING,
    FEED_SUCCESS,
    FEED_FAILURE,
    FEED_FETCH
} from './constants';

export const fetchFeed = () => ({
    type: FEED_FETCH
})

export const feedLoading = (): FeedActionLoading => ({
    type: FEED_LOADING
});

export const feedSuccess = (prints: Array<Print>, nextUrl: string | null): FeedActionSuccess => ({
    type: FEED_SUCCESS,
    payload: {
        prints, 
        nextUrl
    }
});

export const feedFailure = (error: string): FeedActionFailure => ({
    type: FEED_FAILURE,
    payload: {
        error
    }
});