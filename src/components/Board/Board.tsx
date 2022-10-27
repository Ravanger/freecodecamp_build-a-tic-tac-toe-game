import type { CellPropTypes } from "./Cell/Cell.types"
import styles from "./Board.module.scss"
import { useState } from "react"
import Cell from "./Cell"

// ?TODO?: Lift to global state?
const initialCells: CellPropTypes[][] = Array(3)
  .fill(null)
  .map(() => Array<CellPropTypes>(3).fill({ state: undefined }))

const Board: React.FC = () => {
  const [cellsState, setCellsState] = useState<CellPropTypes[][]>(initialCells)

  const cellButtons = cellsState.map((cellRow) =>
    cellRow.map((cell) => <Cell state={cell.state} />)
  )

  return <div className={styles.board}>{cellButtons}</div>
}

export default Board
