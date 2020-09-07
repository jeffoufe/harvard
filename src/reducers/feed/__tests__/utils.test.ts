import { fetchItems } from '../utils';

describe('Feed utils functions', () => {
    it('fetchItems', async () => {    
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve('test'),
            })
        );

        const response = await fetchItems('coucou');
        expect(global.fetch).toHaveBeenCalledWith('coucou');
        expect(response).toEqual('test')
    })
})