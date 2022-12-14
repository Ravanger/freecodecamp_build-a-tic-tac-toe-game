import type { HeaderPropTypes } from "./Header.types"
import { useStore } from "@nanostores/react"
import { playerTurn } from "@store/game"
import Spacer from "@components/common/Spacer"
import styles from "./Header.module.scss"

const Header: React.FC<HeaderPropTypes> = ({ title = "TITLE" }) => {
  const currentPlayerTurn = useStore(playerTurn)

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Spacer />
      <div>Turn: {currentPlayerTurn}</div>
    </header>
  )
}

export default Header
