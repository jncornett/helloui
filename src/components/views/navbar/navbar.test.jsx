import React from 'react'
import { shallow } from 'enzyme'

import Navbar from './navbar.jsx'

describe('<Navbar />', () => {
  it('renders', () => {
    const w = shallow(<Navbar />)
  })
})