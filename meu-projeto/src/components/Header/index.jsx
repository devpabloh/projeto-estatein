import styles from "./Header.module.css"

import Logo from "../Logo/index"
import NavBar from "../Navbar"

const index = () => {
  return (
    <header className={styles.containerHeader}>
        <Logo/>
        <NavBar/>
    </header>
  )
}

export default index