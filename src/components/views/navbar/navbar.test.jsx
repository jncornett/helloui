import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './navbar.jsx'

Enzyme.configure({ adapter: new Adapter() })

describe('<Navbar />', () => {
  it('renders', () => {
    const w = shallow(<Navbar />)
  })
})