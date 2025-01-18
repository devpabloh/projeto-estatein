import { Link } from "react-router-dom"

/* CSS */
import style from "./Logo.module.css"

/* Logo */
import logo from "../../assets/Symbol.png"

const Logo = () => {
  return (
    <Link to="/" className={style.containerLogo}>
        <img src={logo} alt="Logo" />
        <span>Estatein</span>
    </Link>
  )
}

export default Logo