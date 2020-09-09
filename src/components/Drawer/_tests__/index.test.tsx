import React from 'react';
import Drawer from '..';
import Context from '../../../Context';
import { createMount } from '@material-ui/core/test-utils';

describe('Drawer', () => {
    let mount;
    let wrapper;
    const closeDrawerHandler = jest.fn()

    beforeAll(() => {
        mount = createMount();
    });
    
    afterAll(() => {
        mount.cleanUp();
    });

    it('render correctly', () => {
        wrapper = mount(
            <Context.Provider value={[true, closeDrawerHandler]}>
                <Drawer />
            </Context.Provider>
        )

        expect(wrapper).toMatchSnapshot();
    })

    it('props are passed', () => {
       expect(wrapper.find('ForwardRef(Drawer)').props()['open']).toBeTruthy();
    })

    it('handlers', () => {
        wrapper.find('ForwardRef(IconButton)').props()['onClick']();
        expect(closeDrawerHandler).toHaveBeenCalledWith(false);
    })
})