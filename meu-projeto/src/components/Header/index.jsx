import { Link } from "react-router-dom"

import styles from "./Header.module.css"

import Logo from "../Logo/index"
import NavBar from "../Navbar"

const index = () => {
  return (
    <header className={styles.containerHeader}>
        <Logo/>
        <NavBar/>
        <Link to="/contato">Contato</Link>
        
    </header>
  )
}

export default index