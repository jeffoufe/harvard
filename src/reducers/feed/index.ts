
import { FeedState, FeedAction } from './types';
import {
    INITIAL_STATE,
    FEED_LOADING,
    FEED_SUCCESS,
    FEED_FAILURE
} from './constants';

export default (state: FeedState = INITIAL_STATE, action: FeedAction) => {
    switch (action.type) {
        case FEED_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FEED_SUCCESS:
            return {
                ...state,
                loading: false,
                prints: [...state.prints, ...action.payload.prints],
                nextUrl: action.payload.nextUrl
            };
        case FEED_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
};