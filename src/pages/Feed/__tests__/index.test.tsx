import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Feed from '..'
import * as redux from "react-redux";
import { createStore } from 'redux';
import { fetchFeed } from '../../../reducers/feed/actions';
import { feedReducer } from '../../../reducers';
import { INITIAL_STATE } from '../../../reducers/feed/constants';
import Context from '../../../Context';

describe('Feed', () => {
    const mockDispatchFn = jest.fn()

    const people = [{ role: 'Artist', displayname: 'Robert' }]

    const store = createStore(
        feedReducer, 
        {
            ...INITIAL_STATE,
            prints: [
                { images: [], title: 'print', dated: '1990', people },
                { images: [], title: 'print 2', dated: '1991', people },
            ]
        }
    );

    jest.spyOn(React, 'useEffect').mockImplementation((f: any) => f());
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatchFn);

    let mount;
    let wrapper;
    let loadingWrapper;

    beforeAll(() => {
        mount = createMount();
    });

    afterEach(() => {
        jest.clearAllMocks()
    })
    
    afterAll(() => {
        mount.cleanUp();
    });

    it('Renders correctly : prints loaded', () => {
        jest.spyOn(redux, 'useSelector').mockReturnValueOnce({
            prints: store.getState().prints,
            loading: store.getState().loading
        });

        wrapper = mount(
            <Context.Provider value={[true]} >
                <Feed />
            </Context.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Print').length).toEqual(2)
        expect(mockDispatchFn).toHaveBeenCalledWith(fetchFeed())
    })

    it('Render correctly: loading', () => {
        jest.spyOn(redux, 'useSelector').mockReturnValueOnce({
            prints: [],
            loading: true
        });
    
        loadingWrapper = mount(
            <Context.Provider value={[true]} >
                <Feed />
            </Context.Provider>
        )

        expect(loadingWrapper).toMatchSnapshot();
        expect(loadingWrapper.find('Print').length).toEqual(0)
        expect(loadingWrapper.find('LoadingPrint').length).toEqual(4)
    })

    it('Handlers', () => {
        const InfiniteScrollerWrapper = wrapper.find('InfiniteScroll');
        InfiniteScrollerWrapper.props()['next']();
        expect(mockDispatchFn).toHaveBeenCalledWith(fetchFeed())  
    })
})