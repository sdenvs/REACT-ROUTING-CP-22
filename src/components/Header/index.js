import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="d-flex justify-content-between align-items-center flex-wrap p-2">
    <Link className="d-flex pt-1" to="/">
      <img
        className="logoImg mr-1"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <p className="headerText">Wave</p>
    </Link>
    <div className="d-flex flex-wrap">
      <Link className="headerText" to="/">
        Home
      </Link>
      <Link className="headerText" to="/about">
        About
      </Link>
      <Link className="headerText" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
