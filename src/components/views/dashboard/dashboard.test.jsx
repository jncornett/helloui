import React from 'react'
import { shallow } from 'enzyme'

import Dashboard from './dashboard.jsx'

describe('<Dashboard />', () => {
  it('renders', () => {
    const w = shallow(<Dashboard />)
  })
})