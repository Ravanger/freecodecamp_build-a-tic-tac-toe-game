import { CellState } from "@components/Board/Cell/Cell.types"

export const checkForWinner = (board: CellState[]) => {
  // Check the rows.
  for (let i = 0; i < 9; i += 3) {
    if (
      board[i] !== CellState.Empty &&
      board[i] === board[i + 1] &&
      board[i] === board[i + 2]
    ) {
      return true
    }
  }

  // Check the columns.
  for (let i = 0; i < 3; i++) {
    if (
      board[i] !== CellState.Empty &&
      board[i] === board[i + 3] &&
      board[i] === board[i + 6]
    ) {
      return true
    }
  }

  // Check the diagonals.
  if (
    board[0] !== CellState.Empty &&
    board[0] === board[4] &&
    board[0] === board[8]
  ) {
    return true
  }

  if (
    board[2] !== CellState.Empty &&
    board[2] === board[4] &&
    board[2] === board[6]
  ) {
    return true
  }

  return false
}

export const checkForTie = (board: CellState[]): boolean => {
  if (board.some((cell) => cell === CellState.Empty)) {
    return false
  }

  return true
}
