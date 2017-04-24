import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const wrapper = shallow(<Header/>);

describe('Component : Header', ()=>{
  it('Renders without crashing',()=>{
    expect(wrapper.length).toBe(1);
  });
});
