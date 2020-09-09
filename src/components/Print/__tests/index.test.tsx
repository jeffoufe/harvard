import React from 'react';
import Print from '..';
import { createMount } from '@material-ui/core/test-utils';

describe('Drawer', () => {
    let mount;
    let emptyImagePrintWrapper;
    let imagePrintWrapper;

    beforeAll(() => {
        mount = createMount();
    });
    
    afterAll(() => {
        mount.cleanUp();
    });

    it('render correctly', () => {
        const printObject = { title: 'Print' };
        const people = [{ displayname: 'Robert', role: 'Artist' }];
        const dated = '1990';
        const emptyImagePrintProps = { print: { ...printObject, images: [], people, dated } }
        const imagePrintProps = { print: { ...printObject, people, dated, images: [{ baseimageurl: 'url' }] }}

        emptyImagePrintWrapper = mount(
            <Print {...emptyImagePrintProps} />
        )

        imagePrintWrapper  = mount(
            <Print {...imagePrintProps} />
        )

        expect(emptyImagePrintWrapper).toMatchSnapshot();
        expect(imagePrintWrapper).toMatchSnapshot();
    })

    it('missing image', () => {
        expect(emptyImagePrintWrapper.find('MissingImage').length).toEqual(1);
    })

    it('image', () => {
        expect(imagePrintWrapper.find('img').props()['src']).toEqual('url');
    })
})