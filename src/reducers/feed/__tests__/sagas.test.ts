import { watchLoadItems, loadItems, nextUrlSelector } from '../sagas';
import { fetchItems } from '../utils';
import { takeEvery, put, select, call } from 'redux-saga/effects';
import { FEED_FETCH, INITIAL_URL } from '../constants';
import { feedLoading, feedSuccess, feedFailure } from '../actions';

jest.mock('../utils');

describe('Feed Reducer Sagas', () => {
    it('watchLoadItems', () => {
        const gen = watchLoadItems();
        expect(gen.next().value).toEqual(takeEvery(FEED_FETCH, loadItems));
    })

    it('loadItems : initial', () => {
        const MOCK_VALUE = {
            records: [1, 3, 5],
            info: {
                next: 'nextUrl'
            }
        }

        const gen = loadItems();
        expect(gen.next().value).toEqual(put(feedLoading()))
        expect(gen.next().value).toEqual(select(nextUrlSelector))
        expect(gen.next().value).toEqual(call(fetchItems, INITIAL_URL))
        expect(gen.next(MOCK_VALUE).value).toEqual(put(feedSuccess([1, 3, 5], 'nextUrl')));
    })

    it('loadItems : next', () => {
        const gen = loadItems();
        expect(gen.next().value).toEqual(put(feedLoading()))
        expect(gen.next().value).toEqual(select(nextUrlSelector))
        expect(gen.next('nextUrl').value).toEqual(call(fetchItems, 'nextUrl'));
    })

    it('loadItems : failure', () => {
        const gen = loadItems();
        expect(gen.next().value).toEqual(put(feedLoading()))
        expect(gen.next().value).toEqual(select(nextUrlSelector))
        expect(gen.next('nextUrl').value).toEqual(call(fetchItems, 'nextUrl'));
        expect(gen.throw('Failed to fetch').value).toEqual(put(feedFailure('Failed to fetch')));
    })
})