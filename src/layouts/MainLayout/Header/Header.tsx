import type { HeaderPropTypes } from "./Header.types"
import styles from "./Header.module.scss"

const Header: React.FC<HeaderPropTypes> = ({ title = "TITLE" }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
