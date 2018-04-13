import { Link, Route } from 'react-router-dom'

import Navbar from '../navbar/navbar.jsx'
import Dashboard from '../dashboard/dashboard.jsx'

import './layout.css'

export default function Layout() {
  return (
    <section className="section">
      <Navbar />
      <div className="container is-fluid">
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </section>
  )
}