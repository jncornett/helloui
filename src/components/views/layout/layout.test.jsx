import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './layout.jsx'

Enzyme.configure({ adapter: new Adapter() })

describe('<Layout />', () => {
  it('renders', () => {
    const w = shallow(<Layout />)
  })
})