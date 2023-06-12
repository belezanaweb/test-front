import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/payment">About</Link>
        </li>
        <li>
          <a>Dashboard</a>
        </li>
      </ul>
    </nav>
  )
}

export { Navigation }
