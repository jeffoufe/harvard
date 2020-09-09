import React from 'react';
import TopBar from '..';
import Context from '../../../Context';
import { createMount } from '@material-ui/core/test-utils';

describe('TopBar', () => {
    let mount;
    let wrapper;
    const openDrawerHandler = jest.fn()

    beforeAll(() => {
        mount = createMount();
    });
    
    afterAll(() => {
        mount.cleanUp();
    });

    it('render correctly', () => {
        wrapper = mount(
            <Context.Provider value={[true, openDrawerHandler]}>
                <TopBar />
            </Context.Provider>
        )

        expect(wrapper).toMatchSnapshot();
    })

    it('handlers', () => {
        wrapper.find('ForwardRef(IconButton)').props()['onClick']();
        expect(openDrawerHandler).toHaveBeenCalledWith(true);
    })

    it('props are passed', () => {
        expect(wrapper.find('ForwardRef(AppBar)').props()['className'].includes('appBarShift')).toBeTruthy()
    })
})