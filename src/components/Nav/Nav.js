import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../../asset/logo.png'

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
      <img src={logo} alt='logo' />
    </nav>
  )
}

export default Nav