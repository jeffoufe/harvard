import React from 'react';
import { shallow } from 'enzyme';
import MissingImage from '..'; 

describe('MissingImage', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<MissingImage />);
        expect(wrapper).toMatchSnapshot();
    })
})