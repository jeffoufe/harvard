import {
    FEED_LOADING,
    FEED_SUCCESS,
    FEED_FAILURE
} from './constants';

export interface People {
    role: string,
    displayname: string
}

export interface Print {
    title: string,
    dated: string,
    images: Array<{
        baseimageurl: string
    }>,
    people: Array<People>
}

export interface FeedState {
    loading: boolean,
    prints: Array<Print>,
    nextUrl: string | null;
    error: string | null;
}

export interface FeedActionLoading {
    type: typeof FEED_LOADING
}

export interface FeedActionSuccess {
    type: typeof FEED_SUCCESS,
    payload: {
        prints: Array<Print>,
        nextUrl: string | null
    }
}

export interface FeedActionFailure {
    type: typeof FEED_FAILURE,
    payload: {
        error: string
    }
}

export type FeedAction =
    FeedActionFailure |
    FeedActionLoading |
    FeedActionSuccess