import { c } from './utils.jsx'

export default function Icon({ className, icon, ...rest }) {
  return (
    <span className={c(className, "icon")}>
      <i className={`fas fa-${icon}`} />
    </span>
  )
}