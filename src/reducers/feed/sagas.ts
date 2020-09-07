import { takeEvery, put, select, call } from 'redux-saga/effects';
import { INITIAL_URL, FEED_FETCH } from './constants';
import { FeedState } from './types';
import { fetchItems } from './utils';
import {
    feedLoading,
    feedSuccess,
    feedFailure
} from './actions';

export const nextUrlSelector  = (state: FeedState) => state.nextUrl;

export function* loadItems() {
    try {
        yield put(feedLoading())
        const nextUrl = yield select(nextUrlSelector);
        const responseJson = yield call(fetchItems, nextUrl || INITIAL_URL);
        yield put(feedSuccess(responseJson.records, responseJson.info.next))
    } catch (error) {
        yield put(feedFailure('Failed to fetch'));
    }
} 

export function* watchLoadItems() {
    // @ts-ignore
    yield takeEvery(FEED_FETCH, loadItems);
}