import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from './dashboard.jsx'

Enzyme.configure({ adapter: new Adapter() })

describe('<Dashboard />', () => {
  it('renders', () => {
    const w = shallow(<Dashboard />)
  })
})