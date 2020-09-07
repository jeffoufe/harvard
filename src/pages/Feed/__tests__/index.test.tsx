import React from 'react';
import { mount } from 'enzyme';
import Feed from '..'
import * as redux from "react-redux";
import { createStore } from 'redux';
import { fetchFeed } from '../../../reducers/feed/actions';
import { feedReducer } from '../../../reducers';

describe('Feed Page', () => {
    const mockDispatchFn = jest.fn()
    jest.spyOn(React, 'useEffect').mockImplementation((f: any) => f());
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const store = createStore(feedReducer);
    const wrapper = mount(
        <redux.Provider store={store}>
            <Feed />
        </redux.Provider>
    );

    it('Renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('UseEffect', () => {
        expect(mockDispatchFn).toHaveBeenCalledWith(fetchFeed())
    })
})