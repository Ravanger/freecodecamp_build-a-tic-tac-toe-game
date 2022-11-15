import type { CellPropTypes } from "./Cell/Cell.types"
import styles from "./Board.module.scss"
import { useState } from "react"
import Cell from "./Cell"

// ?TODO?: Lift to global state?
const initialCells: CellPropTypes[] = Array(9).fill({ state: undefined })
const TEMP_PLAYER_STATE = "X"

const Board: React.FC = () => {
  const [cellsState, setCellsState] = useState<CellPropTypes[]>(initialCells)

  const cellButtons = cellsState.map((cell, cellIndex) => (
    <Cell
      key={cellIndex}
      state={cell.state}
      onClick={() => {
        if (!cellsState[cellIndex] || cellsState[cellIndex]?.state) return
        console.log("Cell clicked: ", TEMP_PLAYER_STATE, cellIndex)

        setCellsState((prevCellState) =>
          prevCellState.map((prevCell, prevCellIndex) =>
            prevCellIndex === cellIndex
              ? { state: TEMP_PLAYER_STATE }
              : prevCell
          )
        )
      }}
    />
  ))

  return <div className={styles.board}>{cellButtons}</div>
}

export default Board
