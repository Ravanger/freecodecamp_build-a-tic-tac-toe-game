import type { CellPropTypes } from "./Cell.types"
import styles from "./Cell.module.scss"

const Cell: React.FC<CellPropTypes> = ({ state }) => {
  return <button className={styles.cell}>{state}</button>
}

export default Cell
