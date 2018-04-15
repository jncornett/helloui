import { BrowserRouter } from 'react-router-dom'

import 'bulma/css/bulma.css'

import Layout from './components/views/layout/layout.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}