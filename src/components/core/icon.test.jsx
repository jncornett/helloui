import React from 'react'
import { shallow } from 'enzyme'

import Icon from './icon.jsx'

describe('<Icon />', () => {
  it('renders', () => {
    const w = shallow(<Icon icon="foo" />)
    expect(w.contains(<i className="fas fa-foo" />)).toBe(true)
  })
})
