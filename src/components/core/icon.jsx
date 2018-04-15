import { c } from './utils'

function Icon({ className, icon, ...rest }) {
  return (
    <span className={c(className, 'icon')} {...rest}>
      <i className={`fas fa-${icon}`} />
    </span>
  )
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Icon
