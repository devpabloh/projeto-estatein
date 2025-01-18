import { Link } from "react-router-dom"

/* Logo */
import logo from "../../assets/Symbol.png"

const Logo = () => {
  return (
    <Link to="/">
        <img src={logo} alt="Logo" />
        <span>Estatein</span>
    </Link>
  )
}

export default Logo