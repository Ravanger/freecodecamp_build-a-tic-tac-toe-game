import { useState } from "react"
import { useStore } from "@nanostores/react"
import {
  isAiEnabled,
  playerTurn,
  setWinner,
  switchTurns,
  winner,
} from "@store/game"
import { CellState } from "./Cell/Cell.types"
import Cell from "./Cell"
import styles from "./Board.module.scss"
import { checkForWinner } from "@util/game"

const initialCells: CellState[] = Array(9).fill(CellState.Empty)

const Board: React.FC = () => {
  const [cellsState, setCellsState] = useState<CellState[]>(initialCells)
  const currentPlayerTurn = useStore(playerTurn)
  const currentWinner = useStore(winner)
  const aiEnabled = useStore(isAiEnabled)

  const makeCheatAIMove = async () => {
    if (currentPlayerTurn !== CellState.O) return

    await new Promise((resolve) => setTimeout(resolve, 500))

    // Find the first empty square and mark it with the AI's value.
    const emptySquareIndex = cellsState.findIndex(
      (square) => square === CellState.Empty
    )

    if (emptySquareIndex === -1) {
      return
    }

    const updatedBoard = cellsState.map((prevCell, prevCellIndex) =>
      prevCellIndex === emptySquareIndex ? currentPlayerTurn : prevCell
    )

    const nextSquares = cellsState.slice()
    nextSquares[emptySquareIndex] = CellState.O
    setCellsState(nextSquares)

    // Check for a winner.
    if (checkForWinner(nextSquares)) {
      setWinner()
    } else {
      switchTurns()
    }
  }

  const handleCellClick = async (index: number) => {
    if (
      cellsState[index] !== CellState.Empty ||
      currentWinner !== CellState.Empty
    ) {
      return
    }

    if (aiEnabled && currentPlayerTurn === CellState.O) return

    const updatedBoard = cellsState.map((prevCell, prevCellIndex) =>
      prevCellIndex === index ? currentPlayerTurn : prevCell
    )

    if (checkForWinner(updatedBoard)) {
      setWinner()
    }

    switchTurns()
    setCellsState(updatedBoard)

    if (aiEnabled) {
      await makeCheatAIMove()
    }
  }

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
