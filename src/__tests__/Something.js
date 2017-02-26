// @flow

import something from '../Something';
jest.mock('ramda');


describe('Something', () => {
    it('Should Pass', () => {
        expect(something([2, 3])).toBe(2);
    });
});
