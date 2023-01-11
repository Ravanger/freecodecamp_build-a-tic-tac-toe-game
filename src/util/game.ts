import { CellState } from "@type/game"

export const checkForWinner = (board: CellState[]) => {
  const rowLength = Math.sqrt(board.length)

  // Check the rows.
  for (let i = 0; i < board.length; i += 3) {
    if (
      board[i] !== CellState.Empty &&
      board[i] === board[i + 1] &&
      board[i] === board[i + 2]
    ) {
      return true
    }
  }

  // Check the columns.
  for (let i = 0; i < rowLength; i++) {
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

export const getWinningMoveIndex = (board: CellState[]) => {
  const rowLength = Math.sqrt(board.length)

  // Check the rows.
  for (let i = 0; i < board.length; i += 3) {
    if (
      board[i] === CellState.Empty &&
      board[i + 1] !== CellState.Empty &&
      board[i + 2] === board[i + 1]
    ) {
      return i
    }

    if (
      board[i] !== CellState.Empty &&
      board[i + 1] === CellState.Empty &&
      board[i + 2] === board[i]
    ) {
      return i + 1
    }

    if (
      board[i] !== CellState.Empty &&
      board[i + 1] === board[i] &&
      board[i + 2] === CellState.Empty
    ) {
      return i + 2
    }
  }

  // Check the columns.
  for (let i = 0; i < rowLength; i++) {
    if (
      board[i] === CellState.Empty &&
      board[i + 3] !== CellState.Empty &&
      board[i + 6] === board[i + 3]
    ) {
      return i
    }

    if (
      board[i] !== CellState.Empty &&
      board[i + 3] === CellState.Empty &&
      board[i + 6] === board[i]
    ) {
      return i + 3
    }

    if (
      board[i] !== CellState.Empty &&
      board[i + 3] === board[i] &&
      board[i + 6] === CellState.Empty
    ) {
      return i + 6
    }
  }

  // Check the diagonals.
  if (
    board[0] === CellState.Empty &&
    board[4] !== CellState.Empty &&
    board[8] === board[4]
  ) {
    return 0
  }

  if (
    board[0] !== CellState.Empty &&
    board[4] === CellState.Empty &&
    board[8] === board[0]
  ) {
    return 4
  }

  if (
    board[0] !== CellState.Empty &&
    board[4] === board[0] &&
    board[8] === CellState.Empty
  ) {
    return 8
  }

  if (
    board[2] === CellState.Empty &&
    board[4] !== CellState.Empty &&
    board[6] === board[4]
  ) {
    return 2
  }

  if (
    board[2] !== CellState.Empty &&
    board[4] === CellState.Empty &&
    board[6] === board[2]
  ) {
    return 4
  }

  if (
    board[2] !== CellState.Empty &&
    board[4] === board[2] &&
    board[6] === CellState.Empty
  ) {
    return 6
  }

  return -1
}

export const checkForTie = (board: CellState[]): boolean => {
  if (board.some((cell) => cell === CellState.Empty)) {
    return false
  }

  return true
}
