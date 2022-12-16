import type { HeaderPropTypes } from "./Header.types"
import styles from "./Header.module.scss"
import Spacer from "@components/common/Spacer"

const Header: React.FC<HeaderPropTypes> = ({ title = "TITLE" }) => {
  return (
    <header className={styles.header}>
      <Spacer size="8ch" />
      <h1>{title}</h1>
    </header>
  )
}

export default Header
