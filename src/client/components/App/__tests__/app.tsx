import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Base React App', () => {
  test('Should Render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html().length).toBeGreaterThan(0);
  });
});
