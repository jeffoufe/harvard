import React from 'react';
import { shallow } from 'enzyme';
import LoadingPrint from '..'; 

describe('LoadingPrint', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<LoadingPrint />);
        expect(wrapper).toMatchSnapshot();
    })
})