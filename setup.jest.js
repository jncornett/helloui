import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

window.React = require('react')
window.Component = require('react').Component
window.PropTypes = require('prop-types')