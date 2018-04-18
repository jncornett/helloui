import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import config from '../config.json'

Enzyme.configure({ adapter: new Adapter() })

function resolve(expr) {
  if (!(expr instanceof Array)) {
    // eslint-disable-next-line no-param-reassign
    expr = [expr]
  }
  // eslint-disable-next-line import/no-dynamic-require,global-require
  let cur = require(expr.shift())
  for (const part of expr) {
    cur = cur[part]
  }
  return cur
}

Object.entries(config.globals).forEach(([key, value]) => {
  window[key] = resolve(value)
})
