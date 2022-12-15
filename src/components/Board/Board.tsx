import type { BoardPropTypes } from "./Cell/Board.types"
import Cell from "./Cell"
import styles from "./Board.module.scss"

const Board: React.FC<BoardPropTypes> = ({ cellsState, handleCellClick }) => {
  const cellButtons = cellsState.map((cellState, cellIndex) => (
    <Cell
      key={cellIndex}
      state={cellState}
      onClick={() => handleCellClick(cellIndex)}
    />
  ))

  return <div className={styles.board}>{cellButtons}</div>
}

export default Board
