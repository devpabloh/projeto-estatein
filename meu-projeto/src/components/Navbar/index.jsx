import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav>
        <ul className={styles.containerNav}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/propriedades">Propriedades</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar