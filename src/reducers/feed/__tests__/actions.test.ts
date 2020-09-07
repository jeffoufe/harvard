import {
    fetchFeed,
    feedLoading,
    feedSuccess,
    feedFailure,
} from '../actions';

import {
    FEED_LOADING,
    FEED_SUCCESS,
    FEED_FAILURE,
    FEED_FETCH
} from '../constants';

describe('Feed Reducer Actions', () => {
    it('fetchFeed', () => {
        expect(fetchFeed()).toEqual({
            type: FEED_FETCH
        })
    })

    it('feedLoading', () => {
        expect(feedLoading()).toEqual({
            type: FEED_LOADING
        })
    })

    it('feedSuccess', () => {
        expect(feedSuccess([1, 3, 5], 'nextUrl')).toEqual({
            type: FEED_SUCCESS,
            payload: {
                prints: [1, 3, 5],
                nextUrl: 'nextUrl'
            }
        })
    })

    it('feedFailure', () => {
        expect(feedFailure('error')).toEqual({
            type: FEED_FAILURE,
            payload: {
                error: 'error'
            }
        })
    })
})