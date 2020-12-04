import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to='/'>Box shadow</Link>
        </li>
        <li>
          <Link to='/border'>Border</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav