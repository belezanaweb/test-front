import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to="/payment">Invoices</Link> | <Link to="/confirmation">Expenses</Link>
      </nav>
    </div>
  )
}
