import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Icon from './icon.jsx'

Enzyme.configure({ adapter: new Adapter() })

describe('<Icon />', () => {
  it('renders', () => {
    const w = shallow(<Icon icon="foo" />)
    expect(w.contains(<i className="fas fa-foo" />)).toBe(true)
  })
})
