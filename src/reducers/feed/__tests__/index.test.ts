import feedReducer from '..';
import { INITIAL_STATE } from '../constants';
import {
    feedLoading,
    feedSuccess,
    feedFailure
} from '../actions';

describe('Feed Reducer', () => {
    it('FEED_LOADING', () => {
        expect(feedReducer(INITIAL_STATE, feedLoading())).toEqual({
            ...INITIAL_STATE,
            loading: true,
        })
    })

    it('FEED_FAILURE', () => {
        expect(feedReducer(INITIAL_STATE, feedFailure('error'))).toEqual({
            ...INITIAL_STATE,
            error: 'error',
            loading: false
        })
    })

    it('FEED_SUCCEESS', () => {
        const FEEDED_INITIAL_STATE = { ...INITIAL_STATE, prints: [0] };
        expect(feedReducer(FEEDED_INITIAL_STATE, feedSuccess([1, 3, 5], 'nextUrl'))).toEqual({
            ...FEEDED_INITIAL_STATE,
            loading: false,
            nextUrl: 'nextUrl',
            prints: [...FEEDED_INITIAL_STATE.prints, 1, 3, 5]
        })
    })
})