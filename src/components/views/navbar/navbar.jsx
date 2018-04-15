import { NavLink } from 'react-router-dom'

import { c } from '../../core/utils.jsx'

import './navbar.css'

function Logo() {
  return (
    <svg width="60" height="50">
      <circle
        cx="25" cy="25" r="20"
        fill="none"
        stroke="black"
        strokeWidth="10"
      />
      <circle
        cx="30" cy="25" r="10"
        fill="none"
        stroke="black"
        strokeWidth="5"
      />
    </svg>
  )
}

function Login(props) {
  const username = 'joel'
  const role = 'admin'
  return (
    <div {...props}>
      <div className="tags has-addons">
        <span className="tag is-dark">{username}</span>
        <span className="tag is-info">{role}</span>
      </div>
    </div>
  )
}

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { menuExpanded: false }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <Logo />
            <h1 className="title">hello UI</h1>
          </a>
          <a role="button" className="navbar-burger"
              aria-label="menu" aria-expanded="false"
              onClick={() => this.setState({ menuExpanded: !this.state.menuExpanded })}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={c("navbar-menu", this.state.menuExpanded && "is-active")}>
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/dashboard">dashboard</NavLink>
            <NavLink className="navbar-item" to="/settings">settings</NavLink>
          </div>
          <div className="navbar-end">
            <Login className="navbar-item" />
          </div>
        </div>
      </nav>
    )
  }
}