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

    const store = createStore(feedReducer, INITIAL_STATE);

    jest.spyOn(React, 'useEffect').mockImplementation((f: any) => f());
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatchFn);
    jest.spyOn(redux, 'useSelector').mockReturnValue({
        prints: store.getState().prints,
        loading: store.getState().loading
    });

    let mount;
    let wrapper;

    beforeAll(() => {
        mount = createMount();
    });
    
    afterAll(() => {
        mount.cleanUp();
    });

    it('Renders correctly', () => {
        wrapper = mount(
            <Context.Provider value={[true]} >
                <Feed />
            </Context.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('UseEffect', () => {
        expect(mockDispatchFn).toHaveBeenCalledWith(fetchFeed())
    })
})