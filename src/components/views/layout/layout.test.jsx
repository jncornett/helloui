import React from 'react'
import { shallow } from 'enzyme'

import Layout from './layout.jsx'

describe('<Layout />', () => {
  it('renders', () => {
    const w = shallow(<Layout />)
  })
})