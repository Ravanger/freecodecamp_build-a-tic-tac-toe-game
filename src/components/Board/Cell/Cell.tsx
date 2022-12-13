import type { CellPropTypes } from "./Cell.types"
import styles from "./Cell.module.scss"

const Cell: React.FC<CellPropTypes> = ({ state, onClick }) => {
  return (
    <button type="button" className={styles.cell} onClick={onClick}>
      {state}
    </button>
  )
}

export default Cell
