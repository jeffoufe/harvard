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
        const people = [{ role: 'Artist', displayname: 'Robert' }]
        const print = { images: [], title: 'print', dated: '1990', people };
        const FEEDED_INITIAL_STATE = { ...INITIAL_STATE, prints: [print] };
        expect(feedReducer(FEEDED_INITIAL_STATE, feedSuccess([print, print, print], 'nextUrl'))).toEqual({
            ...FEEDED_INITIAL_STATE,
            loading: false,
            nextUrl: 'nextUrl',
            prints: [...FEEDED_INITIAL_STATE.prints, print, print, print]
        })
    })
})