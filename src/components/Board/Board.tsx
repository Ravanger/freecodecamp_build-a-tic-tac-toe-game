import { useState } from "react"
import { useStore } from "@nanostores/react"
import { playerTurn, switchTurns } from "@store/game"
import { CellState } from "./Cell/Cell.types"
import Cell from "./Cell"
import styles from "./Board.module.scss"

const initialCells: CellState[] = Array(9).fill(CellState.Empty)

const Board: React.FC = () => {
  const [cellsState, setCellsState] = useState<CellState[]>(initialCells)
  const currentPlayerTurn = useStore(playerTurn)

  const handleCellClick = (index: number) => {
    if (
      cellsState[index] !== CellState.Empty
      // || winner !== CellState.Empty
    ) {
      return
    }

    setCellsState(
      cellsState.map((prevCell, prevCellIndex) =>
        prevCellIndex === index ? currentPlayerTurn : prevCell
      )
    )

    // Check for a winner.
    // if (checkForWinner(nextSquares)) {
    //   setWinner(currentPlayer === Player.Human ? CellState.X : CellState.O)
    // }

    // Switch to the next player.
    switchTurns()

    // If the current player is the AI, let it take its turn.
    // if (currentPlayer === Player.AI) {
    //   setTimeout(() => makeAIMove(), 500)
    // }
  }

  const cellButtons = cellsState.map((cellState, cellIndex) => (
    <Cell
      key={cellIndex}
      state={cellState}
      onClick={() => handleCellClick(cellIndex)}
    />
  ))

  return (
    <>
      <div style={{ textAlign: "center" }}>Turn: {currentPlayerTurn}</div>
      <div className={styles.board}>{cellButtons}</div>
    </>
  )
}

export default Board
