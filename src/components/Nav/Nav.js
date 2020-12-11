import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li>
        <h3>
          <Link to='/'>Box shadow</Link>
          </h3>
        </li>
        <li>
        <h3>
          <Link to='/border'>Border</Link>
          </h3>
        </li>
      </ul>
    </nav>
  )
}

export default Nav