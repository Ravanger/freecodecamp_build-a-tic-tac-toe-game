import { CellState } from "@type/game"
import { getWinningMoveIndex } from "./game"

export const getEasyMoveIndex = async (currentCellsState: CellState[]) => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 500))
  return currentCellsState.findIndex((square) => square === CellState.Empty)
}

export const getMidMoveIndex = async (currentCellsState: CellState[]) => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 500))
  let index = Math.floor(Math.random() * (currentCellsState.length + 1))
  // 33% random chance to make or block winning move
  const shouldMakeWinningMove = Math.random() < 0.333
  const winningMoveIndex =
    shouldMakeWinningMove && getWinningMoveIndex(currentCellsState)
  if (winningMoveIndex && winningMoveIndex !== -1) {
    index = winningMoveIndex
  } else {
    while (currentCellsState[index] !== CellState.Empty) {
      index = Math.floor(Math.random() * (currentCellsState.length + 1))
    }
  }
  return index
}

export const getHardMoveIndex = async (currentCellsState: CellState[]) => {
  // TODO: Hard difficulty
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))
  return getMidMoveIndex(currentCellsState)
}
