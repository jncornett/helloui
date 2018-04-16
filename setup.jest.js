import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// FIXME should share "Provided" components from webpack config IOT stay in sync.
window.React = require('react')
window.Component = require('react').Component
window.PropTypes = require('prop-types')